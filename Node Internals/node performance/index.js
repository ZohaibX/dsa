//! LOGIC
  // if we have a route that takes 5 second to complete
  // and if we go to that route 2 times in the sane time, on other window 
  // that same route in 2nd window will take double time 
  // so jitne zyada cluster.fork(), utne zyada instances, utni zyada windows we can use 

const cluster = require("cluster");
console.log(cluster.isMaster);

// is the file being executed in Master mode ?
if(cluster.isMaster){

  // Cause index.js to be executed *again* but in child mode 
  cluster.fork() // this function will create a single instance of node and will turn isMaster to false , 
                //  so program will go to else mode by event loop - as event loop must run at least for once
  cluster.fork()
  // using cluster.fork() multiple times means running multiple server instances  
}else {

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
}