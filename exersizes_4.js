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

3)Список

class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(value) {

            this.head = new LinkedListNode(value, this.head);
            if(this.tail === null){
                this.tail = this.head
            }
            return this

    }

    append(value){
        let r = new LinkedListNode(value, null)
        if (!this.head || !this.tail) {
            this.head = r
            this.tail = r

            return this
        }

        this.tail.next = r
        this.tail = r
        return this
    }


    toString() {
        let str = "[";
        for (let node = this.head; node != null; node = node.next) {
            if (node) {
                str += (str.length <= 1 ? "" : ", ") + node.value;
            }
        }
        return str + "]";
    }


}

function arrayToList(array){
    let list = new LinkedList();
    array.forEach(value => list.append(value))
    return list;
}

function listToArray(list){
    let array = []

    for (let node = list.head; node != null; node = node.next) {
        if (node) {
            array.push(node.value);
        }
    }
    return array;
}

function nth(list, a){
   let array =  listToArray(list)
    return array[a]

}

let list = new LinkedList;
console.log(list.toString());

list.append(0).append(1).prepend(8)
console.log(list.toString())
console.log(listToArray(list))
console.log(nth(list, 1))

4) глубокое сравнение

function isEqual(a,b){
    if(typeof(a) == 'object' && a != null){
        if(typeof  b == 'object' && b != null){
            console.log("object + object")

                let a1 = []
                let a2 = []
                for(let i in a){
                    a1.push(i)
                    a2.push(a[i])
                }
                let b1 = []
                let b2 = []
                for(let i in b){
                    b1.push(i)
                    b2.push(b[i])
                }

                if(a1.length === b1.length){
                    //continue
                    for(i in a1){
                        if(a1[i] === b1[i]){
                            if(a2[i] === b2[i]){
                                return true
                            }
                        }else{
                            return false
                        }
                    }
                }else{
                    return false
                }

        }else{return false}
    }else{
        if(typeof a === typeof b){
            return a===b

        }else{
            return false

        }
    }

}


console.log(isEqual(7,7))
console.log(isEqual(ol, 9))
console.log(isEqual(6, mark))
isEqual(mark, ol)
console.log(isEqual("j","n"))

let s = "sf"
let r = "sf"

console.log(s===r)
let f = {
    tek: 9,
    fgi: 0,
}
let tr = {
    kk: 8,
    hh: 4,
}
let u = {
    tek: 9,
    fgi: 0,
}
console.log(isEqual(f,tr))
console.log(isEqual(f,u))
