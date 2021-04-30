package Array.java;

public class mergeArray {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        if (n <= 0 && m > 0)
            return;
        int ptr1 = m - 1;
        int ptr2 = n - 1;
        int last = nums1.length - 1;

        while (last >= 0 && ptr1 >= 0 && ptr2 >= 0) {
            if (nums1[ptr1] >= nums2[ptr2]) {
                nums1[last--] = nums1[ptr1--];
            } else {
                nums1[last--] = nums2[ptr2--];
            }
        }
        while (ptr2 >= 0) {
            nums1[last--] = nums2[ptr2--];
        }
    }
}
