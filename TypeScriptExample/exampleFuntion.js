//create aaray of Person object
var people = [
    { name: 'John Lee', age: 30 },
    { name: 'Marry Burner', age: 25 },
    { name: 'Harry Kill', age: 35 }
];
function filterAdults(persons) {
    return persons.filter(function (person) { return person.age >= 30; });
}
var adults = filterAdults(people);
console.log(adults);
