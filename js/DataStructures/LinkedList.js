// prepend O(1)
// append O(1)
// lookup O(n)
// insert O(n)
// delete O(n)


class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {

    constructor(value) {
        this.head = {
            value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length += 1;
        return this
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head
        this.head = newNode;
        this.length += 1;
        return this
    }

    printList() {
        const array = []
        let currentNode = this.head
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }

    traverseToIndex(index) {
        let counter = 0
        let currentNode = this.head
        while (counter !== index) {
            currentNode = currentNode.next
            counter += 1
        }
        return currentNode
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value)
        }
        const newNode = new Node(value)
        const leader = this.traverseToIndex(index - 1)
        const holdingPointer = leader.next
        leader.next = newNode
        newNode.next = holdingPointer
        this.length += 1
        return this
    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1)
        const unwantedNode = leader.next
        leader.next = unwantedNode.next
        this.length -= 1
        return this
    }

    // Idk how it works too

    reverse() {
        if (!this.head.next) {
            return this.head
        }
        let first = this.head
        this.tail = this.head
        let second = first.next
        while (second) {
            const temp = second.next
            second.next = first
            first = second
            second = temp
        }
        this.head.next = null
        this.head = first
        return this
    }

}

class DoublyLinkedList {

    constructor(value) {
        this.head = {
            value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = {
            value,
            next: null,
            prev: null
        }
        newNode.prev = this.tail
        this.tail.next = newNode;
        this.tail = newNode;
        this.length += 1;
        return this
    }

    prepend(value) {
        const newNode = {
            value,
            next: null,
            prev: null
        };
        newNode.next = this.head
        this.head.prev = newNode;
        this.head = newNode;
        this.length += 1;
        return this
    }

    printList() {
        const array = []
        let currentNode = this.head
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }

    traverseToIndex(index) {
        let counter = 0
        let currentNode = this.head
        while (counter !== index) {
            currentNode = currentNode.next
            counter += 1
        }
        return currentNode
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value)
        }
        const newNode = {
            value,
            next: null,
            prev: null
        }
        const leader = this.traverseToIndex(index - 1)
        const follower = leader.next
        leader.next = newNode
        newNode.prev = leader
        newNode.next = follower
        follower.prev = newNode
        this.length += 1
        return this.printList()
    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1)
        const unwantedNode = leader.next
        leader.next = unwantedNode.next
        this.length -= 1
        return this
    }

}

// const myLinkedList = new LinkedList(10)
// myLinkedList.append(3)
// myLinkedList.prepend(2)
// myLinkedList.insert(1, 7)
// console.log(myLinkedList.printList())
// myLinkedList.remove(2)
// console.log(myLinkedList.printList())
// console.log(myLinkedList.reverse())

// module.exports.LinkedList = LinkedList;
module.exports.Node = Node;