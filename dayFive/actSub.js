let num0 = 15

if (num0 %3 ==0 && num0 %5==0){console.log("FizzBuzz")}
else if (num0 %5==0){console.log("Buzz")}
else if (num0 %3==0){console.log("Fizz")}
else{console.log(`${num0}`)}

let num1 = []
while (num1.length < 6){randNo = Math.floor(Math.random()*(30)+1);if (randNo % 7 == 0){console.log(`${randNo} is divisible by seven.`)}else {console.log(`${randNo} is not divisible by seven.`)}num1.push(randNo);console.log(num1)}


let num2 = []
while (num2.length <6){let randNo1 = (Math.floor(Math.random() * 50));num2.push(randNo1);console.log(num2)}

let toNine = 9
for(let x = 0; x < 20; x++){
    if (x % 2 == 0){
        console.log(toNine)
        toNine--}}
while(toNine >= 0){console.log(toNine);toNine--}

const pet ={name:"Vinnie", typeOfPet:"Gerbil",age:4,colour:"albino", eat(){return `${this.name} is eating`}, drink() {return`${this.name} is drinking`}}
console.log(pet.eat())
console.log(pet.drink())


var password = "password"
if (password.length <8){console.log("Too short, needs 8 characters")}
else {console.log(`${password}`)}

var num3 = 30
if (num3 %3 ==0 && num3 %5==0){console.log("This number is divisible by both 3 and 5")}
else{console.log("This number is not divisible by both 3 and 5")}