class Node {
    constructor(value) {
        this.left = null
        this.right = null
        this.value = value
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null
    }

    lookup(value) {
        if (!this.root) {
            return false
        }
        let currentNode = this.root
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            } else if (currentNode.value === value) {
                return currentNode
            }
        }
        return false
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            let currentNode = this.root
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                } else if (value > currentNode.value) {
                    if (!currentNode.right) {
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }

    remove(value) {
        if (!this.root) {
            return false
        }
        let currentNode = this.root
        let parentNode = null
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.right
            } else if (value === currentNode.value) {

                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left
                    } else {
                        currentNode.right.left = currentNode.left
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left
                        }
                    }
                }
            }
        }
    }

}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(20)
tree.insert(17)
tree.insert(19)
tree.insert(50)
tree.insert(32)
console.log(tree)
console.log(tree.lookup(20))