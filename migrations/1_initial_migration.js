const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer, network, accounts) {
  await deployer.deploy(Migrations, {from: accounts[0]});
  await deployer.deploy(DaiTokenMock);

  const tokenMock = await DaiTokenMock.deployed()

  await tokenMock.mint(
    '0x0f95dE8451ef85db11204c296b687977B0F93D4E',
    '1000000000000000000000'
  )
};