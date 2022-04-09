//takes callback function as argument
function receivesAFunction(callback){
  return callback();
}

//return named function
function returnsANamedFunction(){
  return function named(){
    return "I am a function"
  }
}

//return anonymous function
let returnsAnAnonymousFunction = function(){
  return function(helloWorld){
    console.log(helloWorld)
  }
}