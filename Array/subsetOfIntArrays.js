/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 */
 var subsets = function(nums) {
    const arr = [];
    helper(0,[]);

    function helper(index, result){
      arr.push(result);
      for(let i = index; i<nums.length; i++){
            helper(i+1, [...result, nums[i]]);   
      }
    }
    return arr;
    
};