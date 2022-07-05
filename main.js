
var staging = true;
var transak_public_api_key = "43087539-a03c-4746-943b-2651b5d11058";
var bscscan_api_key = "8232CNUHG3EH1ZDAZHJIZQBTZPZZ97ED23";
var use_metamask = false;
var non_metamask_account;
var address;
var initialBalanceBeforeBuy;
var newBalance = 0;
var balanceChange = 0;

var lamden_receiver = "ff61544ea94eaaeb5df08ed863c4a938e9129aba6ceee5f31b6681bdede11b89";

var pancakeswap_router = "0x10ED43C718714eb63d5aA57B78B54704E256024E";
var pancakeswap_abi = [
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "_factory",
            "type": "address"
         },
         {
            "internalType": "address",
            "name": "_WETH",
            "type": "address"
         }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
   },
   {
      "inputs": [

      ],
      "name": "WETH",
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
            "internalType": "address",
            "name": "tokenA",
            "type": "address"
         },
         {
            "internalType": "address",
            "name": "tokenB",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "amountADesired",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountBDesired",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountAMin",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountBMin",
            "type": "uint256"
         },
         {
            "internalType": "address",
            "name": "to",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
         }
      ],
      "name": "addLiquidity",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "amountA",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountB",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
         }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "token",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "amountTokenDesired",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountTokenMin",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountETHMin",
            "type": "uint256"
         },
         {
            "internalType": "address",
            "name": "to",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
         }
      ],
      "name": "addLiquidityETH",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "amountToken",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountETH",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
         }
      ],
      "stateMutability": "payable",
      "type": "function"
   },
   {
      "inputs": [

      ],
      "name": "factory",
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
            "name": "amountOut",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "reserveIn",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "reserveOut",
            "type": "uint256"
         }
      ],
      "name": "getAmountIn",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
         }
      ],
      "stateMutability": "pure",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "reserveIn",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "reserveOut",
            "type": "uint256"
         }
      ],
      "name": "getAmountOut",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
         }
      ],
      "stateMutability": "pure",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
         },
         {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
         }
      ],
      "name": "getAmountsIn",
      "outputs": [
         {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
         },
         {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
         }
      ],
      "name": "getAmountsOut",
      "outputs": [
         {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "uint256",
            "name": "amountA",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "reserveA",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "reserveB",
            "type": "uint256"
         }
      ],
      "name": "quote",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "amountB",
            "type": "uint256"
         }
      ],
      "stateMutability": "pure",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "tokenA",
            "type": "address"
         },
         {
            "internalType": "address",
            "name": "tokenB",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountAMin",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountBMin",
            "type": "uint256"
         },
         {
            "internalType": "address",
            "name": "to",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
         }
      ],
      "name": "removeLiquidity",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "amountA",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountB",
            "type": "uint256"
         }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "token",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountTokenMin",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountETHMin",
            "type": "uint256"
         },
         {
            "internalType": "address",
            "name": "to",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
         }
      ],
      "name": "removeLiquidityETH",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "amountToken",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountETH",
            "type": "uint256"
         }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "token",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountTokenMin",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountETHMin",
            "type": "uint256"
         },
         {
            "internalType": "address",
            "name": "to",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
         }
      ],
      "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "amountETH",
            "type": "uint256"
         }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "token",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountTokenMin",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountETHMin",
            "type": "uint256"
         },
         {
            "internalType": "address",
            "name": "to",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
         },
         {
            "internalType": "bool",
            "name": "approveMax",
            "type": "bool"
         },
         {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
         },
         {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
         },
         {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
         }
      ],
      "name": "removeLiquidityETHWithPermit",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "amountToken",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountETH",
            "type": "uint256"
         }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "token",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountTokenMin",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountETHMin",
            "type": "uint256"
         },
         {
            "internalType": "address",
            "name": "to",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
         },
         {
            "internalType": "bool",
            "name": "approveMax",
            "type": "bool"
         },
         {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
         },
         {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
         },
         {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
         }
      ],
      "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "amountETH",
            "type": "uint256"
         }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "tokenA",
            "type": "address"
         },
         {
            "internalType": "address",
            "name": "tokenB",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountAMin",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountBMin",
            "type": "uint256"
         },
         {
            "internalType": "address",
            "name": "to",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
         },
         {
            "internalType": "bool",
            "name": "approveMax",
            "type": "bool"
         },
         {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
         },
         {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
         },
         {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
         }
      ],
      "name": "removeLiquidityWithPermit",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "amountA",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountB",
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
            "name": "amountOut",
            "type": "uint256"
         },
         {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
         },
         {
            "internalType": "address",
            "name": "to",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
         }
      ],
      "name": "swapETHForExactTokens",
      "outputs": [
         {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
         }
      ],
      "stateMutability": "payable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
         },
         {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
         },
         {
            "internalType": "address",
            "name": "to",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
         }
      ],
      "name": "swapExactETHForTokens",
      "outputs": [
         {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
         }
      ],
      "stateMutability": "payable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
         },
         {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
         },
         {
            "internalType": "address",
            "name": "to",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
         }
      ],
      "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
      "outputs": [

      ],
      "stateMutability": "payable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
         },
         {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
         },
         {
            "internalType": "address",
            "name": "to",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
         }
      ],
      "name": "swapExactTokensForETH",
      "outputs": [
         {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
         }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
         },
         {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
         },
         {
            "internalType": "address",
            "name": "to",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
         }
      ],
      "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
         },
         {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
         },
         {
            "internalType": "address",
            "name": "to",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
         }
      ],
      "name": "swapExactTokensForTokens",
      "outputs": [
         {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
         }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
         },
         {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
         },
         {
            "internalType": "address",
            "name": "to",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
         }
      ],
      "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountInMax",
            "type": "uint256"
         },
         {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
         },
         {
            "internalType": "address",
            "name": "to",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
         }
      ],
      "name": "swapTokensForExactETH",
      "outputs": [
         {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
         }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "amountInMax",
            "type": "uint256"
         },
         {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
         },
         {
            "internalType": "address",
            "name": "to",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
         }
      ],
      "name": "swapTokensForExactTokens",
      "outputs": [
         {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
         }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "stateMutability": "payable",
      "type": "receive"
   }
]

