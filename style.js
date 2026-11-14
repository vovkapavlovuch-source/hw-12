// 1.Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
    name: "Volodia",
    age: 17,
    hobby: "game",
    premium: true,
};

user.hobby = "skydiving";
user.mood = "happy";
user.premium = false;
for (const keys of Object.keys(user)) {
    console.log(`${keys}: ${user[keys]}`);
}

// 2.Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

const object = {
    name: "Vova",
    age: 18,
    hobby: "game",
    premium: true,
};

const countProps = function (obj) {
    return Object.keys(obj).length;
}
console.log(countProps(object));

// 3.Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const employee = {
    vova: 23,
    ann: 15,
    david: 13,
};
console.log(employee);

const findBestEmployee = function (employees) {
    let maxTasks = 0;
    let bestEmployee = "";
    for (const names in employees) {
        if (employees[names] > maxTasks) {
            maxTasks = employees[names];
            bestEmployee = names;
        }
    }
    return bestEmployee;
}
console.log(findBestEmployee(employee));

// 4.Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const employe = {
    vova: 150000,
    ann: 12000,
    david: 23000,
};

const countTotalSalary = function (employees) {
    let allSalary = 0;
    for (const salary in employees) {
        allSalary += employees[salary];
    }
    return allSalary;
}

console.log(countTotalSalary(employe));

// 5.Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const products = [
    {
        name: 'apple',
        price: 12,
        stars: 5,
    },
    {
        name: 'banana',
        price: 8,
        stars: 4,
    },
    {
        name: 'orange',
        price: 15,
        stars: 5,
    }
];

const getAllPropValues = function (arr, prop) {
    const values = [];

    for (const obj of arr) {
        if (prop in obj) {
            values.push(obj[prop]);
        }
    }
    return values;
};

console.log(getAllPropValues(products, 'price'));
console.log(getAllPropValues(products, 'stars'));
console.log(getAllPropValues(products, 'name'));

// 6.Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.

const cars = [
    { name: 'Mercedes-benz', price: 1300000, quantity: 5 },
    { name: 'BMW', price: 2700000, quantity: 7 },
    { name: 'Audi', price: 400000, quantity: 8 },
    { name: 'Volkswagen', price: 1200000, quantity: 4 },
];

function calculateTotalPrice(allCars, carsName) {
    let totalPrice = 0;

    for (const cars of allCars) {
        if (cars.name === carsName) {
            totalPrice = cars.price * cars.quantity;
            break;
        }
    }

    return totalPrice;
}

console.log(calculateTotalPrice(cars, 'Mercedes-benz'));
console.log(calculateTotalPrice(cars, 'BMW'));
console.log(calculateTotalPrice(cars, 'Audi'));
console.log(calculateTotalPrice(cars, 'Volkswagen'));  