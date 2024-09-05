const { ethers } = require("hardhat");

async function main() {
    const token = await hre.ethers.deployContract("PolyMod1");

    console.log("Token address:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
