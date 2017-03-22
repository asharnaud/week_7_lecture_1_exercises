// Write a short program in which you create a grocery list containing 10 items using bracket notation (not array literals). Output the grocery list to the console as a whole. Output only the first and then the 5th elements in the array to the console.
var groceryList = ['Eggs', 'Milk', 'Bread', 'Bananas', 'Bacon', 'Coke', 'Salt', 'Butter', 'Apples', 'Steak']
console.log(groceryList)
console.log(groceryList[0])
console.log(groceryList[4])
// Write code that does the following:
// // Create an array of 10 arbitrary numbers using array literal syntax.
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Next, create a second empty array.
var empty = []
// Using a while loop, write code that removes data from the first array and places it into the second array.
// At the end of this process the first array should be empty and the second array should contain the same numbers, but in reverse order.
var i = number.length - 1
while (i > number.length - 1) {
  empty.push([i])
  i--
}

console.log(empty)

// You are given the following array of objects:
var people = [
  {
    firstName: 'Lucas',
    lastName: 'Xun'
  },
  {
    firstName: 'Michaela',
    lastName: 'Devlin'
  },
  {
    firstName: 'Mose',
    lastName: 'Bodrogi'
  },
  {
    firstName: 'Heidi',
    lastName: 'Funar'
  },
  {
    firstName: 'Bede',
    lastName: 'Abasolo'
  }
]

// Each object represents a person with a first and last name. Your job is to print a numbered list of the initials of each person. Use forEach() to iterate over the array.
people.forEach(function (people, index) {
  console.log((index + 1) + ') ' + people.firstName.charAt(0) + '. ' + people.lastName.charAt(0) + '.')
})
