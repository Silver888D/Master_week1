// Variables

// let
// var
// const

// let firstName= "Seb"
// // console.log(firstName)

// // let num1=4
// // let num2=2
// // let remainder= num1 % num2
// // let expo = num1 ** num2
// // console.log(remainder, expo)

// let favDrink= "Cola"
// console.log("my favourite drink is" + favDrink);
// console.log("my favourite drink is", favDrink);
// console.log(`My favourite drink is ${favDrink}`);
// console.log(`My name is ${firstName}, I want a ${favDrink}`);
// //  need to use backticks -- top left under esc

// Activities
// let firstName = "Seb"
// let ageCurrent = 28
// let favColor = "Green"
// let breakFast = "cereal"
// let lunch = "sandwich"
// let dinner = "pasta"
// console.log(`My name is ${firstName} I am ${ageCurrent} and my favourite colour is ${favColor}. For Breakfast I had ${breakFast}, for lunch ${lunch} and for dinner ${dinner}.`)
// breakFast = "Toast"
// console.log(`My name is ${firstName} I am ${ageCurrent} and my favourite colour is ${favColor}. For Breakfast I had ${breakFast}, for lunch ${lunch} and for dinner ${dinner}.`)

// today=new Date();
// var bday=new Date(today.getFullYear(), 05, 19);
// if (today.getMonth()==05 && today.getDate()>19)
// {bday.setFullYear(bday.getFullYear()+1);}  
// var one_day=1000*60*60*24;
// console.log(Math.ceil((bday.getTime()-today.getTime())/(one_day))+ " days until level up");

// let space1 = "X"
// let space2 = "O"
// let space3 = ""
// let space4 = "X"
// let space5 = "X"
// let space6 = ""
// let space7 = "O"
// let space8 = ""
// let space9 = ""
// console.log("   |   |   ")
// console.log(`${space1}  | ${space2} | ${space3}`)
// console.log("   |   |   ")
// console.log("------------")
// console.log("   |   |   ")
// console.log(`${space4}  | ${space5} | ${space6}`)
// console.log("   |   |   ")
// console.log("------------")
// console.log("   |   |   ")
// console.log(`${space7}  | ${space8}  | ${space9}`)
// console.log("   |   |   ")

// if/else and switch syntax

// let deathray = "a";

// if (deathray == "a") {
//     console.log("AAAAAAAAAAAAAHHHHHHHHHHHHHHHHHH!")}
//     else if (deathray == "o"){console.log("OOOOOOOHHHHHH!")}
//     else if (deathray == "i"){console.log("IIIIHHHHHHHH")}
//     else {console.log("Phew, it's off")}

//  === - strict equal to has to be same value and data type

// if (1 === "1"){console.log("yay!")}
// else {console.log("that's not an integer!")}

// let place = "Manc";
// let weather = "Cloudy";

// if (place == "Manc" && weather == "Sunny"){
//     console.log("Check again");}
// else if (place == "Manc" && weather == "Rain"){
//     console.log("Obvs");}
// else {console.log("What it isn't raining?");}

// let num = 7

// // if (num <= 10){console.log("Less than or equal to 10")}
// // else{console.log("not less than 10")}

// if(num % 4 === 0){console.log("divisible by 4")}
// else{console.log("not divisible by 4")}

// && - both conditions have to be met for code to run
// || - either condition can be met for code to run

// let day = "Saturday";

// if (day == "Saturday" || day == "Sunday"){
//     console.log("it's the weekend!");}
// else {console.log("When's weekend?");}

// let word = "Blob"
// let nother = "Sqwab"

// if (word == "Blob" && nother == "Sqwab"){console.log(`You have a ${word} and a ${nother}`)}
// else{console.log("Pathetic")}

// if (word == "Blob" || nother == "Sqwab"){console.log("Only one..... maybe both, see above")}
// else{console.log("meh")}

//  SWITCH --
//  switch(expression){
//     case x:
//         dsjiofsdofsdof
//         break;
//     case y:
//         dsgfdgfsd
//         break;
//     default:fsfsdfsd}

// let car = "Peugeot";

// switch(car){
//     case "Ford":
//     case "GM":
//         console.log("You've got an Amercan car!");
//         break;
//     case "Peugeot":
//     case "Citroen":
//         console.log("You've got an French car!");
//         break;
//     case "Honda":
//     case "Toyota":
//     case "Suzuki":
//         console.log("You've got an Japanese car!");
//         break;
//     case "Mercedes":
//         console.log("You've got fancy German car!");
//         break;
//     case "Volkswagon":
//         console.log("You've got an chavvy German car!");
//         break;
//     case "Hyundai":
//     case "Kia":
//         console.log("You've got a South Korean car!");
//         break;
//     default: console.log("Your car is not in the top ten companies in the world!");}

// const grade = 87

// switch(true){
//     case grade >= 70:
//         console.log("Distinction");
//         break;
//     case grade >= 60:
//         console.log("Merit");
//         break;
//     case grade >=50:
//         console.log("Pass");
//         break;
//     default: console.log("Fail")}

// ACVITIES

// let age = 17
// let country = "UK"
// if (age > 17 && country == "UK"){console.log("Yes, I can serve you.")}
// else {console.log("You aren't old enough.")}

// let topping1 = "pepperoni"

// switch(topping1){
//     case "mushroom":
//         console.log("These are important ingredients for my pizza");
//         break;
//     case "pepperoni":
//         console.log(`I don't mind having ${topping1} on my pizza`);
//         break;
//     case "peas":
//         console.log(`${topping1} should not be on a pizza`);
//         break;
//     default: console.log("PIZZA!")}

// var password = "password"
// if (password.length <8){console.log("Too short, needs 8 characters")}
// else {console.log(`${password}`)}

// var num = 22
// // if (num %3 ==0 && num %5==0){console.log("This number is divisible by both 3 and 5")}
// // else{console.log("This number is not divisible by both 3 and 5")}

// // if (num %3 ==0 && num %5==0){console.log("FizzBuzz")}
// // else if (num %5==0){console.log("Buzz")}
// // else if (num %3==0){console.log("Fizz")}
// // else{console.log(`${num}`)}

// if (num[0] == num[1] && num[1] == num[0]){console.log("Snap")}
// else {console.log("Not a Palindrome")}

// time = 10
// placeOfWork = "Manchester"
// townOfHome= "Denton"

// if (time >=9){console.log(`I'm in ${placeOfWork}`)}
// else if (time <9 && time >7){console.log(`I'm in ${townOfHome}`)}
// else if (time <=7){console.log(`I'm at Home`)}

// ranString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// allTheV = "a","e","i","o","u"
// var lastVowel = ranString.lastIndexOf(allTheV);
// console.log(lastVowel)


// let word = "apple"
// if (word[0] == word[word.length - 1]) { console.log("True") }
// else { console.log("False") }

num1 = 4
num2 = 7
sum = num1 + num2
multi = num1 * num2
if (sum % 2 == 0) {
    console.log(`${sum}`);}
else{ console.log(`${multi}`) }