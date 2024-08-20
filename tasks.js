// ! Har bir masalaga 10 daqiqadan vaqt sarflang oshib ketmasin...

// Masala - 1

// Arraydagi eng katta sonni topish kerak for loop bilan

// const numbers = [23, 45, 67, 89, 34, 56, 33, 151, 78, 20];
// let maxNum = 0;
// for (let nums of numbers) {
//     if(maxNum < nums) maxNum = nums;
// }
// console.log(maxNum);

// Masala - 2

// Arraydagi eng uzun so'zni topib uning oxirgisidan bitta oldingi harfini topish

// const fruites = ["Olma", "Nok", "Anor", "Chegara"];
// let maxLength;
// for (const key in fruites) {
//     let fruitesValueLength = fruites[key].length;
//     if(Math.max(fruitesValueLength) == fruitesValueLength) maxLength=key;
// }
// let result = fruites[Number(maxLength)].at(-2);
// console.log(result);

// Masala - 3

// Arraydagi barcha stringning lengthini topish

// const fruites = ["Olma", "anor", "Nok"];
// ------------------
// let result = [];
// result.push(fruites.join("").length);
// ------------------ 
// let result = fruites.map(function(item){return item.length});
// console.log(result);

// Masala - 4

// Arrayda kamida 6 ta toq va juft son bor, va shundan juft sonlarning yarmini ya'ni 18 juft soni bo'lsa uning yarmi 9 sonini bir arrayga solib qaytarib bersin ya'ni hamma juftlarning yarmini bitta arrayga joylash kerak

// const numbers = [23, 58, 96, 31, 74, 44, 152, 531, 26];
// let result = [];
// numbers.forEach(function(nums){if(nums%2==0) result.push(nums/2);});
// console.log(result);

// Masala - 5

// Arraydagi katta harf bilan boshlangan so'zlarning birinchi harfini kichik qolgan harfini katta qilib, kichik harf bilan boshlanganlarini birinchi harfini katta qolganlarini kichkina qib bersin

// const fruites = ["olma", "o'rik", "Nok", "avacado"];
// let result = [];
// for (const fruitesValue of fruites) {
//     let fruitesValueToLowerCase = fruitesValue.at(0).toLowerCase();
//     let fruitesValueToUpperCase = fruitesValue.at(0).toUpperCase();
//     let fruitesValueSlice = fruitesValue.slice(1, fruitesValue.length);
//     if (fruitesValue.at(0) == fruitesValueToUpperCase) result.push(fruitesValueToLowerCase+fruitesValueSlice.toUpperCase())
//     else result.push(fruitesValueToUpperCase+fruitesValueSlice);
// }
// console.log(result);

// Masala - 6

// Promptdan bir so'z kiritish kerak va shu so'zni 3 marta space bilan chiqarib berish kerak for loop da

// example: olma => olma olma olma

// let stringValue = prompt("str kiriting");
// let result = ""
// for (let i = 0; i < 3; i++) {re+=stringValue}
// console.log(result);

// Masala - 7
// Ichma ich array bor va shu arrayning juft arraylarning birinchi elementining birinchi harflarini birlashtirib qaytarib bersin

// const fruitesArray = [["Olma"], ["Bexi"], ["Anor"], ["Xurmo"], ["GIlos"], ["Kiwi"], ["Banan"],];
// let result = "";
// fruitesArray.forEach(function(fruites){if(fruites[0].length % 2 == 0)result+=fruites[0].at(0);});
// console.log(result);

// example: const fruitesArray = [["Olma"],["Bexi"],["Anor"],["Xurmo"],["GIlos"],["Kiwi"],["Banan"],];  => BXK

