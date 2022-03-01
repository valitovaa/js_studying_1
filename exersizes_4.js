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


