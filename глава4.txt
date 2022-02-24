1)сумма диапозона

  function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}
 console.log(sum(range(1,10,2)))
  
2)массив в обратном порядке

let a = [1, 2, 3, 4,5]
function reverseArray(array){
    let b = []
    for(i in array){
        b.unshift(a[i])
    }
    return(b)
}
console.log(reverseArray(a))
function reverseArrayInPlace(array){
   for(i=0; i<Math.floor(a.length/2); i++){
       b = a[i]
       a[i] = a[a.length-i-1]
       a[a.length-i-1] = b
   } 
   return(a)
}
console.log(reverseArrayInPlace(a))

