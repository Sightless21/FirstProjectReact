//how to access array
var numbers = [1, 2, 3, 4, 5, 6, 7];
console.log("access array :");
console.log(numbers[4]); // 5
console.log("access array with loop :");
var names = ['Oat', 'Pat', 'Ai',];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1);
}
//push : add value in last of array ****
console.log("'push' add value :");
var fruit1 = ['Apple', 'Banana'];
var newvalue = fruit1.push('Orange');
console.log(fruit1); // ['Apple','Banana','Orange']
//pop : remove value at last of array
console.log("'pop' add value :");
var fruit2 = ['Apple', 'Banana', 'Orange'];
var removevalue = fruit2.pop();
console.log(fruit2); // ['Apple','Banana']
