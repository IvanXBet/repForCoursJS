'use strict';
let money, time;
let col = "red";



function start () {
    
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Ведите дату в формте YYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();


let appData = {
    budget: money,
    exptnses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooesExpenses: function () {
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
            console.log(appData.exptnses);
        }
    },

    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert("Ежедневыны бюджет: " + appData.moneyPerDay);
    },

    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достакат");
        } else if (appData.moneyPerDay> 2000) {
            console.log("Высокий уровень достакат");
        } else {
            console.log("Ошибка");
        }
    },

    checkSavings: function() {
        if(appData.savings == true) {
            let save = +prompt("Какова сумма накоплений"),
                procent =+prompt("Под какой процент?");
    
            appData.nonthIncome = save/100/12*procent;
            alert("Доход в меесяц с вашего дипозита "+ appData.nonthIncome);
        }
    },

    chooseOptExpenses: function() {
        for(let i=0; i<3;i++){
        
            let a = prompt("Статья необязательных расходов?", '')
            if((typeof(a)) != null && a != '' ) {
                appData.optionalExpenses  [i+1]=a;
                
            }
            console.log(appData.optionalExpenses);
        }
    },

    chooseIncome: function() {
        let items= prompt("Что принесёт дополнительный доход? (Перечислить через запятую)", "");

        while((typeof(items)) !== 'string' || items == null || items == "") {
            items= +prompt("Что принесёт дополнительный доход? (Перечислить через запятую)", "");
        }
        
            appData.income = items.split(", ");
            appData.income.sort();

            alert("Способы доп. заработка:");

            appData.income.forEach(function (element, i){
                
            alert((i+1)+ " - " + element);
            
            
        });
    },

    allprog: function () {
        alert("Наша программа включает в себя данные: " );
        for (const key in appData) {
            console.log(key +" - "+ appData[key]);
        }
    }
};






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



    




    






//________________________________________

// let ans = prompt('', ''),
//     arr1 = [];

// arr = ans.split(',');
// console.log(arr);

// let arr2 = ['duck', 'guck', 'block'],
//     i = arr2.join();

// console.log(i);