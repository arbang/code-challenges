public class Array {

    /**
     * climbStairs | containsDuplicate/mergesort |
     * 
     * @param n
     * @return
     */
    public int climbStairs(int n) {
        int[] arr = new int[n + 1];
        arr[0] = 1;
        arr[1] = 1;
        for (int i = 2; i <= n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
        return arr[n];
    }

    public boolean containsDuplicate(int[] nums) {
        mergeSort(nums);
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == nums[i - 1]) {
                return true;
            }
        }
        return false;
    }

    private void mergeSort(int[] nums) {
        if (nums.length < 2) {
            return;
        }
        int mid = nums.length / 2;
        int[] left = new int[mid];
        int[] right = new int[nums.length - mid];
        for (int i = 0; i < left.length; i++) {
            left[i] = nums[i];
        }
        for (int i = mid; i < nums.length; i++) {
            right[i - mid] = nums[i];
        }
        mergeSort(left);
        mergeSort(right);
        merge(nums, left, right);
    }

    private void merge(int[] nums, int[] left, int[] right) {
        int i = 0;
        int j = 0, k = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                nums[k++] = left[i++];
            } else {
                nums[k++] = right[j++];
            }
        }
        while (i < left.length) {
            nums[k++] = left[i++];
        }
        while (j < right.length) {
            nums[k++] = right[j++];
        }
    }
}
