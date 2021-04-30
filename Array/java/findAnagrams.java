package Array.java;

class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        List<Integer> anagramIndex = new ArrayList<Integer>();
        if (s == null || p == null || s.length() < p.length())
            return anagramIndex;

        int[] hash = new int[26];
        for (char c : p.toCharArray()) {
            hash[c - 'a']++;
        }

        int left = 0;
        int right = 0;
        int count = p.length();

        while (right < s.length()) {
            char c = s.charAt(right);
            if (hash[c - 'a'] > 0) {
                count--;
            }
            hash[c - 'a']--;
            right++;
            if (count == 0) {
                anagramIndex.add(left);
            }

            if (right - left == p.length()) {
                if (hash[s.charAt(left) - 'a'] >= 0)
                    count++;

                hash[s.charAt(left) - 'a']++;
                left++;
            }

        }
        return anagramIndex;
    }
}

/** O(n) since and start and end points only go through once */
public class findAnagrams {

    public List<Integer> findAnagrams(String s, String p) {
        List<Integer> anagramIndex = new ArrayList<Integer>();
        if (s == null || p == null || s.length() < p.length())
            return anagramIndex;

        int[] hash = new int[256];
        for (char chars : p.toCharArray()) {
            hash[chars]++;
        }

        int left = 0;
        int right = 0;
        int count = p.length();

        while (right < s.length()) {

            if (hash[s.charAt(right)] > 0) {
                count--;
            }
            hash[s.charAt(right)]--;
            right++;
            if (count == 0) {
                anagramIndex.add(left);
            }

            if (right - left == p.length()) {
                if (hash[s.charAt(left)] >= 0)
                    count++;

                hash[s.charAt(left)]++;
                left++;
            }

        }
        return anagramIndex;
    }

}
