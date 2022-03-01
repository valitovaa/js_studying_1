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

