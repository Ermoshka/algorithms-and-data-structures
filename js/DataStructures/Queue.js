const { Node } = require("./LinkedList")

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    peek() {
        return this.first
    }

    enqueue(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length += 1
        return this
    }

    dequeue() {
        if (!this.first) {
            return null
        }
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.length -= 1
        return this
    }

}

const myQueue = new Queue()
myQueue.enqueue('Joe')
myQueue.enqueue('Matt')
myQueue.enqueue('Steffanie')
console.log(myQueue)
myQueue.dequeue()
console.log(myQueue)