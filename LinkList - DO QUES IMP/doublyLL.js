class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
        this.prev = null;
    }
}


class DLL {
    constructor() {
        this.head = null;
    }

    addAtHead(data) {
        if (this.head == null) {
            let newNode = new Node(data);
            this.head = newNode;
            return;
        }

        let newNode = new Node(data);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    removeAtHead() {
        if (this.head == null) return;
        let temp = this.head.next;
        temp.prev = null;
        this.head.next = null;
        this.head = temp;
    }

    addAtTail(data) {
        let newNode = new Node(data);
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = newNode;
        newNode.prev = temp;
        newNode.next = null;
    }

    removeAtTail() {
        if (this.head == null) return;
        if (this.head.next == null) {
            this.removeAtHead();
            return;
        }
        let temp = this.head;
        while (temp.next.next != null) {
            temp = temp.next;
        }
        temp.next.prev = null;
        temp.next = null;
    }


    display() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.prev);
            temp = temp.next;
        }

    }
}


const ll = new DLL();

ll.addAtHead(5);
ll.addAtTail(7);
ll.addAtTail(4);
ll.addAtTail(10);
ll.display();