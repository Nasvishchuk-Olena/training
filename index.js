//1. Використовуючи функцію if...else,
//напишіть код, який буде запитувати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач ввів "ECMAScript",
//то показувати через alert: "Вірно!"
//у противному випадку показати:"Не знаєте? ECMAScript!"

// const promptName = prompt("Яка офіційна назва JavaScript?");
//Variant 1
// if (promptName === "ECMAScript") {alert("Вірно!");

// } else {
//     alert("Не знаєте? ECMAScript!");

// }
//Variant 2
//promptName === "ECMAScript" ? alert("Вірно!") : alert("Не знаєте? ECMAScript!");

//Variant 3
// const message =
//   promptName === "ECMAScript" ? "Вірно!" : "Не знаєте? ECMAScript!";
// alert(message);

//2. Напишіть програму, яка отримує від користувача через prompt()
//число (кількість хвилин) і виведе в консоль
//рядок у форматі годин і хвилин, тобто 70 має повернути у консоль "01:10"
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

// String to HH:MM
// const promptString = prompt('Give number of minutes:');
// const hours = String(Math.floor((promptString / 60))).padStart(2, 0);
// const minutes = String(promptString % 60).padStart(2, 0);

// console.log(`${hours}:${minutes}`);

//3. Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Выведите в консоль всех четных чисел от min до max

// const max = 55;
// const min = 10;
// let total = 0;

// for(let i = max; i >= min; i -= 1) {
//     if (i % 2 === 0) {
//     console.log(i);
//     total += i;
//     }
// }
// console.log(total)

//4. Напишіть код, який буде запитувати "Hello, please enter your login!"
//логін за допомогою prompt і логувати результат у консоль браузера

//Якщо нажали клавішу Esc, то вивести у консоль рядок "Authorization has been canceled"
//Якщо користувач вводить щось відмінне від "admin", то вивести рядок "Goodbye!"
//Якщо користувач вводить "admin", то prompt запитує пароль (Please enter your password).

//Пароль перевіряти так:
//Якщо нажали клавішу Esc, то вивести у консоль рядок "Authorization has been canceled"
//Якщо користувач вводить щось відмінне від "adminPassword", то вивести рядок "Goodbye!"
//Якщо користувач вводить "adminPassword", то вивести у консоль рядок "Hello!"

// const login = prompt("Hello, please enter your login!");
// console.log(login);
// switch (login) {
//     case null:
//         console.log("Authorization has been canceled")
//         break;
//     case 'admin':
//         const password = prompt('Please enter your password')
//         switch (password) {
//             case null:
//                 console.log("Authorization has been canceled")
//                 break;
//             case 'adminPassword':
//                 console.log("Hello!")
//                 break;

//             default: console.log("Goodbye!")
//                 break;
//         }

//         break;

//     default: console.log("Goodbye!")
//         break;
// }
//5. При завантаженні сторінки користувачу у prompt пропонується ввести число 'Hello, enter please the number.'.
// Введене число додається до значення змінної total.
//Операція введення числа продовжується до тих пір, поки користувач не натисне кнопку Cancel у prompt.
//Після того, як користувач припинив введення і натиснув кнопку Cancel, показати alert з рядком "The total sum of the entered numbers is [number]."
//Робити перевірку, що користувач ввів саме число, а не інший тип даних не потрібно.
// let total = 0;
// let check = true;

// do {
//   let inputNumber = prompt("Hello, enter please the number.");
//   if (inputNumber === null) {
//     check = !check;
//   } else {
//       total += +inputNumber;//приведение к числу с по. унарного плюс
//       total += Number(inputNumber);
//     console.log(total);
//   }
// } while (check);
// console.log(`The total sum of the entered numbers is ${total}`);


//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt і викликає callback функцію
//greet(name) - це коллбек, яка приймає ім'я і логує в консолі рядок "Hi, <name>"
//Реалізуй перевірку, що prompt не пустий

// function letMeSeeYourName(callback) {
// const name = prompt("What is your name?");
// callback(name);
// }

// function greet(name) {
//     if(!name) {
        
//         return
//     }
//     console.log(`Hi, ${name}`);
// }

// letMeSeeYourName(greet);

// 6. Напишіть функцію each(array, callback), яка
//першим параметром приймає масив, а другим - функцію,
//яка застосується до кожного елемента масива.
//Функція each має повернути новий масив, елементами
//якого будуть результати виклику callback.
//callback функція має множити елементи на 2

// function each(array, callback) {
// return array.map(x => callback(x))
// };

// function multiply(x) {
//    return x*2
// };

// console.log(each([2, 4, 6], multiply));

// 7. Напишите функцию makeCounter, которая возвращает другую
//функцию, которая считает и логирует количество своих вызовов

// 8. Напишите функцию savePassword(password) которая принимает
//пароль и возвращает внутреннюю функцию, которая принимает
//строку и возвращает буль true, если строка совпадает с сохраненным
//паролем и false - если не совпадает

// 9. Напишите функцию для хранения скидки.Функция возвращает
//другую функцию, которая принимает сумму покупки
//и возвращает финальную сумму с сохраненной скидкой.

// 10. Напиши функцию конструктор User для создания пользователя со следующими свойствами
//a. userName - имя, строка
//b. age - возраст, число
//c. numbersOfPost - количество постов, число
//d. класс ожидает 1 параметр - объект настроек с одноименными свойствами
//Добавь метод getInfo(), который возвращает строку:
//`Пользователю ${} ${} лет и у него ${} публикаций.`
// User.prototype.getInfo = function () {
//     console.log(
//         `Пользователю ${this.username} ${this.age} лет и у него ${this.numbersOfPost} публикаций.`
//     )
// }


// 11. Напиши функцию конструктор Storage который создаёт объекты
//для управления складом товаров.
//При вызове будет получать один агрумент - начальный массив товаров,
//и записывать его в свойство items.
//Добавь методы класса:
//getItems() - возвращайте массив товаров
//addItems(item) - получает новый товар и добавляет его к текущим
//removeItem(item) - плучает товар и, если он есть, удаляет его из текущих
