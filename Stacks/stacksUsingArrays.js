class Stack {
    #arr;
    constructor() {
        this.#arr = [];
    }

    push(x) {
        this.#arr.push(x);
    }

    pop() {
        this.#arr.pop();
    }

    top() {
        return this.#arr[this.#arr.length - 1];
    }
}

let st = new Stack();
st.push(3);
st.push(2);
st.push(1);
console.log(st.top());
st.pop();
console.log(st.top());

console.log(st.arr[0]);