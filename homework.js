
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function sRect(a, b) {
    return a * b;
}

//- створити функцію яка обчислює та повертає площу кола з радіусом r

function sRound(r) {
    return Math.PI * Math.pow(r,2);
}

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function sCylinder(r, h) {
    return 2 * Math.PI * (h + r);
}

//- створити функцію яка приймає масив та виводить кожен його елемент

function printArray(arr) {
    for (const item of arr) {
        console.log(item);
    }
}

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParag(text) {
    document.write(`<p> ${text}</p>`);
}
createParag('Lorem ipsum dolor sit amet, consectetur')

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createUl(text, size) {
    document.write(`<ul>`);
    for (let i = 0; i < size; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
createUl('Lorem ipsum dolor sit amet, consectetur', 3);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createUl(text, size) {
    document.write(`<ul>`);
    for (let i = 0; i < size; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
createUl('Lorem ipsum dolor sit amet, consectetur', 3);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function printArray2(arr) {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
printArray2([true, false, 19, 25, 'Lorem', 'ipsum']);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function printArrayOfObjects(arr) {
    for (const item of arr) {
        document.write(`<div>${item.id} - ${item.name} - ${item.age}</div>`);
    }
}
printArrayOfObjects([id: 100; name: ivan; age: 25;]);

