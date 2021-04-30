public class BST {
    class Node {
        int data;
        Node left;
        Node right;

        Node(int data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    Node root;

    BST() {
        this.root = null;
    }

    BST(int data) {
    }

    // insert
    public void insert(int data) {
        root = insert(root, data);
    }

    public Node insert(Node node, int data) {
        if (node == null) {
            return new Node(data);
        }

        Node curr = node;
        if (data < curr.data) {
            curr.left = insert(curr.left, data);
        } else {
            curr.right = insert(curr.right, data);
        }
        return curr;
    }

    // remove
    void remove(int data) {
        root = remove(root, data);
    }

    // Node remove(Node node, int data) {
    // if (node == null)
    // return node;

    // if (data < node.data) {
    // remove(node.left, data);
    // } else if (data > node.data) {
    // remove(node.right, data);
    // } else {
    // // leaf
    // if (node.left == null) {
    // return node.right;
    // }
    // if (node.right == null) {
    // return node.left;
    // }
    // // two children

    // }

    // }

    // min

    // search
    boolean search(int data) {
        return search(root, data);
    }

    boolean search(Node node, int data) {
        if (node == null)
            return false;

        if (data < node.data) {
            search(node.left, data);
        } else if (data > node.data) {
            search(node.right, data);
        }
        return true;
    }

    void inOrder() {
        inOrder(root);
    }

    void inOrder(Node node) {
        if (node == null) {
            return;
        }

        inOrder(node.left);
        System.out.println(" " + node.data);
        inOrder(node.right);

    }

    public static void main(String[] args) {
        // create a BST object
        BST bst = new BST();
        /*
         * BST tree example 45 / \ 10 90 / \ / 7 12 50
         */
        // insert data into BST
        bst.insert(45);
        bst.insert(10);
        bst.insert(7);
        bst.insert(12);
        bst.insert(90);
        bst.insert(50);
        // print the BST
        System.out.println("The BST Created with input data(Left-root-right):");
        bst.inOrder();

        // // delete leaf node
        // System.out.println("\nThe BST after Delete 12(leaf node):");
        // bst.deleteKey(12);
        // bst.inOrder();
        // delete the node with one child
        // System.out.println("\nThe BST after Delete 90 (node with 1 child):");
        // bst.deleteKey(90);
        // bst.inOrder();

        // //delete node with two children
        // System.out.println("\nThe BST after Delete 45 (Node with two children):");
        // bst.deleteKey(45);
        // bst.inOrder();
        // search a key in the BST
        boolean ret_val = bst.search(50);
        System.out.println("\nKey 50 found in BST:" + ret_val);
        ret_val = bst.search(12);
        System.out.println("\nKey 12 found in BST:" + ret_val);
    }
}