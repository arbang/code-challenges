package Array.java;

public class smallestSubarrayGivenSum {
    public static int smallestSubarray(int targetSum, int[] arr) {
        int windowStart = 0;
        int currentWindowSum = 0;
        int minWindowSize = Integer.MAX_VALUE;

        for (int windowEnd = 0; windowEnd < arr.length; windowEnd++) {
            currentWindowSum += arr[windowEnd];

            while (currentWindowSum >= targetSum) {
                minWindowSize = Math.min(minWindowSize, windowEnd - windowStart + 1); // get how large window is
                currentWindowSum -= arr[windowStart];
                windowStart++;
            }
        }

        return minWindowSize;
    }
}
