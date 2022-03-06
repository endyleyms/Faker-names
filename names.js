const {faker} = require("@faker-js/faker");
const fs = require('fs')
let names = ""
for (let i=1; i<=1000; i++){
  names += `${faker.name.findName()}\n`;
}
fs.appendFile('names.txt', names, err => {
  if (err) {
    console.error(err)
    return
  }
  //done!
  console.log ( "El proceso ha terminado satisfactoriamente")
})
