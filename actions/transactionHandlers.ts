import {
	ActionFn,
	Context,
	Event,
	TransactionEvent,
} from '@tenderly/actions'
import { ethers } from 'ethers';
import { SQS } from 'aws-sdk';

import { abi } from './abis/NFTLoanFacilitator';

const RELEVANT_EVENTS_MAPPING: { [key: string]: string } = {
	"CreateLoan": "CreateEvent",
	"Repay": "RepaymentEvent",
	"SeizeCollateral": "CollateralSeizureEvent",
	"UnderwriteLoan": "LendEvent",
	"BuyoutUnderwriter": "BuyoutEvent",
	"Close": "CloseEvent",
}

export const defaultHandleTransaction: ActionFn = async (context: Context, event: Event) => {
	const transactionEvent = event as TransactionEvent
	const iface = new ethers.utils.Interface(abi)
	// handling unlikely case where someone just sends ETH to the contract
	// or there is a transaction with no event logs
	for (const log of transactionEvent.logs) {
		try {
			const event = iface.parseLog(log)
			const mappedEventName = RELEVANT_EVENTS_MAPPING[event.name]
			if (mappedEventName) {
				// notify 
				await pushEvent(context, mappedEventName, transactionEvent.hash)
			}
		} catch (err) {
			// likely there is an event, e.g. Transfer
			// which is not in our ABI
			console.log(err)
		}
	}
}

const pushEvent = async (context: Context, eventName: string, txHash: string) => {
	// TODO
	const accessKeyId = await context.secrets.get('AWS_ACCESS_KEY')
	const secretAccessKey = await context.secrets.get('AWS_SECRET_KEY')
	const queueUrl = await context.secrets.get('EVENTS_SQS_URL')

	const sqs = new SQS({
		region: 'us-east-1',
		credentials: {
			accessKeyId,
			secretAccessKey,
		},
	})

	const res = await sqs.sendMessage({
		QueueUrl: queueUrl,
		MessageBody: JSON.stringify({
			eventName,
			txHash
		})
	}).promise()
	if (!!res.$response.error) {
		console.error(`error sending message to SQS ${res.$response.error.message}`)
	}

	console.log(
		`
		eventName: ${eventName},
		transactionHash: ${txHash}
		`
	)
}
