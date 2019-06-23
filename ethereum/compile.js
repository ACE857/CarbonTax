const path = require('path');
const solc = require('solc');
const fs = require('fs-extra'); //  imporoved version os fs library

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath); // deletes everything indide the folder

const campainPath = path.resolve(__dirname, 'contracts','contractIncentive.sol');
const source = fs.readFileSync(campainPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

for(let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract + '.json'),
    output[contract]
  );
}
