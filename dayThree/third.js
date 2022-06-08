// // console.log("hello")

// let coffeeOrder = ["Alex - Cortado", "Ben - Cortado", "Charlie - Whatever's new"];
// console.log(coffeeOrder)
// console.log(coffeeOrder[1])
// console.log(coffeeOrder[1][2])
// coffeeOrder[0]= "Alex- Blood of Christ";
// console.log(coffeeOrder)
// console.log(coffeeOrder.length)
// coffeeOrder.pop()
// console.log(coffeeOrder)
// coffeeOrder.push("Seb - water")
// console.log(coffeeOrder)

// let favSongs= ["Electric Six - Gaybar", "Free Bird  - Lynyrd Skynyrd", "Kickstart My Heart - Motley Crue"]
// console.log(favSongs)
// favSongs.unshift("Highway to Hell - AC/DC")
// favSongs.push("Horse - Salvatore Ganacci")
// favSongs.pop()
// console.log(favSongs)
// let post2000 = favSongs.slice(1,2);
// console.log(post2000)


// favSongs.map((favReversed) => {console.log(`${favReversed}`)})

// LOOPS
// let favDrinks = ["Coke","Water","Milk"]
// // // console.log(favDrinks[0])
// // // console.log(favDrinks[1])
// // // console.log(favDrinks[2])
// // for (let drinkLoop = 0; drinkLoop < favDrinks.length; drinkLoop++){
// //     console.log(favDrinks[drinkLoop]);}

// // let multiplesTwo =[];

// // for (let i = 0; i <20;i++){if (i %2 == 0){multiplesTwo.push(i);}}
// // console.log(`Numbers divisble by 2 between 0 and 20 are ${multiplesTwo}.`)

// let num = 0

// while (num < favDrinks.length){console.log(favDrinks[num]);num++}

// let age = 15
// while (age<18){console.log("You are a child");age++;}
// console.log("You're an adult");

// Activities

// favFilms = ["Baby Driver", "Hot Fuzz", "This is the End", "Transporter 2",]
// // favFilms.unshift("Hot Tub Time Machine","Venom")
// // for (let filmLoop = 0; filmLoop < favFilms.length; filmLoop++){
// //         console.log(favFilms[filmLoop]);}


// // let num = []
// // // while (num.length <6){let randNo = (Math.floor(Math.random() * 50));num.push(randNo);console.log(num)}

// // let toNine = 9
// // // for(let x = 0; x < 20; x++){
// // //     if (x % 2 == 0){
// // //         console.log(toNine)
// // //         toNine--}}
// // while(toNine >= 0){console.log(toNine);toNine--}

// console.log(favFilms)
// for (let filmLoop = 0; filmLoop < favFilms.length; filmLoop++){
//         console.log(favFilms[filmLoop]);}
// if (favFilms[2]== "Ghostbusters"){console.log("Yay Ghostbusters!")}
// else{console.log("Boo! We want Ghostbusters")}

let num = []
while (num.length < 6){randNo = Math.floor(Math.random()*(30)+1);if (randNo % 7 == 0){console.log(`${randNo} is divisible by seven.`)}else {console.log(`${randNo} is not divisible by seven.`)}num.push(randNo);console.log(num)}