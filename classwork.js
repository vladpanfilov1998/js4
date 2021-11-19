
//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minNum (a, b, c) {
    if (a > b && a > c) {
        if (b > c) {
            console.log(a, b, c);
        } else {
            console.log(a, c, b);
        }
    } else if (b > a && b > c) {
        if (a > c) {
            console.log(b, a, c);
        } else {
            console.log(b, c, a);
        }
    } else if (c > a && c > b) {
        if (a > b) {
            console.log(c, a, b);
        } else {
            console.log(c, b, a);
        }
    }
}

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function minNum (a, b, c) {
    if (a < b && a < c) {
        if (b < c) {
            console.log(a, b, c);
        } else {
            console.log(a, c, b);
        }
    } else if (b < a && b < c) {
        if (a < c) {
            console.log(b, a, c);
        } else {
            console.log(b, c, a);
        }
    } else if (c < a && c < b) {
        if (a < b) {
            console.log(c, a, b);
        } else {
            console.log(c, b, a);
        }
    }
}

//- створити функцію яка повертає найбільше число з масиву

function maxFromArray(numbers) {
    let max = numbers[0];
    for (const number of numbers) {
        if (number > max) {
            max = number;
        }
    }
    return max;
}

//- створити функцію яка повертає найменьше число з масиву

function minFromArray(numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sumArr(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return sum;
}

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function avgArr(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return sum / nums.length;
}

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function maxminArray(nums) {
    let max = nums[0];
    let min = nums[0];
    for (const num of nums) {
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    }
    console.log(max);
    return min;
}

//- створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function randomArr(arr) {
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    return arr;
}

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function randomLimArr(arr, limit) {
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.round(Math.random() * limit);
    }
    return arr;
}

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function reversArr(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        let arrElement = arr[i];
        newArr.push(arrElement);
    }
    return newArr
}
