const address = "0x5fCAE6A4a062BFBB9BBAF8c14f3a9f833020D683";

const abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "number", "type": "uint256" }], "name": "RandomNumber", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "Liquidity", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "balanceOfContract", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_ref", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint8", "name": "number", "type": "uint8" }, { "internalType": "uint8", "name": "betType", "type": "uint8" }], "name": "bet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "bets", "outputs": [{ "internalType": "address", "name": "player", "type": "address" }, { "internalType": "uint8", "name": "betType", "type": "uint8" }, { "internalType": "uint8", "name": "number", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "cashOut", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "dev", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getStatus", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "miner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "ref_fee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "spinWheel", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "tokenAdress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "winnings", "outputs": [{ "internalType": "address", "name": "userAddr", "type": "address" }, { "internalType": "uint256", "name": "winingAmount", "type": "uint256" }], "stateMutability": "view", "type": "function" }];

// @ts-ignore
export default function getAbi(web3) {
  return new web3.eth.Contract(abi, address);
}
