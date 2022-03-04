1) свёртка

let mass = [[1,2,3],[8,9],[9,0,4]]
console.log(mass)
function roll(mass){
    let f = []
    for(i in mass){

        for(k in mass[i]){
            f.push(mass[i][k])


        }

    }
    return f;
}

function f(arrays){
    return arrays.reduce((flat, current) => flat.concat(current), []);
}

console.log(roll(mass))
console.log(f(mass))
