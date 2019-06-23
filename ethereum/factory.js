import web3 from './web3';
import CarbonTax from './build/CarbonTax.json';
const instance = new web3.eth.Contract(
  JSON.parse(CarbonTax.interface),
  '0x49ee027bf492d676a670b2b10045153b026228b4'
);
export default instance;

// this file gives out the contract interface
// and an object to the deployed contract
