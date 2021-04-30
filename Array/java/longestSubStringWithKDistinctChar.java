package Array.java;

import java.util.HashMap;
import java.util.Map;

//as long as the length is < 2
public class longestSubStringWithKDistinctChar {
    public static int longestSubStringKDistinctChar(String str, int k) {
        Map<Character, Integer> charFrequencyMap = new HashMap<>();
        int windowStart = 0, maxLength = 0;
        for (int windowEnd = 0; windowEnd<str.length(); windowEnd++) {
            char rightChar = str.charAt(windowEnd);
            charFrequencyMap.put(rightChar, charFrequencyMap.getOrDefault(rightChar, 0)+ 1);

            while(charFrequencyMap.size() > k){
                char leftChar = str.charAt(windowStart);
                charFrequencyMap.put(leftChar, charFrequencyMap.get(leftChar) - 1);
                if(charFrequencyMap.get(leftChar) === 0)
                    charFrequencyMap.remove(leftChar);
    
                windowStart++;
            }
            maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
        }
        return maxLength;
    }

}

public static void main (String[] args){
    System.out.println(longestSubStringKDistinctChar("AAAHHIBC", 2));
}
