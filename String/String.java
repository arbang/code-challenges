import java.util.*;

public class String {
    /*
     * longest common prefix| most common word |first unique char| mostCommonWord
     * firstUniqChar | missingNumber | isValid - {}[]() | singleNumber - only 1
     * occurrence
     */

    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0)
            return "";
        String longestCommonPrefix = "";

        int index = 0;
        for (char c : strs[0].toCharArray()) {
            for (int i = 1; i < strs.length; i++) {
                if (index >= strs[i].length() || c != strs[i].charAt(index))
                    return longestCommonPrefix;

            }
            longestCommonPrefix += c;
            index++;
        }
        return longestCommonPrefix;
    }

    public String mostCommonWord(String paragraph, String[] banned) {
        Set<String> bannedWords = new HashSet<>();
        for (String word : banned) {
            bannedWords.add(word);
        }

        Map<String, Integer> counts = new HashMap<>();
        for (String word : paragraph.replaceAll("[^a-zA-Z]", " ").toLowerCase().split(" ")) {
            if (!bannedWords.contains(word))
                counts.put(word, counts.getOrDefault(word, 0) + 1);
        }

        String result = "";
        for (String key : counts.keySet()) {
            if (result.equals("") || counts.get(key) > counts.get(result))
                result = key;
        }

        return result;

    }

    public int firstUniqChar(String s) {
        if (s.length() == 0)
            return -1;
        Map<Character, Integer> map = new HashMap<>(s.length());
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (map.containsKey(c)) {
                map.put(c, -1);
            } else {
                map.put(c, i);
            }
        }

        int min = Integer.MAX_VALUE;
        for (char c : map.keySet()) {
            int index = map.get(c);
            if (index > -1 && index < min) {
                min = index;
            }
        }
        return (min == Integer.MAX_VALUE) ? -1 : min;
    }

    public int missingNumber(int[] nums) {
        Set<Integer> set = new HashSet<>();
        int max = Integer.MIN_VALUE;
        for (int i : nums) {
            set.add(i);
        }
        for (int i = 0; i <= nums.length; i++) {
            if (!set.contains(i)) {
                return i;
            }
        }
        return 0;
    }

}

    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<Character>();
        for (char c : s.toCharArray()) {
            if (c == '(')
                stack.push(')');
            else if (c == '{')
                stack.push('}');
            else if (c == '[')
                stack.push(']');
            else if (stack.isEmpty() || stack.pop() != c)
                return false;
        }
        return stack.isEmpty();
    }

   public int singleNumber(int[] nums) {
    HashMap<Integer, Integer> map = new HashMap<>();
    for(int num: nums){
        map.put(num, map.getOrDefault(num, 0) + 1);
    }
    
    for(Map.Entry<Integer, Integer> entry : map.entrySet()){
        if(entry.getValue() == 1)
            return entry.getKey();
    }
        return 0;

}