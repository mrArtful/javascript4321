const tester = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num = 10;


const people = [
    {
        name: 'Jack',
        surname: 'Smith',
        age: 25
    },
    {
        name: 'Sarah',
        surname: 'Gold',
        age: 20
    },
    {
        name: 'Mary',
        surname: 'Watson',
        age: 30
    },
]

// people.forEach(person => {
//     console.log(`Hello ${person.name} ${person.surname}. You are ${person.age} years old.`);
// })

const myCar = {
    make: 'Honda',
    model: 'Civic',
    popular: true,
    info: {
        color: 'red',
        mileage: 10000
    }
}

// console.log(Object.keys(myCar));
// console.log(Object.values(myCar));
// console.log(Object.entries(myCar));


Object.entries(myCar).forEach(entry => {
    console.log(`${entry[0]}: ${entry[1]}`);
})