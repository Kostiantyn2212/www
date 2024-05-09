let x = 1;
let y = 2;
let res1 = x*14-y;
console.log(res1);
console.log(typeof res1); 
let res2 = "true"+y;
console.log(res2); 
console.log(typeof res2); 
let res3 = x+y==y+x;
console.log(res3); 
console.log(typeof res3); 
let res4 = x+y%"lab";
console.log(res4); 
console.log(typeof res4); 

let number = prompt("Введіть число:");

while (isNaN(parseFloat(number))) {
    number = prompt("Ви не ввели число. \nСпробуйте ще раз: ");
} 

if ((number % 2) == 0 && number > 0) {
    console.log( number, "є парним і додатнім числом");
} else  {
    console.log( number, "не є парним чи додатнім числом");
} 

if (number % 7 == 0) {
    console.log(number + " є кратним 7");
} else {
    console.log(number + " не є кратним 7");
}

let isAdult = prompt("Вам вже виповнилося 18 років?");
(isAdult > 18) ? console.log("Ви досягли повноліття") : console.log("Ви ще занадто молоді");

let side1 = parseFloat(prompt("Введіть першу сторону"));
let side2 = parseFloat(prompt("Введіть другу сторону"));
let side3 = parseFloat(prompt("Введіть третю сторону"));
let smallSide, smallSide2, bigSide;

if (!isNaN(side1) && !isNaN(side2) && !isNaN(side3) && side1 > 0 && side2 > 0 && side3 > 0) {
    if (side1 <= side2 || side1 <= side3) {
        smallSide = side1;
        if (side2 <= side3) {
            smallSide2 = side2;
            bigSide = side3;
        } else {
            smallSide2 = side3;
            bigSide = side2;
        }
    } else  {
        bigSide = side1;
        smallSide2 = side2;
        smallSide = side3;
    }
    if (smallSide + smallSide2 > bigSide) {
        let p = (side1 + side2 + side3) / 2;
        let area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3)).toFixed(3);
        console.log("Площа: " + area);
        if (smallSide * smallSide + smallSide2 * smallSide2 === bigSide * bigSide) {
            console.log("Трикутник є прямокутним");
        } else {
            console.log("Трикутник не є прямокутним");
        }
    } else {
        console.log("Ці відрізки не є сторонами трикутника");
    }
} else {
    console.log("Некоректні дані");
}
let today = new Date();
let nowHour = today.getHours();

if (nowHour >= 23 && nowHour < 5 || nowHour==0) {
    console.log("Доброї ночі");
} else if (nowHour >= 5 && nowHour < 11) {
    console.log("Доброго ранку");
} else if (nowHour >= 11 && nowHour < 17) {
    console.log("Доброго дня");
} else {
    console.log("Доброго вечора");
}

switch (true) {
    case (nowHour >= 23 && nowHour < 5 || nowHour==0):
        console.log("Доброї ночі!");
        break;
    case (nowHour >= 5 && nowHour < 11):
        console.log("Доброго ранку!");
        break;
    case (nowHour >= 11 && nowHour < 17):
        console.log("Доброго дня!");
        break;
    default:
        console.log("Доброго вечора!");
}