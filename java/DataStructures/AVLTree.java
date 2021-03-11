public class AVLTree {

    private Node root = null;

    public class Node {

        int key;
        int height;
        String value;
        Node left;
        Node right;

        Node(int key, String value){
            this.height = 0;
            this.left = null;
            this.right = null;
            this.key = key;
            this.value = value;
        }
    }

    int height(Node n) {
        if(n == null) {
            return -1;
        }
        return n.height;
    }

    int max(int a, int b) {
        return (a > b) ? a : b;
    }

    Node rightRotate(Node y) {
        Node x = y.left;
        Node T2 = x.right;
        x.right = y;
        y.left = T2;
        y.height = max(height(y.left), height(y.right)) + 1;
        x.height = max(height(x.left), height(x.right)) + 1;
        return x;
    }

    Node leftRotate(Node x) {
        Node y = x.right;
        Node T2 = y.left;
        y.left = x;
        x.right = T2;
        x.height = max(height(x.left), height(x.right)) + 1;
        y.height = max(height(y.left), height(y.right)) + 1;
        return y;
    }

    int getBalance(Node n) {
        if(n == null) {
            return 0;
        }
        return height(n.left) - height(n.right);
    }

    void insert(int key, String value) {
        this.root = _insert(key, value, this.root);
    }

    Node _insert(int key, String value, Node node) {
        if(node == null) {
            return new Node(key, value);
        }
        if(key < node.key) {
            node.left = _insert(key, value, node.left);
        } else if(key > node.key) {
            node.right = _insert(key, value, node.right);
        } else {
            node.value = value;
            return node;
        }
        node.height = max(height(node.left), height(node.right)) + 1;
        return _rebalance(node, key);
    }

    Node _rebalance(Node node, int key) {
        int balance = getBalance(node);
        if(balance > 1 && key < node.left.key) {
            return rightRotate(node);
        }
        if(balance < -1 && key > node.right.key) {
            return leftRotate(node);
        }
        if(balance > 1 && key > node.left.key) {
            node.left = leftRotate(node.left);
            return rightRotate(node);
        }
        if(balance < -1 && key < node.right.key) {
            node.right = rightRotate(node.right);
            return leftRotate(node);
        }
        return node;
    }

    public void printInOrder() {
        _printInOrder(this.root);
    }

    private void _printInOrder(Node node) {
        if(node == null) return;
        _printInOrder(node.left);
        System.out.println(String.format("{key: %s, value: %s, height: %s}", node.key, node.value, node.height));
        _printInOrder(node.right);
    }

    public static void main(String[] args) {
//        testLeftRotation();
//        testRightRotation();
//        testRightLeftRotation();
        testLeftRightRotation();
    }

    public static void testLeftRightRotation() {
        AVLTree myAvl = new AVLTree();
        myAvl.insert(3, "three");
        myAvl.insert(1, "one");
        myAvl.insert(2, "two");
        myAvl.printInOrder();
    }

    public static void testRightLeftRotation() {
        AVLTree myAvl = new AVLTree();
        myAvl.insert(1, "one");
        myAvl.insert(3, "three");
        myAvl.insert(2, "two");
        myAvl.printInOrder();
    }

    public static void testRightRotation() {
        AVLTree myAvl = new AVLTree();
        myAvl.insert(3, "three");
        myAvl.insert(2, "two");
        myAvl.insert(1, "one");
        myAvl.printInOrder();
    }

    public static void testLeftRotation() {
        AVLTree myAvl = new AVLTree();
        myAvl.insert(1, "one");
        myAvl.insert(2, "two");
        myAvl.insert(3, "three");
        myAvl.printInOrder();
    }

}
