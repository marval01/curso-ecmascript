function newUser(name, age, country){
    var name = name || 'Martín';
    var age = age || 23;
    var country = country || 'PE';
    console.log(name,age,country);
}

newUser();
newUser('Alonso', 25, 'CO');


//Ecmascript 
function newAdmin(name='Martín', age=23, country='AR'){
    console.log(name,age,country);
}

newAdmin()
newAdmin('Alonso', 25, 'CO')