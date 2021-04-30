package Array.java;

public class palindromePartitioning {
    // N + N(N - 1) + N(N - 1)(N-2) + ... = O(N!)
    // substring: O(N)
    // check palindrome: O(N)
    // Time = O(N! * N) = O(N!)
    public List<List<String>> partition(String s) {
        List<List<String>> result = new ArrayList<>();
        backtrack(result, new ArrayList<>(), s);
        return result;
    }

    private void backtrack(List<List<String>> result, List<String> arr, String s) {
        if (s == null || s.length() == 0) {
            result.add(new ArrayList<>(arr));
            return;
        }
        for (int i = 1; i <= s.length(); i++) {
            String temp = s.substring(0, i);
            if (!isPalindrome(temp))
                continue;

            arr.add(temp);
            backtrack(result, arr, s.substring(i, s.length()));
            arr.remove(arr.size() - 1);

        }
    }

    private boolean isPalindrome(String s) {
        int i = 0;
        int j = s.length() - 1;
        while (i <= j) {
            if (s.charAt(i++) != s.charAt(j--))
                return false;
        }
        return true;
    }
}
