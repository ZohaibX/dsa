// we have n npm package named pm2 
// it will automatically start multiple instances according to our machine's cores
// and will restart the instances when someone crashes 

// Im a child, im gonna behave like a server and do nothing 
const express = require("express");
const app = express() ;

function doWork (duration){
  const start = Date.now();
  while(Date.now() - start < duration) {}
}// this function will work after 5 seconds 

app.get("/" , (req , res) => {
  doWork(5000); // 5s //? we will have a 5s pause 
  res.send("HI THERE");
})

app.get("/fast" , (req , res) => {
  res.send("This is fast!")
})


app.listen(3000)



//  npm i -g pm2
//  pm2 start index.js -i 0
// pm2 list 
// pm2 show <file-name_to_show>