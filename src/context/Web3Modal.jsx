'use client'
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

// 1. Get projectId
const projectId = '48d44678afcba02c797f5d30369c89a7'

// // 2. Set chains
// const mainnet = {
//   chainId: 1,
//   name: 'Ethereum',
//   currency: 'ETH',
//   explorerUrl: 'https://etherscan.io',
//   rpcUrl: `${process.env.NEXT_PUBLIC_RPC_URL_ETH}`
// }

const Binance = {
  chainId: 97,
  name: 'Binance',
  currency: 'BNB',
  explorerUrl: 'https://testnet.bscscan.com',
  rpcUrl: `${process.env.NEXT_PUBLIC_RPC_URL_BNB}`
}
console.log(process.env.NEXT_PUBLIC_RPC_URL_BNB,"process.env.NEXT_PUBLIC_RPC_URL_BNBprocess.env.NEXT_PUBLIC_RPC_URL_BNB");
// const BNBSmartChainTestnet = {
//   chainId: 97,
//   name: 'Binance',
//   currency: 'BNB',
//   explorerUrl: 'https://testnet.bscscan.com',
//   rpcUrl: `${process.env.NEXT_PUBLIC_RPC_URL_TBNB}`
// }


const seoiliaTestnet = {
  chainId: 11155111,
  name: 'Sepolia',
  currency: 'ETH',
  explorerUrl: 'https://sepolia.etherscan.io',
  rpcUrl: `${process.env.NEXT_PUBLIC_RPC_URL_SEPO}`
}

// // 

// 3. Create modal
const metadata = {
  name: 'Lnbg London Coin',
  description: 'This is Lnbg London Coin',
  url: 'https://Lnbg.com/', // origin must match your domain & subdomain
  icons: ['https://Lnbg.com']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,
  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  // rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 56, // used for the Coinbase SDK
})


createWeb3Modal({
  ethersConfig,
  chains: [Binance,seoiliaTestnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration,
  enableOnramp: true // Optional - false as default
})


export function Web3Modal({ children }) {
  return children
}