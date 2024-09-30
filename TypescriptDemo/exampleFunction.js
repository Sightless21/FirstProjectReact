// creating an array of Person object
var people = [
    { name: "John Doe", age: 30 },
    { name: "Mary Sue", age: 23 },
    { name: "Miguel Jose", age: 42 }
];
// function to filter people who are at least 30 years old
function filterAdults(persons) {
    return persons.filter(function (person) { return person.age >= 30; });
}
var adults = filterAdults(people);
console.log(adults);
