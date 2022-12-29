// enahced object literals

function newUser(user, age, country){
    return{
        user,
        age,
        country,
        id: uId // valor que no controlamos.
    }
}

console.log(newUser('Martín',24,PE))