let a = [1, 2, 3];
function f(a){
    let b = [];
    for(let i = 0; i<= a.lenght; i++)
        b.push(i);
    
    return(b);
}
console.log(a);
console.log(f(a))
const numbers = [1, 2, 3, 5];
const array = Array.from(numbers, n => n * n);
console.log(array); 
let h = [1, 2,3, 4, ]
h.pop()
h.push(9)
h.shift()
h.unshift(3)
console.log(h)
console.log(h.slice(2,4))
console.log(h.reverse())
let removed = h.splice(1,1)
console.log(h)
console.log(removed)
let s = h.splice(0,1, "John")
console.log(h)
let g = h.splice(0,0, "J", "KKK")
console.log(h)
let r = h.splice(-1, 1)
console.log(h)
let kg = h.slice()
console.log(kg.concat(3,4,2))
console.log(kg.includes(2))
let arr = [
    { name: "gg", age: 2},
    { name:"oleg", age: 9},
    { name: "honor", age: 15},
    { name: "honr", age: 45},
    
    ]
let donor = arr.find(function(item, index, array){
    return item.age=45
})
console.log(donor)
let ind = arr.find(item => item.name === "oleg")
let ind1 = arr.findIndex(item => item.name === "oleg")
console.log(ind)
console.log(ind1)
let filter = arr.filter(function(item, index, array){
    return item.age>9
})
console.log(filter)

let i = ["a","z", "b", "h"]
console.log(i.sort())
let r = [1,5,6,22]
console.log(r.sort())
function sortir(a,b){
    if(a>b) return -1;
    if(a==b) return 0;
    if(b>a) return 1;
}
console.log(r.sort(sortir))
console.log(r.sort((a, b) => a - b))
let arr= ["abby", 'betty',"cristine", "dick"]
let result = arr.map(function(item, index, array){
    return(item[0])
})
console.log(result)

let a = [1, 2, 3, ]
console.log(a.length)
for(i in a){
    console.log(i + " its " + a[i])
}

a.forEach((item,index,array) => {
    console.log(`${item} is in ${index} position in ${array}  `)
})
let value = a.reduce(function(previousValue, item, index, array){
    return item + previousValue;
}, 0)
console.log(value)
