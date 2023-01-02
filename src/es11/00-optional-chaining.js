//Nosotros pdemos tener un objeto que dentro puede tener la representacion de llave y valor y ese llave valor puede ser tambien un objeto, y cuando queremos acceder a ese elemento podemos tener errores que pueden romper toda nuestra aplicacion.
//Para evitar esto usamos el signo de interrogacion para preguntar si existe lo que estamos llamando.
const users = {
    martín: {
        country: 'PE'
    },
    ana: {
        country: 'CO'
    }
}
console.log(users.martín.country);
console.log(users?.bebeloper?.country);