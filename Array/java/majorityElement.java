package Array.java;

public class majorityElement {
    // O(n) moores voting alg
    // O(1) space
    public int majorityElement(int[] nums) {
        int num = 0, count = 0;

        for (int n : nums) {
            if (count == 0) {
                num = n;
            }
            if (n != num)
                count--;
            else
                count++;
        }

        return num;
    }
}