var tau_token_abi = [
   {
      "inputs": [
         {
            "internalType": "string",
            "name": "name",
            "type": "string"
         },
         {
            "internalType": "string",
            "name": "symbol",
            "type": "string"
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
            "internalType": "address",
            "name": "owner",
            "type": "address"
         },
         {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
         },
         {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
         }
      ],
      "name": "Approval",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
         {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
         }
      ],
      "name": "Paused",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
         {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
         },
         {
            "indexed": true,
            "internalType": "bytes32",
            "name": "previousAdminRole",
            "type": "bytes32"
         },
         {
            "indexed": true,
            "internalType": "bytes32",
            "name": "newAdminRole",
            "type": "bytes32"
         }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
         {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
         },
         {
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
         },
         {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
         }
      ],
      "name": "RoleGranted",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
         {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
         },
         {
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
         },
         {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
         }
      ],
      "name": "RoleRevoked",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
         {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
         },
         {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
         },
         {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
         }
      ],
      "name": "Transfer",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
         {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
         }
      ],
      "name": "Unpaused",
      "type": "event"
   },
   {
      "inputs": [

      ],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
         {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [

      ],
      "name": "MINTER_ROLE",
      "outputs": [
         {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [

      ],
      "name": "PAUSER_ROLE",
      "outputs": [
         {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "owner",
            "type": "address"
         },
         {
            "internalType": "address",
            "name": "spender",
            "type": "address"
         }
      ],
      "name": "allowance",
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
            "name": "spender",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
         }
      ],
      "name": "approve",
      "outputs": [
         {
            "internalType": "bool",
            "name": "",
            "type": "bool"
         }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "account",
            "type": "address"
         }
      ],
      "name": "balanceOf",
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
            "name": "amount",
            "type": "uint256"
         }
      ],
      "name": "burn",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "account",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
         }
      ],
      "name": "burnFrom",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [

      ],
      "name": "decimals",
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
      "inputs": [
         {
            "internalType": "address",
            "name": "spender",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "subtractedValue",
            "type": "uint256"
         }
      ],
      "name": "decreaseAllowance",
      "outputs": [
         {
            "internalType": "bool",
            "name": "",
            "type": "bool"
         }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
         }
      ],
      "name": "getRoleAdmin",
      "outputs": [
         {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
         },
         {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
         }
      ],
      "name": "getRoleMember",
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
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
         }
      ],
      "name": "getRoleMemberCount",
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
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
         },
         {
            "internalType": "address",
            "name": "account",
            "type": "address"
         }
      ],
      "name": "grantRole",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
         },
         {
            "internalType": "address",
            "name": "account",
            "type": "address"
         }
      ],
      "name": "hasRole",
      "outputs": [
         {
            "internalType": "bool",
            "name": "",
            "type": "bool"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "spender",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "addedValue",
            "type": "uint256"
         }
      ],
      "name": "increaseAllowance",
      "outputs": [
         {
            "internalType": "bool",
            "name": "",
            "type": "bool"
         }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "to",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
         }
      ],
      "name": "mint",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [

      ],
      "name": "name",
      "outputs": [
         {
            "internalType": "string",
            "name": "",
            "type": "string"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [

      ],
      "name": "pause",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [

      ],
      "name": "paused",
      "outputs": [
         {
            "internalType": "bool",
            "name": "",
            "type": "bool"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
         },
         {
            "internalType": "address",
            "name": "account",
            "type": "address"
         }
      ],
      "name": "renounceRole",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
         },
         {
            "internalType": "address",
            "name": "account",
            "type": "address"
         }
      ],
      "name": "revokeRole",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
         }
      ],
      "name": "supportsInterface",
      "outputs": [
         {
            "internalType": "bool",
            "name": "",
            "type": "bool"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [

      ],
      "name": "symbol",
      "outputs": [
         {
            "internalType": "string",
            "name": "",
            "type": "string"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [

      ],
      "name": "totalSupply",
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
            "name": "recipient",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
         }
      ],
      "name": "transfer",
      "outputs": [
         {
            "internalType": "bool",
            "name": "",
            "type": "bool"
         }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "sender",
            "type": "address"
         },
         {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
         }
      ],
      "name": "transferFrom",
      "outputs": [
         {
            "internalType": "bool",
            "name": "",
            "type": "bool"
         }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [

      ],
      "name": "unpause",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
   }
];

