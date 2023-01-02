//object.entries, ahora ademas de convertir un objeto en un array de arrays, vamos tambien a poder hacer un cambio inverso, pasar de un array de arrays a un objeto.

const entries = new Map([['name','Martín'],['age',34]]);
console.log(entries);
console.log(Object.fromEntries(entries));
