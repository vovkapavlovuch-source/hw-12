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