var lamden_link = "0x46e126489b7965ecc13e58f72f6d14b140614c18";
var lamden_link_abi = [
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "_controlledToken",
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
            "indexed": false,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
         },
         {
            "indexed": false,
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
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
         },
         {
            "indexed": false,
            "internalType": "string",
            "name": "receiver",
            "type": "string"
         }
      ],
      "name": "TokensBurned",
      "type": "event"
   },
   {
      "inputs": [

      ],
      "name": "_owner",
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
            "name": "amount",
            "type": "uint256"
         },
         {
            "internalType": "string",
            "name": "receiver",
            "type": "string"
         }
      ],
      "name": "deposit",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "token",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
         },
         {
            "internalType": "address",
            "name": "sender",
            "type": "address"
         },
         {
            "internalType": "address",
            "name": "bridge",
            "type": "address"
         }
      ],
      "name": "encode",
      "outputs": [
         {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
         }
      ],
      "stateMutability": "pure",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "bytes",
            "name": "x",
            "type": "bytes"
         }
      ],
      "name": "hash",
      "outputs": [
         {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
         }
      ],
      "stateMutability": "pure",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "bytes32",
            "name": "_messageHash",
            "type": "bytes32"
         }
      ],
      "name": "hashEthMsg",
      "outputs": [
         {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
         }
      ],
      "stateMutability": "pure",
      "type": "function"
   },
   {
      "inputs": [

      ],
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
      "inputs": [

      ],
      "name": "renounceOwnership",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
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
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "token",
            "type": "address"
         },
         {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
         },
         {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
         },
         {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
         },
         {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
         },
         {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
         },
         {
            "internalType": "address",
            "name": "bridge",
            "type": "address"
         }
      ],
      "name": "withdraw",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
   }
];

window.addEventListener('load', function (event) {
   use_metamask = false;
   window.web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed4.binance.org/"));
   generateDisposableWallet();
   initializeWidget();
});

//Click Events
document.addEventListener('click', function (event) {

   // If the clicked element doesn't have the right selector, bail
   if (event.target.matches('#use-metamask-wallet')) {
      use_metamask = true;
      window.web3 = new Web3(web3.currentProvider);
      window.web3.eth.requestAccounts().then((value) => {
         address = value[0];
         initializeWidget();
      });
   }
   else if (event.target.matches('#use-disposable-wallet')) {
      use_metamask = false;
      window.web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed1.binance.org:443"));
      generateDisposableWallet();
      initializeWidget();
   }
   else {
      return;
   }
   // Don't follow the link
   event.preventDefault();


}, false);

