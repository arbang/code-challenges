package Array.java;

public class subset {
    // O(2^n)
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(nums, result, new ArrayList<>(), 0);
        return result;
    }

    private void backtrack(int[] nums, List<List<Integer>> result, List<Integer> arr, int start) {
        result.add(new ArrayList(arr));

        for (int i = start; i < nums.length; i++) {
            arr.add(nums[i]);
            backtrack(nums, result, arr, i + 1);
            arr.remove(arr.size() - 1);
        }
    }
}
