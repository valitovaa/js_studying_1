Объекты

//объявление объекта
let oleg = new Object()
let hobby = "hobby"
let Ola = {
    name: "Ola",
    age: 18,
    "best friend": "Oleg",
    [hobby]: true,
}
console.log(Ola[hobby])
console.log(Ola)
console.log(oleg)
console.log(Ola.age)
console.log(Ola["best friend"])

//преимущество[]

let key = "age"
console.log(Ola.key) //dont work
console.log(Ola[key]) //work

let anna = {
    name: "Anna",
    age: 66,
    address: {
        city: "Ufa",
        street: "lesnaya"
    }
}
//console.log(anna)
console.log(anna.address)
console.log(anna.address.city)

//свойство из переменных(крафтим объект)
function makeinfo(name, age){
    return{
        name: name,
        age: age,
    }
}
let user = makeinfo("greg", 34)
console.log(user)

//добавление свойств
let user = {
    name: "Arseny",
    cat: 12
}
user.lol = "lolol"
user.age = 20
user.lover = {
    name: "Dilara",
    age: 19,
}
//удаление
delete user.cat
//изменение
user.age = 21
//copy object (link)
let man = user
man.age = 18
console.log(user)

//дублирование
//Object.assign(куда(object,что(свойство , что(свойство2 ) )

let userInfo = {
    name: "josh",
    age:26
}
let usr = Object.assign({}, userInfo)
usr.age = 18

Object.assign(user, {address:{city:spb, street: home}, sex:man})
console.log(user)
let r = {
    name: 'Ass',
    age: 33,
}
if(r.age){
    console.log(r.age)
}else console.log(0)

let ol = {
    name: " frog",
    age: 8,
    sound: "quak",
    friends: {
        dog: "woof",
        cat: "meow"

    }
}
for(let i in ol){
    //console.log(i)
    //console.log(ol[i])
    //console.log(ol.friends[i])
}
for(let i in ol.friends){
    console.log(i)
   // console.log(ol.friends[i])

}

//methods
let user ={
    name: "ag",
    age: 7,
    address: {
        city: "ufa",
        street: "frog",
    },
    s() {
    console.log(`${this.name}, ${this.age} years old. Address: ${this.address.city}, ${this.address.street}`)
    }
}

user.s()
//функция конструктор (с большой буквы, вызов с помощью new)
function MakeBaby(name){
    this.name = name;
    this.age = 0;
}
console.log(new MakeBaby("gigi"))


