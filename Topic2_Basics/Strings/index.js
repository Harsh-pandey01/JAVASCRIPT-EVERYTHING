// string is stream of characters represented using " "

let name = "harsh"

// Indexing :- Stored and accessed using indexes
//  h a r s h
//  0 1 2 3 4

// templete literals
let tempName = `The name is given by ${name}`
console.log(tempName)

// lenght of string - > spaces bhi count hota hai length mr 
console.log(name.length);


//  -------------------------------- String methods
let address = " varanasi "

// 1 . Trim Method :- Used to remove the spaces between the words in the string and return a new Strinf
console.log(address)
address = address.trim()
console.log(address)


// 2 . toUpperCase or toLowerCase :- return a new String with all characters to capital or small
console.log(address.toUpperCase());

// 3. CharAt() :- It return the character present at a given index
console.log(address.charAt(3))

//  ------------- Extracting some part of the string

// 4. Slice() :- need start and end index but do not incluse the last index , if no last index is given then default till last is taken
// and the position can be negative also 
let newAdd = address.slice(0,3)
console.log(newAdd)
 
// 5. subString() :- similar to slice but The difference is that start and end values less than 0 are treated as 0 in substring()

console.log(address.substring(0,4))

// 6. subStr(start,length) :- instead of the last index we use size


// -------------Concatination
// 1. simple using the add
// 2. using the concat() :- method which return the joined value of the both


// 7. replace and replaceAll :- donot changes the original string
let updAdd = address.replace('var','car')
console.log(updAdd)
console.log(address)

//  ----------------------------------------------------------------------Split :- which each character of the string in an array with defined criteria

console.log(address.split(""));