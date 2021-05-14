
//! THIS IS MOST INSANE INTERVIEW QUESTION

//! Question is that we run OSTask and ThreadPool task together, what type of output it will be 
//? doRequest fn is a OS task, will run automatically by the OS in event loop.
//? fs task is a multi-threaded fn -- it first retrieve stats for the file it has to read, then it has to retrieve the date by reading 
//? crypto fns are also multi-threaded

const https = require("https") ;
const crypto = require("crypto");
const fs = require("fs") ;

const start = Date.now()

function doRequest (){
  https.request('https://www.google.com' , res => {
    res.on('data' , () => {});
    res.on('end' , () => {
      console.log('Request: ' , Date.now() - start);
    })
  }).end()
}

function doCrypto (i){
crypto.pbkdf2('a', 'b' , 100000 , 512 , 'sha512' , () => {
  console.log(`${i}:` , Date.now() - start)
})
}

doRequest();

fs.readFile('4-multitask.js' , 'utf8' , () => {
  console.log('FS: ', Date.now() - start);
}) //? be careful and write exact name to read the file, otherwise it will not give an error

doCrypto(1) // crypto-1
doCrypto(2) // crypto-2 
doCrypto(3) // crypto-3
doCrypto(4) // crypto-4
doCrypto(5) // crypto-5


//! LOGIC IS 
// doRequest fn will work fine as line-wise execution by single threaded node event loop
// then we have 1 FS fn and 5 crypto fns as multi-threaded
// we have total of 4 threads by default in thread pool - 
//          allocation - thread(1)-FS , thread(2)-crypto-1 , thread(3)-crypto-2 , thread(4)-crypto-3 , assigned
// FS fn from thread(FS) will take time as first it retrieves stats of the file to read from hard drive and then it will retrieve the data
// once thread(FS) send request to get stats of the file from hard drive, then that thread has to wait to get that data back 
// in that free time, that thread(FS) will be allocated to crypto-4 -- thread(crypto-4)
// so as thread(crypto-1) gets free, it gets ready to pick up some other task
// only if -- hard drive is ready to send that file stats back, the free thread(crypto-1) will be allocated to FS 
//                     and hard drive will send the stats data to the one thread which is allocated to FS 
// OR if hard drive isn't ready yet to send stats data back, that free thread(crypto-1) will be allocated to crypto-5 
// and so on

//? Its all logic is in video 20 from node internals 
