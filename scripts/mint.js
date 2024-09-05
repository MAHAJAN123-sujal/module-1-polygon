const tokenContractJSON = require("../artifacts/contracts/PolyMod1.sol/PolyMod1.json");
require('dotenv').config();

const tokenAddress = "0xDFFb88122b11Ff0De94f5C18616Fa51B79385Db9"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xE341c0D58206251F7318cf101AbdF9B69F8Ec6f4";

async function main() {
  const nft = await ethers.getContractAt("PolyMod1", tokenAddress);
  const tokenURIs = [
    "https://gateway.pinata.cloud/ipfs/QmfCf8X83DAKuEbsLykUQdJAx5vTwtBcBtxCuCNFa4XkKn/img1.webp",
    "https://gateway.pinata.cloud/ipfs/QmfCf8X83DAKuEbsLykUQdJAx5vTwtBcBtxCuCNFa4XkKn/img2.webp",
    "https://gateway.pinata.cloud/ipfs/QmfCf8X83DAKuEbsLykUQdJAx5vTwtBcBtxCuCNFa4XkKn/img3.webp",
    "https://gateway.pinata.cloud/ipfs/QmfCf8X83DAKuEbsLykUQdJAx5vTwtBcBtxCuCNFa4XkKn/img4.webp",
    "https://gateway.pinata.cloud/ipfs/QmfCf8X83DAKuEbsLykUQdJAx5vTwtBcBtxCuCNFa4XkKn/img5.webp"
  ];

  const prompts = [
    "A robot playing chess",
    "A typical 1990's computer",
    "A Monkey in the space suit",
    "A cat riding a bike",
    "A cat in the space shuttle"
  ];

  await nft.batchMintNFT(tokenURIs, prompts);
  console.log(`Minted ${tokenURIs.length} NFTs to ${walletAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});