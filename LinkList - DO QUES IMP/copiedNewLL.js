class Node{
    constructor(d) {
        this.data = d;
        this.next = null;
        this.random = null;
    }
}

class Linklist{
    constructor() {
        this.head = null;
    }

    addAtHead(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        newNode.random = this.head.next;
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

}
 
let ll = new Linklist();
ll.addAtHead()
