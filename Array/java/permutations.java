package Array.java;

public class permutations {
    /**
     * Approach 1: backtracking with swap in place temp list Pros: we don't change
     * the original array so if it's shared with other methods in a parallel
     * processing other methods won't be impacted (as long as they don't change the
     * original array this one won't be too) Cons: check everytime if list contains
     * number which is O(n) time.
     * 
     * Time complexity: O(n * n!) Space complexity: O(n) due to the recursion stack
     * and answer if not considered the result space
     */
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(nums, new ArrayList<Integer>(), result);
        return result;

    }

    private void backtrack(int[] nums, List<Integer> arr, List<List<Integer>> result) {
        if (nums.length == arr.size())
            result.add(new ArrayList(arr));

        for (int i = 0; i < nums.length; i++) {
            if (arr.contains(nums[i]))
                continue;
            arr.add(nums[i]);
            backtrack(nums, arr, result);
            arr.remove(arr.size() - 1);
        }

    }
}
