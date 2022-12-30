//Uso de rest y spred con objetos.
const user = {
    username: 'Martín',
    age: 24,
    country: 'CO'
}
const {username, ...values} = user;

console.log(username);
console.log(values);