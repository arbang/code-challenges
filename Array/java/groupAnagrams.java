package Array.java;

public class groupAnagrams {
    // O(n*m) old due to sort
    // new O(n)
    public List<List<String>> groupAnagrams(String[] strs) {

        if (strs == null || strs.length == 0)
            return new ArrayList<>();

        Map<String, List<String>> map = new HashMap<>();
        for (String s : strs) {
            // char[] charArr = s.toCharArray();
            // Arrays.sort(charArr);
            // String str = String.valueOf(charArr);

            char[] arr = new char[26];

            for (char c : s.toCharArray()) {
                arr[c - 'a']++;
            }
            String str = new String(arr);

            if (!map.containsKey(str)) {
                map.put(str, new ArrayList<>());
            }

            map.get(str).add(s);
        }

        return new ArrayList<>(map.values());
    }
}
