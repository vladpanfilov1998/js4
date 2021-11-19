//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function plusArray(arg1, arg2) {
    if ((arguments[1]) === undefined) {
        console.log(`${(arguments[0])}`);
    } else {
        console.log(`${(arguments[0])}${(arguments[1])}`);
    }
}

//- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//    EXAMPLE:

let arr1 = [1,2,3,4];
let arr2 = [2,3,4,5];
let arr3 = [];

//    [3,5,7,9]

function sumArray(array1, array2) {
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        newArray.push(array1[i] + array2[i]);
    }
    return newArray;
}

//- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//EXAMPLE:
//    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function sumArray(array) {
    let newArray = [];
    for (let key of Object.keys(array)) {
        newArray.push(key);
    }
    return newArray;
}

//    - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//EXAMPLE:
//    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function randArray(array) {
    let newArray = [];
    for (let value of Object.values(array)) {
        newArray.push(value);
    }
    return newArray;
}
