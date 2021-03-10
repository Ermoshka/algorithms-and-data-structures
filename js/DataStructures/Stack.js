const { Node } = require("./LinkedList")

// using linked list principles

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    peek() {
        return this.top
    }

    push(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.top = newNode
            this.bottom = newNode
        } else {
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }
        this.length += 1
        return this
    }

    pop() {
        if (!this.top) {
            return null
        }
        if (this.top === this.bottom) {
            this.bottom = null
        }
        // const holdingPointer = this.top
        this.top = this.top.next
        this.length -= 1
        return this
    }
}

const myStack = new Stack()
myStack.push('googogo')
myStack.push('apple')
myStack.push('justice')
console.log(myStack)
myStack.pop()
console.log(myStack)
