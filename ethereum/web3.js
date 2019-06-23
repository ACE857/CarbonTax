import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined' ){
  // in browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);

} else {
  // not in browser or not running metamask
  const provider = new Web3.providers.HttpProvider(
    'rinkeby.infura.io/v3/ae8c59e1d27141f0a8979e6731823515'
  );
  web3 = new Web3(provider);
}

export default web3;

// this file is used to refrence the contract on blockchain
// an call methods on it
