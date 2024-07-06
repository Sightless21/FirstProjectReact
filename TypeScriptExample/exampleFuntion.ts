interface Person{
    name:string;
    age:number;
}
//create aaray of Person object
const people: Person[] = [
    {name:'John Lee',age : 30 },
    {name:'Marry Burner',age : 25 },
    {name:'Harry Kill',age : 35 }
]

function filterAdults(persons:Person[]):Person[]{
    return persons.filter(person => person.age >= 30);

}

const adults = filterAdults(people);
console.log(adults);