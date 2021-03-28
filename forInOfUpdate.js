/*
for..in can also be used in arrays, at this time the array is 
treated as an object. Modify the code above, we can see:
function showObjectKeys(obj){
          for (var key in obj){
                    console.log(key);
          }
}

function showObjectValues(obj){
          for (var key in obj){
                    console.log(obj[key]);
          }
}

var arr=["one","two","three"];
console.log("keys of arr:")
showObjectKeys(arr);
console.log("values of arr:")
showObjectValues(arr);

Code results:
keys of arr:
0
1
2

values of arr:
one
two
three
We can see, keys is the index of the array elements. Need attention: 
When using for..in with an array, key(index) is always a string, not a 
number. In the example above, keys is "0", "1" and "2", we can't see 
the quotes because console.log() doesn't show it.

Although for..in can traverse the array, but we do not recommend the 
use of it. Because it has a flaw, in some cases, it may not be in 
accordance with the order of the array elements to traverse the array. 
So we recommend you use another variant:for..of(New member of ES6), 
it can traverse all the values of the array, if you don't care about its index.

***************************
Coding in function giveMeFive, function accept 1 parameter:obj, it's 
an object. You need to traverse the obj, if the length of the object 
key equals to 5, then push the key value to the array (you need to define 
the array by yourself, this time I won't help you). Additionally push the 
value to the array as well, if the length of the value is equal to 5.
Return the five after works finished.
*/
let obj = {
          ondo: "Akure",
          osun: "Osogbo",
          oyo: "Ibadan",
          ekiti: "Ado-Ekiti",
          ogun: "Abeokuta",
          lagos: "Ikeja",
          Pears: "than",
          apple: "sweet",
}

function giveMeFive(obj){
          let arr = [];

          for(key in obj) {

                    // if(key.length == 5){
                    //           arr.push(key)
                    // }
                    
                    // if(obj[key].length == 5){
                    //           arr.push(obj[key])
                    // }

                    key.length == 5 ? arr.push(key) : null
                    obj[key].length == 5 ?  arr.push(obj[key]) : null;
          }
          
          return arr;
}

console.log(giveMeFive(obj));


