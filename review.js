/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring for you to us we didn't do in class yet. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
var x = 10;
console.log(x);

// 2.) Change the value of this variable
x=20;
console.log(x);

// 3.) Change the data type of this variable
x='string';
console.log(x);

// 4.) Create another variable and the one from above to concatenate
var y=70
console.log(y)
y=70+x
console.log(y)

// 5.) Use any of the variables above or create new ones and print using string interpolation

// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
console.log('Sabrina'.charAt(4))

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
//Unicode is the encoding of a character. So, every chracter is tied to a unique number which is it's unicode.
console.log('Teddy'.charCodeAt(2))

// Using fromCharCode() - make it readable for us :). You'll see!

console.log(String.fromCharCode(84,101,100,100,121))

// Take your first and last name and concat()
console.log('Larissa'.concat(' Portillo'))

// Create a string and make it return true using startsWith()
console.log('true'.startsWith('t'))

// Now use any variable with endsWith() and return false
console.log('false'.endsWith('f'));

// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, and wondered if there was any living being there.'
console.log(ozgur.includes('living'))

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
console.log(joshHadALittleLambOopsCow.indexOf('cow'))


// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.
const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."
console.log(vanessa.lastIndexOf('Vanessa'))

// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?"
console.log(noWeCantTeo.length)

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
console.log(replaceGokuWithVegeta.replace('Goku','Vegeta'))

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
console.log(joshIsLookingForWifey.search('wifey'))

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza"
console.log(pizzaSentence.slice(7))

// Now using the pizza sentence, return only pizza (before the comma)
console.log(pizzaSentence.slice(0,5))

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn"
console.log(splitTheBill.split(','))

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.
console.log(splitTheBill.split(''))

// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
console.log(angry.toLowerCase())
// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 
const yell="OH MY GOODNESS!, WHY!?, I'VE HAD IT!"
console.log(yell.toLowerCase())


// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun"
console.log(jahlunSaidToPutSomeRespectToHisName.toUpperCase())

// substring()
// on the chopping block...

// Returns "ell"
const basicGreeting = "Hello World"
console.log(basicGreeting.substring(1,5))

// Returns "JavaScript"
const ohReally = "JavaScript Substring"
console.log(ohReally.substring(0,10))

// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com"
console.log(aslDays.substring(15))

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
const love=' love handles '
console.log(love)
console.log(love.trim())

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

 console.log(a < b)
 console.log(c > b)
 console.log(d === d)
 console.log(d != a)
 console.log(a <= 15)
 console.log(a < b < c)
 console.log(c > b > a != d)

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
for(i=1;i<=10;i++){
  console.log(i+' the room is spinning')
}
// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
for(i=1;i<=20;i++){
  console.log(i+' spin')
}

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
let o=1
while(o<=20){
  console.log(o+" i'm sorry")
  o++;
}

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clotes',
  thing3: 'gaming console'
}
for(key in whateverQueenBeySaid){
  console.log(key)
}

// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']
for(index in lana){
  console.log(index)
}

// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
for(t of tia){
  console.log(t)
}

// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan']
console.log(perscholas.forEach(element=>{
  let v='PS'
  console.log(element+v)
}))


// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
// push() -> adds item to end of array
// pop() -> remove last element of array
// unshift() -> adds item to beginning of array and returns new length
// shift() -> removes item from beginning of array and returns the removed item
// concat() -> concatenates or joins 2 or more arrays into one array
// splice() -> permanently changes inside of array by replacing or adding item at a certain index
// slice() -> returns shallow copy of array at given indexes without modifying the original array
// sort() -> overwrites and sorts original array by aplhabetical order or low to high
// includes() -> case sensitive, returns true or false, if a certain value is in the array
// indexOf() -> return 1st index where element can be found in the array
// length -> returns length of the array

const fruits = ['apple', 'banana', 'orange']

// Print banana
console.log(fruits[1])

// Let's turn it up a notch. I won't tell you what array methods to use. 

// Join all the elements of the array into a string separated by a space.
console.log(fruits.join(' '))
// Remove orange
console.log(fruits.pop())
console.log(fruits)

// Add strawberry, kiwi, and grapes at the end
console.log(fruits.push("strawberry","kiwi","grapes"))
console.log(fruits)

// Remove apple
console.log(fruits.shift())
console.log(fruits)

// Add mango at the beginning of the array
console.log(fruits.unshift('mango'))
console.log(fruits)

// Add lemon, and grapefruit between mango and banana
console.log(fruits.splice(1,0,'lemon','grapefruit'))
console.log(fruits)

// Remove banana and strawberry
console.log(fruits.splice(3,2))
console.log(fruits)

// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
const exoticFruits=['lychees','jackfruit','starfruit']
const concatFruits=fruits.concat(exoticFruits)
console.log(concatFruits)

// Print the last two exotic fruits without altering the newly concatenated array.
console.log(concatFruits.slice(concatFruits.length-2))
console.log(concatFruits)

// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]
console.log(monalissaIsMessy)
monalissaIsMessy.sort()
console.log(monalissaIsMessy)

// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
console.log(mirrorMirrorOnTheWall)
mirrorMirrorOnTheWall.reverse()
console.log(mirrorMirrorOnTheWall)
  

// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 
const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."
console.log(RafaelNoBadWords)
console.log(RafaelNoBadWords.split(' ').filter(v=>!'badword'.includes(v)).join(' '))


// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
console.log(numbersToAddUp.reduce((prev,curr)=>{return prev+curr}))

// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
const val=[...numbersToAddUp]
console.log(val)

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
const arr1=[89,30,47,56]
const arr2=['computer','keyboard','mouse','screen']
let comb=[...arr1,...arr2]
console.log(comb)

// Using the variable with the newly connected arrays, use spread operator to add something at the end.
comb=[...comb,...['end']]
console.log(comb)

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
comb=[...['beginning'],...comb]
console.log(comb)

// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!
console.log(donutShop[1][0][1])

// Tosi wants ihatethis. :) Print!
console.log(donutShop[2][0][0][1][0])

// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'
const teo={
  person:true,
  morf:'male',
  hungry:'hungry'
}
if(teo.person==true){
  console.log('Teo is a person!')
  if(teo.morf=='male'){
    console.log("You've got it right!")
    if(teo.hungry=='hungry'){
      console.log("Let's buy some tacos!")
    }
    else if(teo.hungry=='not hungry'){
      console.log("He doesn't need to eat.")
    }
    else{
      console.log("If Teo is not hungry, am I hungry?")
    }
  }
  else{
    console.log('Wrong. Teo is going to remove you from the class.')
  }
}
else{
  console.log('Teo is not a person!')
}

// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'
const gustavo='coolest'
const cool= (gustavo=='coolest') ? 'You got that right':"James wants to argue. He says he's the best!";
console.log(cool)

// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'
const sayGreeting=()=>{
  console.log("Hello, ma'amsir!")
}
sayGreeting()

// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.
const str=(s)=>{
  console.log("This is my "+s)
}
str('STRING')

// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.
const add=(num1,num2,num3)=>{
  return num1+num2+num3
}
const num1=1
const num2=2
const num3=3
console.log(add(num1,num2,num3))

// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts
const fightClub=(name)=>{
  if(name=='Teo'){
    return "1st rule: You do not talk about Fight Club."
  }
  else if(name=='Manara'){
    return "2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB."
  }
  else if(name=='Liv'){
    return `3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.`
  }
  else if(name=='Devin'){
    return "4th rule: Only two guys to a fight."
  }
  else{
    return "No shirts"
  }
}
console.log(fightClub('Teo'))
console.log(fightClub('Manara'))
console.log(fightClub('Liv'))
console.log(fightClub('Devin'))
console.log(fightClub('name'))

// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.
const hello=()=>{
  console.log( 'Hello')
  return function(){
        console.log ('Goodbye')
    } 
}
hello()
hello()()

// Create a function expression with your first name as the variable and then print your first and last name
let Larissa=function(){
  console.log( 'Larissa Portillo')
}
Larissa()

// Create an arrow function that accepts a number and have it return that number doubled
const double=(x)=>{
  return x*2
}
console.log(double(4))

// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.

const human={
  name:'josh',
  age:'16',
  location:'newark,nj'
}


// Access the name using dot notation
console.log(human.name)

// Access the age using square brackets
console.log(human['age'])

// Use object destructuring to access location
const {name,age,location}=human
console.log(location)

// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}

// Print overgrow
console.log(bulbasaur.abilities[0].ability)

// Print cut
console.log(bulbasaur.moves[2])

// Print Bulbahhhh!!!!!
console.log(bulbasaur.sound())

// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
console.log(bulbasaur)
bulbasaur.height=7
console.log(bulbasaur)

// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
bulbasaur['order']=1
console.log(bulbasaur)

// Print an array that contains every single properties in bulbasaur
let arrayProperties=[]
for(prop in bulbasaur){
  arrayProperties.push(prop)
}
console.log(arrayProperties)

// Print every single properties one by one in the console
for(prop in bulbasaur){
  console.log(prop)
}

// Print an array that contains every single values in bulbasaur
let arrayValues=[]
for(prop in bulbasaur){
  arrayValues.push(bulbasaur[prop])
}
console.log(arrayValues)