function generateDisposableWallet() {
   non_metamask_account = window.web3.eth.accounts.create();
   address = non_metamask_account["address"];
}

function listenForBalanceChange() {
   setTimeout(function () {
      fetch('https://api.bscscan.com/api?module=account&action=balance&address=' + address + '&apikey=' + bscscan_api_key + '')
         .then(function (response) {
            return response.json();
         }).then(function (balanceJson) {
            if (initialBalanceBeforeBuy != balanceJson["result"]) {
               newBalance = balanceJson["result"];
               balanceChange = newBalance - initialBalanceBeforeBuy;
            }
         })
      if (balanceChange == 0) {
         listenForBalanceChange();
      }
      else {
         document.getElementById("step-2-bar").style = "display:none";
         document.getElementById("step-2").style = "display:none";
         document.getElementById("step-3-bar").style = "display:flex";
         document.getElementById("step-3").style = "display:flex";
         exchangeBNBtoTAU();
      }
   }, 3000);
};

function setupBalanceListener() {

   fetch('https://api.bscscan.com/api?module=account&action=balance&address=' + address + '&apikey=' + bscscan_api_key + '')
      .then(function (response) {
         return response.json();
      })
      .then(function (balanceJson) {
         initialBalanceBeforeBuy = balanceJson["result"];
         listenForBalanceChange()
      });
}

function exchangeBNBtoTAU() {
   //balanceChange holds what we need to exchange now - some fees that are needed for the exchange and bridge later
   let gas_for_exchange = 290000 * 5000000000;
   let gas_for_bridge = 580000 * 5000000000; //gas for approve and bridge
   balanceChange = balanceChange - gas_for_bridge - gas_for_exchange;
   if (use_metamask == false) {
      let WBNBAddress = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
      let TAUAddress = "0x70d7109d3afe13ee8f9015566272838519578c6b";
      let contract = new window.web3.eth.Contract(pancakeswap_abi, pancakeswap_router, { from: address });
      let data = contract.methods.swapExactETHForTokens(
         window.web3.utils.toHex(balanceChange),
         [WBNBAddress,
            TAUAddress],
         address,
         window.web3.utils.toHex(Math.round(Date.now() / 1000) + 60 * 20),
      );

      
      let rawTransaction = {
         "from": address,
         "gasPrice": window.web3.utils.toHex(5000000000),
         "gasLimit": window.web3.utils.toHex(290000),
         "to": pancakeswap_router,
         "value": window.web3.utils.toHex(balanceChange),
         "data": data.encodeABI(),
         "nonce": window.web3.utils.toHex(0)
      };

      non_metamask_account.signTransaction(rawTransaction).then((signedTx) => {
         console.log(signedTx);
         window.web3.eth.sendSignedTransaction(signedTx.rawTransaction)
            .on('transactionHash', function (hash) {
               //bridgeTAUtoLamden();
               console.log(hash);
            })
            .on('confirmation', function (confirmationNumber, receipt) {
               //bridgeTAUtoLamden()
               if (confirmationNumber == 5) {
                  bridgeTAUtoLamden();
               }
               console.log(confirmationNumber);
               console.log(receipt);
            })
            .on('receipt', function (receipt) {
               console.log(receipt);
            })
            .on('error', function (error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
               console.log(error);
               console.log(receipt);
            });
      });
   }

}

