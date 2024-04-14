// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyToken {
    // ERC20 Token attributes
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;

    // Owner of the contract (for access control)
    address public owner;

    // Balances for each account
    mapping(address => uint256) public balanceOf;
    // Owner of account approves the transfer of an amount to another account
    mapping(address => mapping(address => uint256)) public allowance;

    // Events to notify the blockchain about transfers and approvals
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    // Modifier to restrict functions usage to the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    // Contract initialization
    constructor(string memory _name, string memory _symbol, uint8 _decimals, uint256 _totalSupply) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        totalSupply = _totalSupply;
        balanceOf[msg.sender] = _totalSupply;
        owner = msg.sender;
    }

    // Function to transfer tokens
    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "Insufficient balance");
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    // Function to approve the spending of tokens
    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    // Function to transfer tokens on behalf of the owner account
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_value <= balanceOf[_from], "Insufficient balance");
        require(_value <= allowance[_from][msg.sender], "Insufficient allowance");
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    // Function to increase the allowance given to a spender
    function increaseAllowance(address _spender, uint256 _addedValue) public returns (bool) {
        approve(_spender, allowance[msg.sender][_spender] + _addedValue);
        return true;
    }

    // Function to decrease the allowance given to a spender
    function decreaseAllowance(address _spender, uint256 _subtractedValue) public returns (bool) {
        uint256 currentAllowance = allowance[msg.sender][_spender];
        require(currentAllowance >= _subtractedValue, "Decreased allowance below zero");
        approve(_spender, currentAllowance - _subtractedValue);
        return true;
    }

    // Function to mint new tokens (only accessible by the owner)
    function mint(address _to, uint256 _amount) public onlyOwner {
        require(_to != address(0), "Mint to the zero address");
        totalSupply += _amount;
        balanceOf[_to] += _amount;
        emit Transfer(address(0), _to, _amount);
    }

    // Function to burn tokens (reducing the total supply)
    function burn(uint256 _amount) public {
        require(balanceOf[msg.sender] >= _amount, "Insufficient balance");
        balanceOf[msg.sender] -= _amount;
        totalSupply -= _amount;
        emit Transfer(msg.sender, address(0), _amount);
    }
}
