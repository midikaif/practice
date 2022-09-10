class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

class Linklist {
    constructor() {
        this.head = null;
        this.start = null;
        this.flag = null;
    }

    get() {
        return this.head;
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

    addAt(p, data) {
        if (this.head == null) {
            this.addAtHead(data)
            return;
        }
        let newNode = new Node(data);
        let temp = this.head;
        for (let i = 0; i < p && temp.next != null; i++) {
            temp = temp.next;
        }
        newNode.next = temp.next;
        temp.next = newNode;
    }

    removeAt(p) {
        if (this.head == null) return;
        if (this.head.next == null || p == 0) {
            this.removeAtHead();
            return;
        }
        let temp = this.head;
        for (let i = 0; i < p - 1 && temp.next.next != null; i++) {
            temp = temp.next;
        }
        let deletedNode = temp.next;
        temp.next = deletedNode.next;
        deletedNode.next = null;
    }

    reversePointerIteratibly() {
        /**
         * Time: O(n)
         * Space: O(1)
         */
        let prev = null;
        let curr = this.head;
        while (curr != null) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        this.head = prev;
    }

    pointerRecursion(curr) {
        /**
         * Time: O(n)
         * Space: O(n) // due to call stack space, call stack will have n entries when we reach tail
         */
        if (curr.next == null) {
            // if node's next is null it is the tail node
            return curr;
        }
        let tail = this.pointerRecursion(curr.next); // recursively assume it reverses
        curr.next.next = curr; //self work
        curr.next = null; //self work
        return tail;
    }

    reversePointerRecursively() {
        let tail = this.pointerRecursion(this.head);
        this.head = tail;
    }

    reverseValueIteratibly() {
        /**
         * Time: O(n^2)
         * Space: O(1)
         */

        let n = 0;
        let start = this.head;
        let temp = this.head;
        while (temp != null) {
            temp = temp.next;
            n++;
        }

        for (let i = 0; i < n / 2; i++) {
            temp = this.head;
            for (let j = 0; j < n - i - 1; j++) {
                temp = temp.next;
            }
            let v = temp.data;
            temp.data = start.data;
            start.data = v;
            start = start.next;
        }
    }

    g(curr) {
        /**
         * Time: O(n)
         * Space: O(n)
         */
        if (curr == null) {
            return;
        }
        this.g(curr.next);
        if (this.start == curr || curr.next == this.start) {
            this.flag = false;
        }
        if (this.flag == true) {
            let temp = this.start.data;
            this.start.data = curr.data;
            curr.data = temp;
            this.start = this.start.next;
        }
    }
    reverseLLValueRecursive() {
        this.start = this.head;
        this.flag = true;
        this.g(this.head);
    }

    display() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    intersection(LL) {
        let temp = this.head;
        let temp1 = LL.get();
        while (temp.next != null) {
            if (temp.data == temp1.data) {
                return temp.data;
            }
            temp = temp.next;
            temp1 = temp1.next;
        }
        return null;
    }

    foldll(curr) {
        if (curr == null) {
            return;
        }
        this.foldll(curr.next);
        if (this.flag) {
            return;
        }
        if (curr == this.start || this.start.next == curr) {
            curr.next = null;
            this.flag = true;
            return;
        }
        let temp = this.start.next;
        this.start.next = curr;
        curr.next = temp;
        this.start = temp;
    }

    fold() {
        this.start = this.head;
        this.foldll(this.head);
    }


}

// function fold(ll) {
//     let tail = foldll(ll.this.head)
// }


let ll = new Linklist();
// ll.addAtHead(5)
ll.addAtHead(4)
ll.addAtHead(3)
ll.addAtHead(2)
ll.addAtHead(1)
ll.addAtHead(0)
ll.display();
console.log('-------------------------------');
ll.fold();
ll.display();