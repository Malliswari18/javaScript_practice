
//   function greet(name){
//     console.log(name);
//     function ask(){
//         console.log('hey how are you '+name);
//     }
//     ask();

//   }
//   greet('tom');

/*fibonacci */


// function fib(n){
//     if(n==0){
//         return 0;
//     }
//     else if(n==1){
//         return 1;
//     }
//     else{
//         return fib(n-1)+fib(n-2);
//     }
// }
//     for(let i=2;i<8;i++){
//         console.log(i);
//     }

/* factorial */
function fact(n){
    if(n==0||n==1){
        return 1;
    }
    else {
        return n*fact(n-1);
    }
}

console.log(fact(5));

