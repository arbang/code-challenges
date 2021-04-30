package String.java;

public class balancedStringSplit {
    public int balancedStringSplit(String s) {
        int counter = 0, count = 0;
        for (char c : s.toCharArray()) {
            if (c == 'L')
                count++;
            else
                count--;

            if (count == 0)
                counter++;
        }
        return counter;
    }
}
