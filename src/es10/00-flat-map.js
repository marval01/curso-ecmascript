//.flat() nos devuelve una matris de cualquier submatris(arreglos).
const array = [1,2,3,4,6,[1,3,5,6,[1,2,4]]];
console.log(array.flat(3));

//.flatmap() es el primero que mapea cada uno de los elementos usados basados en una funcion de mapeo y luego aplana el resultado.

const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v,v * 2]));