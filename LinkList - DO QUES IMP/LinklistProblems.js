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
}

/**
 * 
 * Giver a sorted array linklist you have to remove duplicate elements from it.
 * Input -> head: [1,2,2,3,3,3,4]
 * Output -> [1,2,3,4]
 */

function removeDuplicate(ll) {
    let temp = ll.getHead(), dup;
    console.log(temp.next.data);
    while (temp != null) {
        dup = temp.data;
        console.log(temp.next.next.data);
        if (dup == temp.next.data) {
            temp.next = temp.next.next;
        }
        else
            temp = temp.next;
    }
}


/**
 * 
 *                  Merge Two sorted list
 * 
 */


function mergeList(ll1, ll2) {
    let temp1 = ll1.getHead();
    let temp2 = ll2.getHead();
    let ll3 = new Linklist()
    while (temp1 != null && temp2 != null) {
        // console.log(temp1.data, temp2.data);
        if (temp1.data >= temp2.data) {
            let temp = temp2.next;
            temp2.next = temp1;

            ll3.addAtTail(temp2.data);
            temp2 = temp2.next;
        }
        else {
            ll3.addAtTail(temp1.data);
            temp1 = temp1.next;
        }

    }

    while (temp1 != null) {
        ll3.addAtTail(temp1.data);
        temp1 = temp1.next;
    }

    while (temp2 != null) {
        ll3.addAtTail(temp2.data);
        temp2 = temp2.next;
    }


    ll3.display();

}


// =========================================================================


function mergeList(ll1, ll2) {
    let temp1 = ll1.getHead();
    let temp2 = ll2.getHead();
    while (temp1 != null && temp2 != null) {
        if (temp1.data >= temp2.data) {
            let temp = temp2.next;
            temp2.next = temp1;
        }
        else {
            ll3.addAtTail(temp1.data);
            temp1 = temp1.next;
        }

    }

    while (temp1 != null) {
        ll3.addAtTail(temp1.data);
        temp1 = temp1.next;
    }

    while (temp2 != null) {
        ll3.addAtTail(temp2.data);
        temp2 = temp2.next;
    }


    ll3.display();

}







/**
 * 
 *                  Swap the element the nth position from both sides
 * 
 *              We will use two pointer, when first will point the nth node, we will store the node, and second will point to the head and from there we will increase both pointers one by one untill the first one points to the last node. 
 *              after this we will swap the value of that we stored earlier and the second node;
 * 
 * ------------
 * 
 *              If we dont want to change the value and we want to change the node then first pointer reach the nth position then we will store prev node in prev. and after iterating the two pointers the-----> see the 19th august github file of sanket;
 * 
 * 
 */

function findMid(head) {
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}


/**
 * 
 * 
 * 
 *                          ROTATE THE LIST
 * 
 * 
 * 
 */

function rotatelist() {
    
}


/**
 * 
 * 
 * 
 *                          merge alternate position
 * 
 * 
 * 
 */



let ll = new Linklist();
ll.addAtHead(0);
ll.addAtTail(3)
ll.addAtTail(6)

// ll.display();
// removeDuplicate(ll)



let ll2 = new Linklist();
ll2.addAtHead(1)
ll2.addAtTail(3)
ll2.addAtTail(5)

// ll2.display();

mergeList(ll, ll2);