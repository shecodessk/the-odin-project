//Write a function called add7 that takes one number and returns that number + 7.

function add7(number){
  return number + 7
}
console.log(add7(5))

// Write a function called multiply that takes 2 numbers and returns their product.

function multiply(x, y){
  return x * y
}
console.log(multiply(5, 9))

/* Write a function called capitalize that takes a string 
and returns that string with only the first letter capitalized. 
Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.*/

function capitalize(string){
  let str = string.toLowerCase()
  console.log(str.charAt(0).toUpperCase() + str.slice(1))

}
capitalize('kitties')

/* Write a function called lastLetter that takes a string and 
returns the very last letter of that string */

function lastLetter(string){
  return string.slice(-1) 
}
console.log(lastLetter('Bunny'))