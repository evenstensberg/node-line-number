const readline = require('readline');
const fs = require('fs');

exports.readFile = function (input) {
  let arr = []
  let counter = 0;
  if(!input) {
    throw new Error('You need a filePath as input');
  }
  const rl = readline.createInterface({
    input: fs.createReadStream(input)
  });
  rl.on('line', line => {
    ++counter;
    arr.push({[counter]:line.length});
    console.log('\n', arr, '\n')
    rl.close()
  });
}
exports.readDir = function (dir) {
    let arr = [];
    let counter = 0;
    if(!dir) {
      throw new Error('You need to have a directory as argument');
    }
    fs.readdir(dir, (err, files) => {
      files.forEach(file => {
        const rl = readline.createInterface({
          input: fs.createReadStream(`${dir}/${file}`)
        });
        rl.on('line', line => {
          ++counter;
          arr.push({[counter]: line.length});
          console.log('\n',arr,'\n')
        });
      });
  });
  return arr;
};
