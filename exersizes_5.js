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

2) ваш собственный цикл

function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
        body(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);

3) every

function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}
