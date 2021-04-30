package Array;

import java.io.util.*;

class Solution {
    // O(N) best case / O(N^2) worst case running time + O(1) memory

    public int findKthLargest(int[] nums, int k) {

        return quickSelect(nums, 0, nums.length - 1, nums.length - k);

    }

    private int quickSelect(int[] nums, int s, int e, int k) {
        int random = new Random().nextInt((e - s) + 1) + s;
        swap(nums, random, e);

        int j = s, pivot = nums[e];
        for (int i = s; i < e; i++) {
            if (nums[i] <= pivot) {
                swap(nums, j, i);
                j++;
            }
        }
        swap(nums, j, e);

        if (j == k) {
            return nums[j];
        }
        // must be on the left part of pivot
        if (j > k) {
            return quickSelect(nums, s, j - 1, k);
        }
        // must be to the right of the pivot
        return quickSelect(nums, j + 1, e, k);

    }

    private void swap(int[] nums, int a, int b) {
        int temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
}

public class kthLargest {
    // O(N) best case / O(N^2) worst case running time + O(1) memory

    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int num : nums) {
            pq.offer(num);

            System.out.println(pq);
            if (pq.size() > k) {
                pq.poll();
            }
        }

        return pq.peek();
    }

}
