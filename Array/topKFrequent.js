/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    let hash = {}
    //add numbers
    for (let i = 0 ; i < nums.length; i ++) {
        hash[nums[i]] = hash[nums[i]] + 1 || 1
    }
    let result = [];
    let keys = Object.keys(hash);
    //sort the hash from lowest to highest
    keys.sort((a, b) => {
        return hash[a] - hash[b]
    })

    //add in the highest k elements
    while (result.length < k) {
        result.push(keys.pop())
    }
    return result
};