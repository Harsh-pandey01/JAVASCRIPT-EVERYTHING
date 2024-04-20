// used to store the collection of a item .

const fruits = ['Apple','banana','Grapes','PineApple']

console.log(fruits);

// checking is it a array or not
console.log(Array.isArray(fruits))

// type of array is object

// ------------------------------Some basic arrays ke methods
// 1.push and pop :-used to add and remove the element from the back on the same array me 

fruits.push("chiku")
console.log(fruits);

console.log(fruits.pop());
console.log(fruits);

// shift and ushift is used to add and remove from the front of the array
fruits.unshift('peru')
console.log(fruits);

fruits.shift()
console.log(fruits);

// ------------------------------------------------- Cloning an array 
// method one , in this referce of that variable is assigned so the value changes is reflected in both
const fruit = fruits
fruit.push('licci')
console.log(fruit);
console.log(fruits);


// Method 2 :- using the concat optiom
const arr2 = [].concat(fruits)
console.log(arr2);
console.log(arr2 === fruits)

// Most used and advanced method that is using spead operator
const arr3 = [...fruits]





//  ----------------------------------------------- Looping in an array
// 1:-Simple using the for loop
// 2 :- using the while loop

// 3:- Using the for of loop
for(const fal of fruits){
    console.log(fal);
}

for(let index in fruits){
    console.log(fruits[index])
}


//  -------------------------------------------------- Arrays Destructuring
// Suppose we want to assign each value or some values of a array to a variable or we want it in a variable then we use destructing
// we can use the gap to skip a index 
const values = [1,2,3,4,5,6,7,8,9,10];
const [val1,val2] = values ;
console.log(val1,val2);

// suppose we want to create another array out of the remaining of the 0 , 1  ibndex 
let [value1,value2, ...rem] = values;
console.log(value1,value2,rem);