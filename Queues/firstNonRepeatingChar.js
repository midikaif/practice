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

/**
 *          a a b b a b c
 *   a
 *      -1
 *          b   
 *              -1
 * 
 */

 function firstNonRepeating(str) {
    let qu = new queue();
    let map = {}
    for (let i = 0; i < str.length; i++){
        const currChar = str[i];
        if (!map[currChar]) {
            map[currChar] = 1;
            qu.enque(currChar);
        }
        else {
            map[currChar]++;
        }
        while (map[qu.getFront()] > 1) {
            qu.dequeue(currChar);
        }
        if (qu.getFront() != undefined) {
            console.log(qu.getFront());
        }
        else {
            console.log('-1');
        }
    }
}


let str = 'ababc';
firstNonRepeating(str);