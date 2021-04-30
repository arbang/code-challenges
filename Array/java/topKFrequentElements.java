package Array.java;

public class topKFrequentElements {
    public int[] topKFrequent(int[] nums, int k) {
        // add the freq of each number
        // create priority q based on values of map)
        // O(n) O(n)
        Map<Integer, Integer> freqMap = new HashMap<>();

        for (int num : nums) {
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }

        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> freqMap.get(b) - freqMap.get(a));
        // custom sort priority queue based on map values while adding the records to pq
        pq.addAll(freqMap.keySet());
        int[] res = new int[k];
        for (int i = 0; i < k; i++) {
            res[i] = pq.remove();
        }
        return res;

    }
}
