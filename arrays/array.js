let fruits=['apple','banana','mango','pineapple','guava','grapes']
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[5]);//undefine
console.log(fruits);
console.log('after modification ')
/*modify elements*/
fruits[3]='kiwi';
console.log(fruits);

/*push*/
// array.push();
let vegies=['carrot','tomato','potato','onion']
vegies.push('ladysfinger','cauliflower');
console.log(vegies);
/**unshift */
vegies.unshift();
vegies.unshift('chilli','ginger')
console.log(vegies);

/**slice() */
fruits.splice(2,1)
console.log(fruits)

/**pop():last element removes */

vegies.pop()
console.log(vegies)
/**shift():removes the firsy elemnt from array */
vegies.shift()
console.log(vegies);

/**slice(): */
fruits.slice(1,4)
console.log(fruits);
/**concat()  */
let merge=fruits.concat(vegies);
console.log(merge)



