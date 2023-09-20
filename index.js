function receivesAFunction(callback){
    return callback();
    
}
//function returnsANamedFunction(){
    



  function returnsANamedFunction() {
    return function namedFunction() {
      console.log('This is a named function');
    };
  }

  function returnsAnAnonymousFunction(){
    return function() {
        console.log('This is anonymous function');
    };
        
  }