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


function reverseQue(qu) {
    let stack = [];
    while (qu.getFront()) {
        let temp = qu.getFront();
        stack.push(temp);
        qu.dequeue();
    }
    while (stack.length > 0) {
        qu.enque(stack[stack.length - 1]);
        stack.pop();
    }
}





let qu = new queue();
qu.enque(3);
qu.enque(6);
qu.enque(5);
// qu.dequeue();
qu.enque(1);
console.log(qu.getFront());
// qu.dequeue();
reverseQue(qu);
console.log(qu.getFront());