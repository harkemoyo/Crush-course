'use strict';
// Developer challenge

// Understand the right Question
// Break the into smaller parts

// const data = [17, 21, 23]
// const data2 = [12, 5, -5, 0, 4]

// function printForecast(arr){
//     let str = ''

//     for (let i = 0; i < arr.length; i++) {
//         str +=` ...${arr[i]}°C`
//     }
//     console.log(`s:${str}...`);
// }
// printForecast(data)



// looping over the Objects

// let mark = {
//     fullName: 'Mark Miller ',
//     mass: 78,
//     height: 1.69,
// calcBMI: function() { 
//     return 72 / (1.69 * 1.69)
// }
// }

// // john  
// let john = {
//     fullName: 'John Smith',
//     mass: 98,
//     height: 1.95,
//     calcBMI: function() { 
//         return 92 / (1.95 * 1.95)
// }
// }

// if (mark.calcBMI > john.calcBMI ){
//     return console.log(`${mark.fullName} Bmi : ${mark.calcBMI()}is Higher than ${john.fullName} BIM ${john.calcBMI()}`)
// }else if (mark.calcBMI < john.calcBMI) {
// return console.log(`${mark.fullName} Bmi : ${mark.calcBMI()}is Higher than ${mark.fullName} BIM ${john.calcBMI()}`)
// }



// const calcAverage = (score1, score2, score3) => score1 + score2 + score3

// const scoreDolphins = calcAverage(44, 23, 71)

// const scoreKoalas = calcAverage(65, 54, 49)


// function checkWinner (avgDolphins, avgKoalas) {
   
//     if (avgDolphins > 2 * avgKoalas){
//         console.log(`Koalas win with (${avgDolphins} vs. ${avgKoalas})`)
//     } else {
//         console.log(`Dolphins win with (${avgKoalas} vs. ${avgDolphins})`)
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas )
// const bill = 40
// const Tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// console.log(`The bill was ${bill}, the tip was ${Tip}, and the total value ${bill + Tip}`)

// const Dolphin =( 96  + 108 + 89) / 3
// const Koalas = (88 + 91 + 110) / 3

//      function calcTips(bill) {
// return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }

// const bills = [ 125, 555, 44]

// const tips = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])]

// const totals =[ bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(bills, totals);

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = [calcTips(bills[i])]
//     console.log(tip);
//     tips.push(tip)
//     const total =  [tips + bills[i]]
//     console.log(total);
//     totals.push(total)
// }

// console.log("bills",bills, "tips",tips, "totals",totals);

//  const  calcAverage = function(arr) {

//     let sum = 0;
    
//     for (let i = 0; i < arr.length; i++) {
      
//         sum += arr[i] 
       
    
//         return sum / arr.length
// }
// console.log(sum);
// }

// console.log(calcAverage([9,9,3]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

// Sample array of values
// const myArray = [1, 2, 3, 4, 5];

// // Initialize a variable to hold the sum
// let sum = 0;

// // Loop through the array and add each value to the sum
// for (let i = 0; i < myArray.length; i++) {
//     sum += myArray[i];
// }


// function calcAverage(array) {
    
//    let sum = 0;
//     for (let i = 0; i < array.length; i++) {
       
     
//         sum += array[i]
       
       
//     }
//     return sum / (array.length);
   
// }
// console.log(calcAverage());
// // Print the final sum
// console.log("The sum of the array is:", sum);
// if (Dolphin > Koalas && Dolphin >= 100) {
//     console.log('Dolphin wins the trophy')
// } else if (Dolphin < Koalas && Koalas >= 100) {
//     console.log('Koalas wins the trophy'
// )} else if (Dolphin === Koalas && Koalas >= 100 && Dolphin >= 100) {
// console.log('They both win the Trophy')
// } else{
//     console.log('none of them')
// }


// const massMark = 78
// const heightMark = 1.69
// const massJohn = 92
// const heightJohn = 1.95
// const BMIMark = 72 / (1.69 * 1.69)
// const BMIJohn = 92 / (1.95 * 1.95)

// const markHigherBMI = BMIMark === BMIJohn

// console.log(BMIMark)
// console.log(BMIJohn)
// console.log(markHigherBMI) // console;

// const BIM = `Marks ${BMIMark} is higher  than Johns  ${BMIJohn}`
// console.log(BIM);
