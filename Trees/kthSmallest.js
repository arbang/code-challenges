/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    let result = null;
    function _kthSmallest(node) {
        if (!node) return;
        _kthSmallest(node.left);
        k--;
        if (k === 0) {
            result = node.val;
            return;
        }
        _kthSmallest(node.right);
    }
    _kthSmallest(root);
    return result;
};