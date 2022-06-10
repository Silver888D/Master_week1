// const pressGrindBeans= () =>{console.log("Grinding for 20 seconds")};
// pressGrindBeans();
// let coffeeIsGrinding = false;
// const pressGrindBeans= () =>{if (coffeeIsGrinding){console.log("Stopping the grind");coffeeIsGrinding = false;} else{console.log("Grinding is about to being");coffeeIsGrinding = true;}}
// pressGrindBeans();
// pressGrindBeans();
// pressGrindBeans();

// const cashWithdrawal =(amount, accnum) =>{console.log(`${amount} from account ${accnum}`);}
// cashWithdrawal(300,50449921);
// cashWithdrawal(30,50449921);
// cashWithdrawal(200,50447921);

// const greeting =(name, soundEffect)=>{console.log(`${soundEffect} ${name} ${soundEffect} ...... come out and playyyeeeaaay`);}
// greeting("Waarrioooorsss", "*clink*")

// let add = (num1, num2) =>{return(num1+num2);}

// let checkout = () =>{console.log(add(5,52)+(add(24,83)));}
// checkout()

// const multiplyByNineFifths = (celsuis) =>{ return celsuis * (9/5);}
// const getFahrenheit = (celsuis) => {return multiplyByNineFifths(celsuis) +32;}
// console.log(`The temperature is ` + getFahrenheit(15) + `\u00B0` + `F`);

// const divideByNineFifths = (fahrenheit) =>{return fahrenheit -32;}
// const getCelsius = (fahrenheit) => {return divideByNineFifths(fahrenheit) *(5/9) ;}
// console.log(`The temperature is ` + getCelsius(59) + `\u00B0` + `C`);
// //  ARROW FUNCTIONS CANNOT BE DECLARED BEFOREHAND, FUNCTION FUNCTIONS CAN BE
// var sayHello= () =>{console.log("Hello")}
// sayHello()
// sayGoodbye()
// function sayGoodbye(){console.log("Goodbye")}
// // CAN ALSO WRITE AS:
// var sayHello= () =>"Hello";
// function sayGoodbye(){return "Goodbye"}
// console.log(sayHello())
// console.log(sayGoodbye())

// ACTIVITES
// var factorial = (n) =>{if ((n === 0)||(n===1)){return 1;} else {return (n*factorial(n-1));}}
// console.log(factorial(33))

// let orderCount = 0
// const takeOrder = (topping, topping2) =>{ console.log(`Pizza with ${topping} and ${topping2}`);orderCount++;}
// takeOrder("pepperoni", "mushroom")

// var balance = 200
// const pinNum = 1234

// function cashMachine(pinNum, amount){
//     if ((pinNum === 1234) && (amount <= balance)); {console.log(`You have withdrawn ${amount}`);} 
//     else if ((pinNum === 1234) && (amount > balance));{console.log(`You only have a balance of ${balance} so do not have sufficient funds to remove ${amount}`);}
//     else{console.log(`Incorrect pin`);}}
// cashMachine(1234, 150)


// OBJECTS
// let  offer ="none";
// let time = 1500;
// const cafe = {name:"Whitesheep",seatingCapacity:100,hasSpecialOffers:true, drinks: ["Cappuccino","Latte","coffee","Tea","Hotchocoloate"], food:["croissant", "sandwich"],breakfastOffer:"Free croissant with coffee", lunchOffer: "Free drink with sandwich",noOffer:"Sorry no offers", openCafe(){if(hasSpecialOffers){return"Special offer!";}}, closeCafe(){return "We are closed, come back tomorrow";}};
// console.log(cafe.openCafe());
// console.log(cafe.closeCafe());

// const perSon ={name:"Rasputin",age:864738, weight:125, drunk:true, drinks:["Vodka","more Vodka","Absinthe"], sayHi(){return `Hello my name is ${this.name}`;}}
// // object.property to access info 
// // console.log(perSon.name);
// console.log(perSon.sayHi())
// if (time<=1100){offer = cafe.breakfastOffer;console.log(cafe.breakfastOffer);}
// else if (time<1500){offer = cafe.lunchOffer;console.log(cafe.lunchOffer);}
// else (time >=1500){offer = cafe.noOffer;console.log(cafe.noOffer);}

// const alarm = {weekendAlarm: "no alarm needed", weekdayAlarm: "get up at 7am"};
// var day ="Saturday"
// var alarmOn = false

// if (day == "Saturday" || day == "Sunday"){console.log(alarm.weekendAlarm);alarmOn = false;console.log(alarmOn);}
// else {console.log(alarm.weekdayAlarm);alarmOn=true;console.log(alarmOn);}
// perSon.favSongs = ["Die MF Die","Barbie girl"]
// console.log(perSon.favSongs);
// console.log(perSon)

// const pet ={name:"Vinnie", typeOfPet:"Gerbil",age:4,colour:"albino", eat(){return `${this.name} is eating`}, drink() {return`${this.name} is drinking`}}
// console.log(pet.eat())
// console.log(pet.drink())

// const coffeeShop={branch:"Manchester", coffee:{cost :1}, tea:{cost :.5}, sandwich:{cost:2},barm:{cost:1.25}, drinksOrdered(){if (this.coffee){console.log(`Your order is coffee for £ ${this.coffee.cost}`)}
// else if (this.tea){console.log(`Your order is tea for £ ${this.tea.cost}`)}
// else if (this.tea + this.coffee){console.log(`Your order is a coffee and tea for £ ${this.coffee.cost + this.tea.cost}`)};}


// coffeeShop.drinksOrdered("coffee")
// coffeeShop.drinksOrdered("tea")

// let coffeeShop = {branch: "Liverpool", drinksPrices: {cappuccino: 4, latte: 4, espresso: 2, americano: 3},
// foodPrices: {croissant: 3, breakfastSandwich: 5, bagel: 4, donut: 3, cupcake: 2}, 

// foodOrdered(order) {foodOrder = []; total = 0;
//     for (let i=0; i<order.length; i++) {if (order[i] in this.foodPrices) {
//         food = order[i]; price = this.foodPrices[order[i]];foodOrder.push(`${food}: £${price}`);total += price}}
//         return "\nYour food bill:\n" + foodOrder.join("\n") + `\nTotal: £${total}\n`},

// drinksOrdered(order) {drinksOrder = []; total = 0; 
//     for (let i=0; i<order.length; i++) {if (order[i] in this.drinksPrices) {
//         drink = order[i]; price = this.drinksPrices[order[i]]; drinksOrder.push(`${drink}: £${price}`); total += price}}
//         return "Your drinks bill:\n" + drinksOrder.join("\n") + `\nTotal: £${total}\n`},}

// order = ["croissant"]
// console.log(coffeeShop.foodOrdered(order))
// console.log(coffeeShop.drinksOrdered(order))

let string = "hello world"

for (let i of string) {console.log(i);}