package Trees;

/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } } O(N), O(1)
 */
class mergeTrees {
    public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {
        if (root1 == null && root2 != null)
            return root2;
        if (root1 != null && root2 == null)
            return root1;
        if (root1 == null && root2 == null)
            return null;

        int value = root1.val + root2.val;
        TreeNode root = new TreeNode(value);
        root.left = mergeTrees(root1.left, root2.left);
        root.right = mergeTrees(root1.right, root2.right);

        return root;
    }

}

    // O(n) O(H)
    public int maxDepth(TreeNode root) {
        if(root == null ) return 0;
        
        return 1+ Math.max(maxDepth(root.left), maxDepth(root.right));
        
    }
