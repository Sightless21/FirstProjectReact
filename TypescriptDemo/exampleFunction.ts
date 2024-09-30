interface Person{
    name: string;
    age: number;
}

// creating an array of Person object
const people: Person[] = [
    {name: "John Doe", age: 30},
    {name: "Mary Sue", age: 23},
    {name: "Miguel Jose", age: 42}
]

// function to filter people who are at least 30 years old
function filterAdults(persons: Person[]): Person[] { // return as an array of Person too

    return persons.filter(person => person.age >= 30);
}

const adults = filterAdults(people);
console.log(adults);