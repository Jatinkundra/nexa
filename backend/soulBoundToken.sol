// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SoulBoundToken {
    // State variables
    string private _name;
    string private _symbol;
    uint256 private _count;

    struct TokenData {
        address issuedTo;
        string uri;
    }

    mapping(uint256 => TokenData) private _tokens;
    mapping(uint256 => address) private _owners;

    // Events
    event Attest(address indexed to, uint256 indexed tokenId);
    event Revoke(address indexed to, uint256 indexed tokenId);

    // Constructor
    constructor() {
        _name = "SoulBoundToken";
        _symbol = "SBT";
        _count = 0;
    }

    // Function to issue a new token
    function issue(address issuee, string memory uri) public {
        _count++;
        uint256 newTokenId = _count;

        _tokens[newTokenId] = TokenData({
            issuedTo: issuee,
            uri: uri
        });

        _owners[newTokenId] = issuee;

        emit Attest(issuee, newTokenId);
    }

    // Function to revoke a token
    function revoke(uint256 tokenId) public {
        require(_exists(tokenId), "Token does not exist");
        require(msg.sender == _owners[tokenId], "Only owner can revoke");

        address owner = _owners[tokenId];

        delete _owners[tokenId];
        delete _tokens[tokenId];

        emit Revoke(owner, tokenId);
    }

    // View function to get total count of tokens
    function count() public view returns (uint256) {
        return _count;
    }

    // View function to get token name
    function name() public view returns (string memory) {
        return _name;
    }

    // View function to get token symbol
    function symbol() public view returns (string memory) {
        return _symbol;
    }

    // View function to get token owner
    function ownerOf(uint256 tokenId) public view returns (address) {
        require(_exists(tokenId), "Token does not exist");
        return _owners[tokenId];
    }

    // View function to get token URI
    function tokenURI(uint256 tokenId) public view returns (string memory) {
        require(_exists(tokenId), "Token does not exist");
        return _tokens[tokenId].uri;
    }

    // Function to check if token exists
    function _exists(uint256 tokenId) private view returns (bool) {
        return _owners[tokenId] != address(0);
    }

    // Function to check contract supports specific interface
    function supportsInterface(bytes4 interfaceId) public pure virtual returns (bool) {
        return interfaceId == 0x01ffc9a7; // ERC165 interface ID for supportsInterface function
    }
}
