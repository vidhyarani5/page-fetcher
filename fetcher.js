const request = require('request');
const fs = require('fs');
let args = process.argv.slice(2);
const inputURL = args[0];
const filePath = args[1];
request(inputURL, (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  fs.writeFile(filePath, body, error => {
    if (error) {
      console.error(error);
      return;
    }
  });
});