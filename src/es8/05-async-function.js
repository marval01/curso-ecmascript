//declaramos nuestra promesa
const fnAsync = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
            ? setTimeout(()=> resolve('AsynC!!'), 2000)
            :reject(new Error('Error!'));
    })
}

//sintaxis de Async y Await
const anotherFn = async ()=>{
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!!');
}

console.log('Before');
anotherFn();
console.log('After')