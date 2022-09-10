class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

class Linklist {
    constructor() {
        this.head = null;
    }

    getHead() {
        return this.head;
    }
    
    getVal() {
        console.log(this.head.data)
        return this.head.data;
    }

    addAtHead(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    removeAtHead() {
        if (this.head == null) return;
        let temp = this.head.next;
        this.head.next = null;
        this.head = temp;
    }

    addAtTail(data) {
        if (this.head == null) {
            this.addAtHead(data);
            return;
        }
        let newNode = new Node(data);
        let tail = this.head;
        while (tail.next != null) {
            tail = tail.next
        }
        tail.next = newNode;
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

    display() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    isEmpty() {
        return this.head == null;
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

    getVal() {
        return this.ll.getVal();
    }

    isEmpty() {
        return this.ll.isEmpty();
    }

}

// -----------------------

// 2=> 2/2 => 0




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
    for (let i = 0; i < str.length; i++) {
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


// let str = 'ababc';
// firstNonRepeating(str);


// -------------------------------------------

/**
 *          Reverse the first K elements from the  Queue
 * 
 */

function reverseKthInQueue(qu, k) {
    let arr = [];
    let qu1 = new queue();
    let n = 1;
    let temp = qu;
    while (!qu.isEmpty()) {
        qu1.enque(qu.getFront());
        qu.dequeue();
        n++;
    }
    qu = qu1;
    for (let i = 0; i < k; i++) {
        arr.push(qu.getFront());
        qu.dequeue();
    }
    for (let i = 0; i < k; i++) {
        qu.enque(arr[arr.length - 1]);
        arr.pop();
    }
    for (let i = 0; i < n - k; i++) {
        let temp = qu.getFront();
        qu.dequeue();
        qu.enque(temp);
    }
    return qu;

}



let qu = new queue();
qu.enque(5)
qu.enque(4)
qu.enque(3)
qu.enque(2)
qu.enque(1)

let rev = reverseKthInQueue(qu, 2);
while (!rev.isEmpty()) {
    console.log(rev.getVal());
    rev.dequeue();
}

// ======================================
/**
 *      Gas Station Question
 *  https://leetcode.com/problems/gas-station/
 * 
 *      See the github of 27AUG
 * 
 * 
 */