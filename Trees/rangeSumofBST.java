package Trees;

public class rangeSumofBST {
    /**
     * Definition for a binary tree node. public class TreeNode { int val; TreeNode
     * left; TreeNode right; TreeNode(int x) { val = x; } time complexity O(N) space
     * O(H)
     */
    public int rangeSumBST(TreeNode root, int L, int R) {
        if (root == null)
            return 0;
        int total = 0;

        if (root.val >= L && root.val <= R) {
            total += root.val;
        }

        total += rangeSumBST(root.left, L, R);
        total += rangeSumBST(root.right, L, R);

        return total;

    }
}
