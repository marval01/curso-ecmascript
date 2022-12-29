//sintaxis del generator, se usa una asterisco despues de declarar la funcion.
function* iterate(array){
    for (let value of array){
        //palabra reservada que retorna cada valor segun sea el caso.
        yield value;
    }
}

const it = iterate(["Martín", "Davis","Ana", "Ulises","jennifer"]);
console.log(it.next().value);//.next() metodo que se crea dentro de nuestro generator
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
