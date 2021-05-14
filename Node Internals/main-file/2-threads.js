
// thread pool is only used by some of c++ functions 
//? some c++ contains all the fs module fns and crypto like module 
// thread pool's default value is 4, we have 4 threads in a thread pool 
// so these thread pool functions will work by multi-tasking  

const crypto = require("crypto");
// crypto is a c++ module and it works on thread pool
const start = Date.now()

crypto.pbkdf2('a', 'b' , 100000 , 512 , 'sha512' , () => {
  console.log('1: ' , Date.now() - start)
})

crypto.pbkdf2('a', 'b' , 100000 , 512 , 'sha512' , () => {
  console.log('2: ' , Date.now() - start)
})

crypto.pbkdf2('a', 'b' , 100000 , 512 , 'sha512' , () => {
  console.log('3: ' , Date.now() - start)
})

crypto.pbkdf2('a', 'b' , 100000 , 512 , 'sha512' , () => {
  console.log('4: ' , Date.now() - start)
})

crypto.pbkdf2('a', 'b' , 100000 , 512 , 'sha512' , () => {
  console.log('5: ' , Date.now() - start)
})

//? when we compile this file, 1st 4 functions will execute and show 1st and then the 5th one will show up
//? because we have 4 threads in a thread pool by default 

