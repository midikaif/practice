class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

class Linklist {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addAtHead(data) {
        let newNode = new Node(data);
        if (this.head == null) this.tail = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }

    removeAtHead() {
        if (this.head == null) return;
        let temp = this.head.next;
        this.head.next = null;
        this.head = temp;
        if (this.head == null) this.tail = null;
    }

    addAtTail(data) {
        if (this.head == null) {
            this.addAtHead(data);
            return;
        }
        let newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
    }

    removeAtTail() {
        if (this.head == null) return;
        if (this.head.next == null) {
            this.head = null;
            return;
        }
        let tail = this.head;
        while (tail.next.next != null) {
            tail = tail.next
        }
        tail.next = null;
    }

    getHead() {
        if (this.head == null) return undefined;
        return this.head.data;
    }
}

class queue {
    constructor() {
        this.ll = new Linklist();
    }

    enque(x) {
        this.ll.addAtTail(x);
    }

    dequeue() {
        this.ll.removeAtHead();
    }

    getFront() {
        return this.ll.getHead();
    }

}

//[ 1, 3, -1, -3, 5, 3, 6, 7]
function slidingWindowMax(arr, k) {
    let output = [];
    for (let i = 0; i <= arr.length - k; i++) {
        let greater = -Infinity;
        let a = i, b = k + i;
        while (b > a) {
            if (arr[a] > greater) {
                greater = arr[a];
            }
            a++;
        }
        output.push(greater);
    }
    return output;
}

let a = slidingWindowMax([1, 3, -1, -3, 5, 3, 6, 7], 3)
console.log(a);