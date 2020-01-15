'use strict';
let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Ведите дату в формте YYY-MM-DD", "");

let appData = {
    budget: money,
    exptnses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};


for (let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом мечяце", ''),
        b = prompt("Во сколько обойдётся?", '');

    if( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
            console.log("+");
        appData.exptnses [a] = b;
    } else {
        console.log ("error");
        i--;
    }
}

    // let i = 0;

    
// while( i < 2) {
//         i++;
//         let a = prompt("Введите обязательную статью расходов в этом мечяце", ''),
//             b = prompt("Во сколько обойдётся?", '');
//     if( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50) {
//             console.log("+");
//         appData.exptnses [a] = b;
//     } else {
//         i--;
//     }
// }

// do{
//         let a = prompt("Введите обязательную статью расходов в этом мечяце", ''),
//             b = prompt("Во сколько обойдётся?", '');
//         if( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
//             && a != '' && b != '' && a.length < 50) {
//                 console.log("+");
//                 appData.exptnses [a] = b;
//             } else {
//                 i--;
//                 }
//         i++;
// }while (i < 2);

    appData.moneyPerDay = appData.budget / 30;

    alert("Ежедневыны бюджет: " + appData.moneyPerDay);

    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достакат");
    } else if (appData.moneyPerDay> 2000) {
        console.log("Высокий уровень достакат");
    } else {
        console.log("Ошибка");
    }