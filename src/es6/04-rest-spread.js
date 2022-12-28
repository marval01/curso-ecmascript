// arrays destructuring

let fruits = ['Apple','Banana'];
let [a, b] = fruits;

console.log(a, b);

//object destructuring

let user = {
    username: 'Martín',
    age: 24
}
let {username, age} = user;

console.log(username, age);

//spred operator ...

let person = {
    name: 'Martín',
    age: 23
}
let country = 'MX';

let data = {...person, country}

console.log(data);

// rest 

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1,1,2,3,4,5);





















