/**
 *              BALANCED PARANTHESIS
 * 
 */

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
}


function balanced(str) {
    let st = new Stack();
    for (let i = 0; i < str.length; i++) {
               
        if (str[i] == '(' || str[i] == '{' || str[i] == '[') {
            st.push(str[i]);
        }

        else {
            if (st.isEmpty()) return !st.isEmpty();

            if (st.top() == '(' && str[i] == ')' || st.top() == '{' && str[i] == '}' || st.top() == '[' && str[i] == ']') st.pop();

            else return st.isEmpty();

        }
    }
    return st.isEmpty();
}

let str = "[]"
console.log(balanced(str));