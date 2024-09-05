const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/PolyMod1.sol/PolyMod1.json");

const tokenAddress = "0xCd165331E56dbDacCa6C310e96877416e49DcA86"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xE341c0D58206251F7318cf101AbdF9B69F8Ec6f4";

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const balance = await token.balanceOf(walletAddress);
    console.log(`Current Balance: ${balance} NFTs in your wallet`);
  }
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });