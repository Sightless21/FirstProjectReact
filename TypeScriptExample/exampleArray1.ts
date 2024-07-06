//how to access array
let numbers: number[] = [1,2,3,4,5,6,7];
console.log("access array :")
console.log(numbers[4]); // 5

console.log("access array with loop :")
let names:string[] = ['Oat','Pat','Ai',];
for(let name of names ){
    console.log(name);
}

//push : add value in last of array ****
console.log("'push' add value :")
let fruit1: string[] = ['Apple','Banana']
let newvalue =fruit1.push('Orange');
console.log(fruit1); // ['Apple','Banana','Orange']

//pop : remove value at last of array
console.log("'pop' add value :")
let fruit2: string[] = ['Apple','Banana','Orange'];
let removevalue = fruit2.pop();
console.log(fruit2); // ['Apple','Banana']
