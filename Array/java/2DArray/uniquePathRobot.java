package Array.java.2DArray;

public class uniquePathRobot {
    // O(n*m) O(n*m)
    public int uniquePaths(int m, int n) {
        return recurse(m - 1, n - 1, new int[m][n]);
    }

    private int recurse(int m, int n, int[][] memo) {
        if (memo[m][n] > 0)
            return memo[m][n];
        if (n < 0 || m < 0)
            return 0;
        if (n == 0 || m == 0)
            return 1;

        memo[m][n] = recurse(m - 1, n, memo) + recurse(m, n - 1, memo);

        return memo[m][n];
    }

}
