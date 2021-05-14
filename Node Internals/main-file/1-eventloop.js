//! EVENT LOOP 
    //! Event loop is single threaded....................... so its not multi-task , will execute line wise  
    // event loop is a loop of executing a program and 
    // its duty is to run at least once more to see if something is pending and have to be completed or no 
    // pending stated can be pendingTimers , pendingOSTasks , pendingOperations
    //? It's detailed picture is available in current dir 
          
const pendingTimers = []
// if we have used the timer. then, execution will pause until timer is completed

const pendingOSTasks = []
// it is not related to threads.... its Operating system task
// all the networking related tasks are reflected to this array. all http calls and networking 
// so execution will pause until pendingOSTask is done 
// we have file named async for it 

const pendingOperations = []
// it is related to thread pool, because some of the function from cpp uses more than 1 thread 
// all the multi-threaded tasks will be reflected into this array
// we have file named thread for it  


// timers , tasks and operations are recorded here
function shouldContinue() {
  //! Three Checks in body execution
  // CheckOne : Any pending setTimeout , setInterval and setImmediate ?
  // CheckTwo : Any pending OS tasks ? (like server listening to some port) . 
  // CheckThree : Any pending long running operations ? (Like fs module)
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}

// execution is like while loop, each execution means 1 tick and that is like this descried below. Entire body executes in one tick 
while(shouldContinue()) {
  //! Execution
  // 1) Node looks for pendingTimers and sees if any functions are ready to be called. setTimeout and setInterval
  // 2) Node looks at pendingOSTasks and then pendingOperations and its relevant callbacks 
  // 3) pause program execution when some tasks needs time to complete, and as task is completed, it continues
  //    ie when some task is pending, execution stops and continue when pending task is done 
  //    - when a pending OS operation is done 
  //    - or when some timer is about to complete
  // 4) It looks at pending timers
  // 5) it handles any close events
}

// exit back to the terminal 