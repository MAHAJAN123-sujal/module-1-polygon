# PolyMod1 NFT Collection Project

## Overview

This project involves deploying an NFT collection on the Ethereum Sepolia Testnet, mapping the collection to the Polygon Amoy Testnet, and transferring the NFTs over using the FxPortal bridge. The NFT collection consists of 5 unique items generated using DALLE 2 or Midjourney, stored on IPFS via Pinata, and minted in a batch process using the ERC721A standard for efficiency.

### Key Features

- **ERC721A NFT Collection**: An efficient ERC721 implementation optimized for batch minting.
- **AI-Generated Images**: Use DALLE 2 or Midjourney to generate unique NFT images.
- **Decentralized Storage**: NFT assets are stored on IPFS using Pinata.
- **Batch Minting and Bridging**: Efficient minting and transferring of NFTs from Ethereum to Polygon using the FxPortal bridge.
- **Prompt Retrieval**: Functionality to retrieve the prompt descriptions used to generate the NFTs.

## Project Structure

- **contracts/PolyMod1.sol**: Solidity smart contract for the NFT collection.
- **scripts/deploy.js**: Script to deploy the `PolyMod1` contract on Ethereum Sepolia.
- **scripts/mint.js**: Script to batch mint NFTs.
- **scripts/approve-deposit.js**: Script to approve and deposit NFTs using FxPortal bridge.
- **scripts/balanceOf.js**: Script to check the balance of NFTs on the Polygon network.

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js and npm](https://nodejs.org/)
- [Hardhat](https://hardhat.org/)
- A wallet configured with Sepolia and Amoy testnet tokens.
- An account on [Pinata](https://www.pinata.cloud/) for IPFS storage.
- Access to the FxPortal Bridge for bridging NFTs.

## Getting Started

### Step 1: Install Dependencies

Clone the repository and install the necessary dependencies:

```bash
git clone <repository-url>
cd PolyMod1-NFT-Project
npm install
```

### Step 2: Generate NFT Images and Upload to IPFS

1. Use DALLE 2 or Midjourney to generate 5 unique NFT images based on creative prompts.
2. Upload these images to IPFS using Pinata.cloud and obtain the IPFS URIs (e.g., `ipfs://<hash>`).

### Step 3: Deploy the Smart Contract

Deploy the `PolyMod1` contract to the Sepolia Ethereum Testnet using Hardhat.

Modify the **`deploy.js`** script with your network settings and deploy the contract:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

### Step 4: Mint NFTs

Batch mint the NFTs using the **`mint.js`** script. Ensure you replace the `tokenAddress` and `walletAddress` with your contract and wallet addresses. Configure the script with the IPFS URIs and their corresponding prompts.

Run the minting script:

```bash
npx hardhat run scripts/mint.js --network sepolia
```

### Step 5: Approve and Deposit NFTs for Bridging

Approve the NFTs for transfer and deposit them to the Polygon Amoy testnet using FxPortal. Update the **`approve-deposit.js`** script with the correct contract addresses and then run it:

```bash
npx hardhat run scripts/approve-deposit.js --network sepolia
```

### Step 6: Verify Balance on amoy 

After bridging, verify the NFT balance on the Polygon network using the **`balanceOf.js`** script. Ensure you replace the `tokenAddress` and `walletAddress` with the correct addresses. Run the script:

```bash
npx hardhat run scripts/balanceOf.js --network amoy
```
### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Authors

Sujal Mahajan

### Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## Conclusion

This project demonstrates the deployment, minting, and bridging of NFTs from Ethereum to Polygon using Hardhat, FxPortal, and modern NFT standards. Feel free to customize and extend the project further to fit additional requirements.


