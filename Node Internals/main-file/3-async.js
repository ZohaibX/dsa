
// All the networking fns like https don't work with threads at all, but they are directly handled by Operating system itself
// networking tasks has nothing to do with threads 

const https = require("https") ;

const start = Date.now()

function doRequest (){
  https.request('https://www.google.com' , res => {
    res.on('data' , () => {});
    res.on('end' , () => {
      console.log(Date.now() - start);
    })
  }).end()
}

doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()


//? when we run this file,
//? every function will run line-wise by the event loop and event loop is single threaded
//? it has nothing to with multi-tasking 