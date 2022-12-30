const anotherFunction = ()=>{
    // sintaxis de las promesas
    return new Promise((resolve, reject)=>{
        if (true){
            resolve('Hey!!');
        }else {
            reject('whoooooops!');
        }
    }) 
}

anotherFunction()
    .then(response => console.log(response))//.then() es un metodo de la promesa que retorna anotherFunction y recibe parametros, en este caso un callback.
    .catch(err => console.log(err));//.catch() es un metodo de la promesa que nos retorna un error. 