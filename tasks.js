// ! Har bir masalaga 10 daqiqadan vaqt sarflang oshib ketmasin...

// Masala - 1

// Arraydagi eng katta sonni topish kerak for loop bilan

// const numbers = [23, 45, 67, 89, 34, 56, 33, 151, 78, 20];
// let maxNum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     const nums = numbers[i];
//     if(maxNum < nums) maxNum = nums;
// }
// console.log(maxNum);

// Masala - 2

// Arraydagi eng uzun so'zni topib uning oxirgisidan bitta oldingi harfini topish

// const fruites = ["Olma", "Nok", "Anor", "Chegara"];
// let maxLen;
// for (const key in fruites) {
//     let fruites_value_length = fruites[key].length
//     if(Math.max(fruites_value_length) == fruites_value_length) maxLen=key;
// }
// let re = fruites[Number(maxLen)].at(-2)
// console.log(re);

// Masala - 3

// Arraydagi barcha stringning lengthini topish

// const fruites = ["Olma", "anor", "Nok"];
// let re = fruites.join("").length;
// let re = fruites.map(function(item){return item.length});
// console.log(re);

// Masala - 4

// Arrayda kamida 6 ta toq va juft son bor, va shundan juft sonlarning yarmini ya'ni 18 juft soni bo'lsa uning yarmi 9 sonini bir arrayga solib qaytarib bersin ya'ni hamma juftlarning yarmini bitta arrayga joylash kerak

// const numbers = [23, 58, 96, 31, 74, 44, 152, 531, 26];
// let re = numbers.filter(function(item){return !(item%2)}).map(function(item){return item/2});
// console.log(re);

// Masala - 5

// Arraydagi katta harf bilan boshlangan so'zlarning birinchi harfini kichik qolgan harfini katta qilib, kichik harf bilan boshlanganlarini birinchi harfini katta qolganlarini kichkina qib bersin

// const fruites = ["olma", "o'rik", "Nok", "avacado"];
// let re = "";
// for (const v of fruites) {
//     if (v.at(0) == v.at(0).toUpperCase()) re+=`${v.at(0).toLowerCase()}${v.slice(1, v.length).toUpperCase()}, `;
//     if(v.at(0) == v.at(0).toLowerCase()) re+=`${v.at(0).toUpperCase()}${v.slice(1, v.length)}, `;
// }
// console.log(re);




// Masala - 6

// Promptdan bir so'z kiritish kerak va shu so'zni 3 marta space bilan chiqarib berish kerak for loop da

// example: olma => olma olma olma

// let str = prompt("str kiriting");
// let re = ""
// for (let i = 0; i < 3; i++) {re+=`${str} `}
// console.log(re);

// Masala - 7
// Ichma ich array bor va shu arrayning juft arraylarning birinchi elementining birinchi harflarini birlashtirib qaytarib bersin

// const fruitesArray = [["Olma"], ["Bexi"], ["Anor"], ["Xurmo"], ["GIlos"], ["Kiwi"], ["Banan"],];
// let re = fruitesArray.filter(function(item){return item[0].length % 2 == 0}).map(function(item){return item[0][0]}).join("");
// console.log(re);

// example: const fruitesArray = [["Olma"],["Bexi"],["Anor"],["Xurmo"],["GIlos"],["Kiwi"],["Banan"],];  => BXK

