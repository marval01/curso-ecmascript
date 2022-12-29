//Declaracion de las clases.
class User{

}

// //Instancia de una clase.
// const newUser = new User();

class user{
    //Declaracion de metodos.
    greeting(){
        return 'Hello';
    }
}

const martin = new user();
console.log(Martin.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

//constructor
class user{
    //constructor
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting(){
        return 'Hello';
    }
}

const david = new user();

//.this()

class user {
    constructor(name){
        this.name = name;//this: palabra reservada que esta determinado por como se invoca.
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting());

//setters and getters

class user {
    constructor(name, age){
        this.name = name;
        this. age = age;
    }
    //metodos 
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}