function bridgeTAUtoLamden() {
   document.getElementById("step-3-bar").style = "display:none";
   document.getElementById("step-3").style = "display:none";
   document.getElementById("step-4-bar").style = "display:flex";
   document.getElementById("step-4").style = "display:flex";
   if (use_metamask == false) {
      let TAUAddress = "0x70d7109d3afe13ee8f9015566272838519578c6b";
      let amount = 0;

      fetch('https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=' + TAUAddress + '&address=' + address + '&tag=latest' + '&apikey=' + bscscan_api_key + '')
         .then(function (response) {
            return response.json();
         }).then(function (balanceJson) {
            if (initialBalanceBeforeBuy != balanceJson["result"]) {
               amount = balanceJson["result"];
               document.getElementById("final_tau").innerHTML = parseFloat(Web3.utils.fromWei(balanceJson["result"], 'ether')).toFixed(8);
               let contract = new window.web3.eth.Contract(tau_token_abi, TAUAddress, { from: address });
               let data = contract.methods.approve(
                  window.web3.utils.toHex(lamden_link),
                  window.web3.utils.toHex(amount),
               );
               let rawTransaction = {
                  "from": address,
                  "gasPrice": window.web3.utils.toHex(5000000000),
                  "gasLimit": window.web3.utils.toHex(290000),
                  "to": TAUAddress,
                  "value": window.web3.utils.toHex(0),
                  "data": data.encodeABI(),
                  "nonce": window.web3.utils.toHex(1)
               };

               non_metamask_account.signTransaction(rawTransaction).then((signedTx) => {
                  window.web3.eth.sendSignedTransaction(signedTx.rawTransaction)
                     .on('transactionHash', function (hash) {

                     })
                     .on('confirmation', function (confirmationNumber, receipt) {
                        if (confirmationNumber == 5) {

                           let contract = new window.web3.eth.Contract(lamden_link_abi, lamden_link, { from: address });
                           let data = contract.methods.deposit(
                              window.web3.utils.toHex(amount),
                              lamden_receiver,
                           );

                           let count = window.web3.eth.getTransactionCount(address);
                           let rawTransaction = {
                              "from": address,
                              "gasPrice": window.web3.utils.toHex(5000000000),
                              "gasLimit": window.web3.utils.toHex(290000),
                              "to": lamden_link,
                              "value": window.web3.utils.toHex(0),
                              "data": data.encodeABI(),
                              "nonce": window.web3.utils.toHex(2)
                           };

                           non_metamask_account.signTransaction(rawTransaction).then((signedTx) => {
                              window.web3.eth.sendSignedTransaction(signedTx.rawTransaction)
                                 .on('transactionHash', function (hash) {

                                 })
                                 .on('confirmation', function (confirmationNumber, receipt) {
                                    if (confirmationNumber == 5) {

                                       finished();
                                    }
                                    console.log(confirmationNumber);
                                    console.log(receipt);
                                 })
                                 .on('receipt', function (receipt) {
                                    console.log(receipt);
                                 })
                                 .on('error', function (error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                                    console.log(error);
                                    console.log(receipt);
                                 });
                           });
                        }
                        console.log(confirmationNumber);
                        console.log(receipt);
                     })
                     .on('receipt', function (receipt) {
                        console.log(receipt);
                     })
                     .on('error', function (error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                        console.log(error);
                        console.log(receipt);
                     });
               });

            }
         })
   }
}

function finished() {
   document.getElementById("step-4-bar").style = "display:none";
   document.getElementById("step-4").style = "display:none";
   document.getElementById("step-5-bar").style = "display:flex";
   document.getElementById("step-5").style = "display:flex";
}

function initializeWidget() {
   let iframe_url;
   if (staging == true) {
      iframe_url = "https://staging-global.transak.com/?apiKey=" + transak_public_api_key + "&redirectURL=https://transak.com&cryptoCurrencyCode=BNB&network=bsc&walletAddress=" + address + "&disableWalletAddressForm=true&exchangeScreenTitle=Buying%20BNB%20to%20get%20Lamden%20TAU&isFeeCalculationHidden=true&isDisableCrypto=True";
   }
   else {
      iframe_url = "https://global.transak.com/?apiKey=" + transak_public_api_key + "&redirectURL=https://transak.com&cryptoCurrencyCode=BNB&network=bsc&walletAddress=" + address + "&disableWalletAddressForm=true&exchangeScreenTitle=Buying%20BNB%20to%20get%20Lamden%20TAU&isFeeCalculationHidden=true&isDisableCrypto=True";
   }
   let ifrm = document.createElement("iframe");
   ifrm.setAttribute("src", iframe_url);
   ifrm.setAttribute("height", 625);
   ifrm.setAttribute("style", "display: block; width: 100%; max-height: 625px; max-width: 500px;border:0");
   document.getElementById("step-2").appendChild(ifrm);
   document.getElementById("step-1-bar").style = "display:none";
   document.getElementById("step-1").style = "display:none";
   document.getElementById("lamden_address").innerHTML = lamden_receiver;
   document.getElementById("bsc_address").innerHTML = address;
   document.getElementById("bsc_private_key").innerHTML = non_metamask_account.privateKey;
   document.getElementById("step-2-bar").style = "display:flex";
   document.getElementById("step-2").style = "display:flex";
   setupBalanceListener();
}