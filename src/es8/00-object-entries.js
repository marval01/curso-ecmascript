//El metodo .entries() nos devuelve una matriz de pares propios de la propiedad enumerable.
//Nos sirve para convertir un objeto en un arreglo siguiendo la estructura que se tiene de nuestro objeto.

const countries = {
    MX: 'Mexico',
    CO: 'Colombia',
    CL: 'Chile',
    PE: 'Perú'
}

console.log(Object.entries(countries));
