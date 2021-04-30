/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
 */



/**
 * Bottom-Up
 */
 var rob2 = function(nums) {
    let memo = [];
    memo[0] = 0;
    memo[1] = nums[0];
    
    for (let i=1;i<nums.length;i++) {
        memo[i+1] = Math.max(memo[i], memo[i-1] + nums[i]);
    }
    
    return memo[nums.length];   
}
/**
 * Bottom-Up O(1) Space
 */
var rob1 = function(nums) {
    let prevMax = 0, curMax = 0;
    for (let n of nums) {
        let temp = curMax;
        curMax = Math.max(prevMax + n, curMax); // rob vs !rob
        prevMax = temp;
    }
    return Math.max(curMax, prevMax);


 var rob = function(nums) {
    /*
    Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for House Robber.
    Memory Usage: 33.8 MB, less than 25.89% of JavaScript online submissions for House Robber.
    
    O(n) time, O(1) space
	
	- Bottom up strategy
	- Iterative
	- Memoization
	
	Trick: At index [i], you only need to know the maximum profit at [i - 1] and [i - 2]. This is a slight variation on fibonacci.
    */
    
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    
    let maxAtTwoBefore = nums[0];
    let maxAtOneBefore = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < nums.length; i++) {
        const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);
        
        maxAtTwoBefore = maxAtOneBefore;
        maxAtOneBefore = maxAtCurrent;
    }
    
    return maxAtOneBefore;
};