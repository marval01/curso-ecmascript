//Metodo .padStart() nos sirve para agregar donde va a iniciar y que queremos agregar, quiere decir que nos entragara una string de la cantidad de caracteres que le indiquemos.
//Metodo .padEnd nos sirve para agregar donde va a finalizar y que queremos agregar.

const string = 'Hello';
console.log(string.padStart(6,'_'));
console.log(string.padEnd(6, '_'))