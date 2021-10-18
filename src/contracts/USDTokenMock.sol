pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";

contract USDTokenMock is ERC20Mintable {
  string  public name;
  string  public symbol;
  uint256 public decimals;

  constructor() public {
    name = "Tether USD";
    symbol = "USDT";
    decimals = 18;
  }
}