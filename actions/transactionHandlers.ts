import {
	ActionFn,
	Context,
	Event,
	TransactionEvent,
} from '@tenderly/actions'
import { ethers } from 'ethers';
import { SQS } from 'aws-sdk';

import { abi } from './abis/NFTLoanFacilitator';

const IS_INTERESTING_EVENT: { [key: string]: boolean } = {
	"CreateLoan": true,
	"Repay": true,
	"SeizeCollateral": true,
	"UnderwriteLoan": true,
	"BuyoutUnderwriter": true,
	"Close": true,
}

export const defaultHandleTransaction: ActionFn = async (context: Context, event: Event) => {
	const transactionEvent = event as TransactionEvent
	const iface = new ethers.utils.Interface(abi)
	// handling unlikely case where someone just sends ETH to the contract
	// or there is a transaction with no event logs
	for (const log of transactionEvent.logs) {
		try {
			const event = iface.parseLog(log)
			if (IS_INTERESTING_EVENT[event.name]) {
				// notify 
				pushEvent(event.name, transactionEvent.hash)
			}
		} catch (err) {
			// likely there is an event, e.g. Transfer
			// which is not in our ABI
			console.log(err)
		}
	}
}

const pushEvent = (eventName: string, txHash: string) => {
	// TODO
	const sqs = new SQS({
		region: 'us-east-1',
		credentials: {
			accessKeyId: process.env.AWS_ACCESS_KEY!,
			secretAccessKey: process.env.AWS_SECRET_KEY!,
		},
	})
	sqs.sendMessage({
		QueueUrl: process.env.EVENTS_SQS_URL!,
		MessageBody: JSON.stringify({
			eventName,
			txHash
		})
	})

	console.log(
		`
		eventName: ${eventName},
		transactionHash: ${txHash}
		`
	)
}
