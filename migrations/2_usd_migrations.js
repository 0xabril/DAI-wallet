const Migrations = artifacts.require("Migrations");
const USDTokenMock = artifacts.require("USDTokenMock");

module.exports = async function(deployer, network, accounts) {
  await deployer.deploy(Migrations, {from: accounts[0]});
  await deployer.deploy(USDTokenMock);

  const tokenMock = await USDTokenMock.deployed()

  await tokenMock.mint(
    '0xef9f338eC0794cF111dfe5B33304a53aB280cc41',
    '2000000000000000000000'
  )
};