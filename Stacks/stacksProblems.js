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

    get() {
        if (this.head != null)
            return this.head.data;
        return undefined;
    }

    isEmpty() {
        return this.head == null;
    }

    display() {
        if(this.head == null) console.log(undefined);
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}


class Stack {
    constructor() {
        this.ll = new Linklist();
    }

    push(x) {
        this.ll.addAtHead(x);
    }

    pop() {
        this.ll.removeAtHead();
    }

    top() {
        return this.ll.get();
    }

    isEmpty() {
        return this.ll.isEmpty();
    }

    display() {
        this.ll.display();
    }
}

function pushInBottom(st, elem) {
    let temp = new Stack();
    while (st.top() != null) {
        temp.push(st.pop());

    }
    st.push(elem);
    while (st.top() != null) {
        temp.push(st.pop());

    }
}


let st1 = new Stack();

