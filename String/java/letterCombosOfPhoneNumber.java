package String.java;

public class letterCombosOfPhoneNumber {
    /**
     * Time Complexity - O(3^N * 4^M), where N+M is length of input string, N and M
     * are characters with 3 and 4 sized character arrays. Space Complexity - O(N+M)
     * this will be the length of the recursion stack and length of the HashMap.
     */

    public List<String> letterCombinations(String digits) {

        String[] dict = new String[] { "0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };

        List<String> combos = new ArrayList<>();
        backtrack(dict, combos, digits, "");
        return combos;
    }

    private void backtrack(String[] dict, List<String> combos, String digits, String str) {
        if (str.length() == digits.length()) {
            combos.add(str);
            return;
        }
        int i = str.length();
        int digit = digits.charAt(i) - '0'; // convert char to int
        for (char c : dict[digit].toCharArray()) {
            backtrack(dict, combos, digits, str + Character.toString(c));
        }
    }
}
