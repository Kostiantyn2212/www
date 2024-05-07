console.log("Формазюк Костя");

let value1;
let value2;


value1 = 2006;
value2 = "Laba 12";

console.log("Значення першої змінної:", value1);
document.write("Значення першої змінної: ", value1, "<br>");
console.log("Значення другої змінної:", value2);
document.write("Значення другої змінної: ", value2,"<br>");

value2 = value1;

console.log("Значення першої змінної після копіювання:", value1);
document.write("Значення першої змінної після копіювання: ", value1,  "<br>");
console.log("Значення другої змінної після копіювання:", value2);
document.write("Значення другої змінної після копіювання: ", value2,"<br>");
var car = {
    "String": "Audio",
    "Number": 5,
    "Boolean": true,
    "Undefined": undefined,
    "Null": null
};
console.log(car);

let isAdult= confirm("Вам вже є 18?");
console.log("isAdult: ",isAdult);


let name="Костя";
let surename="Формазюк";
let class_group="КН-321";
let birth_year=2006;
let isMarried = false;


console.log( typeof(birth_year), "рік народження");

console.log(typeof(isMarried), "статус");

 
console.log(typeof(name), "ім'я");

console.log(typeof(surename),"прізвище");

console.log(typeof(class_group),"група");

let phone = null;
let license;

console.log(phone, typeof(phone));
console.log(license, typeof(license));

let user_name=prompt("Логін: ");
let email = prompt("Пошта: ");
let password = prompt("Пароль: ");

document.write("<br> Шановний ", user_name,", ваша електрона пошта це ", email, ", ваш пароль це ",password);


var hour_seconds = 60 * 60;

var day_seconds = hour_seconds * 24;

var month_days = 30;
var month_seconds = day_seconds * month_days;

document.write("<br><br> Кількількість секунду в годині: ", hour_seconds);
document.write("<br> Кількількість секунду в дні: ", day_seconds);
document.write("<br> Кількількість секунду в місяці: ", month_seconds);

