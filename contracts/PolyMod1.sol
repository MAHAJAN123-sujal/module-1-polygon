// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PolyMod1 is ERC721A, Ownable {
    uint256 public tokenTracker;
    mapping(uint256 => string) private strNFTurl;
    mapping(uint256 => string) private strDESCP;

    constructor() ERC721A("Mahajan", "MHN") Ownable(msg.sender){
        tokenTracker = 0;
    }

    function batchMintNFT(string[] memory NFTurl, string[] memory descrp) public onlyOwner {
        require(NFTurl.length == descrp.length, "Number of Descriptions and NFTs are different");
        uint256 start = tokenTracker;
        uint256 numOfTokens = NFTurl.length;
        _safeMint(owner(), numOfTokens);

        for (uint256 i = 0; i < numOfTokens; i++) {
            strNFTurl[start + i] = NFTurl[i];
            strDESCP[start + i] = descrp[i];
        }
        tokenTracker += numOfTokens;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(tokenId < tokenTracker, "Only 5 NFTs valid");
        return strNFTurl[tokenId];
    }

    function promptDescription(uint256 tokenId) public view returns (string memory) {
        require(tokenId < tokenTracker, "only 5 NFTs description Present");
        return strDESCP[tokenId];
    }
}