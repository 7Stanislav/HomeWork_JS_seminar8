"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const arr1 = [];
for (let i = 0; i < 5; i++) {
  const rnd = Math.floor(Math.random() * 10);
  arr1.push(rnd);
}
console.log(arr1);

let sum = 0;
for (let i = 0; i < arr1.length; i++) {
  sum = sum + arr1[i];
}
console.log(sum);

let min = 9;
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] < min) {
    min = arr1[i];
  }
}
console.log(min);

const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] === 3) {
    arr2.push(i);
  }
}
console.log(arr2);