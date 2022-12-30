//El metodo object.values() nos va a devolver un array con los valores correspondientes a las propiedades enumerables de un objeto.

const countries = {
    MX: 'Mexico',
    CO: 'Colombia',
    CL: 'Chile',
    PE: 'Perú'
}
console.log(Object.values(countries));