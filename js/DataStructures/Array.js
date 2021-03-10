// Static Arrays

// lookup O(1)
// push O(1)
// or append O(1) for Dynamic
// insert O(n)
// delete O(n)

class MyArray {

    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(idx) {
        return this.data[idx];
    }

    push(item) {
        this.data[this.length] = item;
        this.length += 1;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length -= 1;
        return lastItem;
    }

    delete(idx) {
        const item = this.data[idx];
        this.shiftItems(idx);
    }

    shiftItems(idx) {
        for (let i = idx; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length -= 1;
    }

}

let args = new MyArray();
args.push("helloo");
args.push("goodbye");
console.log(args.pop())
