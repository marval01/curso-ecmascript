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
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));//.finally(), es un metodo que nos permite mostrar y tener una funciona anonima, para hacer algo cuando la promesa termine.