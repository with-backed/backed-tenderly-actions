import {
	ActionFn,
	Context,
	Event,
	TransactionEvent,
} from '@tenderly/actions'
import { ethers } from 'ethers';

import { abi } from './abis/NFTLoanFacilitator';

const IS_INTERESTING_EVENT : { [key: string]: boolean } = {
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
		const event = iface.parseLog(log)
		if(IS_INTERESTING_EVENT[event.name]){
			// notify 
			pushEvent(event.name, transactionEvent.hash)
		}
	}
}

const pushEvent = (eventName: string, transactionHash: string) => {
	// TODO
	console.log(
		`
		eventName: ${eventName},
		transactionHash: ${transactionHash}
		`
	)
}
