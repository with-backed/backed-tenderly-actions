export const abi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_manager",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "underwriter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "replacedLoanOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "interestEarned",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "replacedAmount",
          "type": "uint256"
        }
      ],
      "name": "BuyoutUnderwriter",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "Close",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "minter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "collateralTokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "collateralContract",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maxInterestRate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "loanAssetContract",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "minLoanAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "minDurationSeconds",
          "type": "uint256"
        }
      ],
      "name": "CreateLoan",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "repayer",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "loanOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "interestEarned",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "loanAmount",
          "type": "uint256"
        }
      ],
      "name": "Repay",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "SeizeCollateral",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "underwriter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "interestRate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "loanAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "durationSeconds",
          "type": "uint256"
        }
      ],
      "name": "UnderwriteLoan",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "feeRate",
          "type": "uint32"
        }
      ],
      "name": "UpdateOriginationFeeRate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "improvementPercent",
          "type": "uint256"
        }
      ],
      "name": "UpdateRequiredImprovementPercent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "WithdrawOriginationFees",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "INTEREST_RATE_DECIMALS",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "SCALAR",
      "outputs": [
        {
          "internalType": "uint40",
          "name": "",
          "type": "uint40"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "_loanInfo",
      "outputs": [
        {
          "internalType": "bool",
          "name": "closed",
          "type": "bool"
        },
        {
          "internalType": "uint16",
          "name": "perSecondInterestRate",
          "type": "uint16"
        },
        {
          "internalType": "uint32",
          "name": "durationSeconds",
          "type": "uint32"
        },
        {
          "internalType": "uint40",
          "name": "lastAccumulatedTimestamp",
          "type": "uint40"
        },
        {
          "internalType": "address",
          "name": "collateralContractAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "loanAssetContractAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "accumulatedInterest",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "loanAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "collateralTokenId",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "borrowTicketContract",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "loanId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "sendCollateralTo",
          "type": "address"
        }
      ],
      "name": "closeLoan",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "collateralTokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "collateralContractAddress",
          "type": "address"
        },
        {
          "internalType": "uint16",
          "name": "maxPerSecondInterest",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "minLoanAmount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "loanAssetContractAddress",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "minDurationSeconds",
          "type": "uint32"
        },
        {
          "internalType": "address",
          "name": "mintBorrowTicketTo",
          "type": "address"
        }
      ],
      "name": "createLoan",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "loanId",
          "type": "uint256"
        }
      ],
      "name": "interestOwed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lendTicketContract",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "loanId",
          "type": "uint256"
        }
      ],
      "name": "loanEndSeconds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "loanId",
          "type": "uint256"
        }
      ],
      "name": "loanInfo",
      "outputs": [
        {
          "internalType": "bool",
          "name": "closed",
          "type": "bool"
        },
        {
          "internalType": "uint16",
          "name": "perSecondInterestRate",
          "type": "uint16"
        },
        {
          "internalType": "uint32",
          "name": "durationSeconds",
          "type": "uint32"
        },
        {
          "internalType": "uint40",
          "name": "lastAccumulatedTimestamp",
          "type": "uint40"
        },
        {
          "internalType": "address",
          "name": "collateralContractAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "loanAssetContractAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "accumulatedInterest",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "loanAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "collateralTokenId",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "originationFeeRate",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "loanId",
          "type": "uint256"
        }
      ],
      "name": "repayAndCloseLoan",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "requiredImprovementPercentage",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "loanId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "sendCollateralTo",
          "type": "address"
        }
      ],
      "name": "seizeCollateral",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_contract",
          "type": "address"
        }
      ],
      "name": "setBorrowTicketContract",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_contract",
          "type": "address"
        }
      ],
      "name": "setLendTicketContract",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "loanId",
          "type": "uint256"
        }
      ],
      "name": "totalOwed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "loanId",
          "type": "uint256"
        },
        {
          "internalType": "uint16",
          "name": "interestRate",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint32",
          "name": "durationSeconds",
          "type": "uint32"
        },
        {
          "internalType": "address",
          "name": "sendLendTicketTo",
          "type": "address"
        }
      ],
      "name": "underwriteLoan",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "_originationFeeRate",
          "type": "uint32"
        }
      ],
      "name": "updateOriginationFeeRate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_improvementPercentage",
          "type": "uint256"
        }
      ],
      "name": "updateRequiredImprovementPercentage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "withdrawOriginationFees",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]