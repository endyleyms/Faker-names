const {faker} = require("@faker-js/faker");
for (let i=1; i<=1000; i++){
 let names = faker.name.findName();
 console.log(i, names); 
 }