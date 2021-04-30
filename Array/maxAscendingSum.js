/**
 * @param {number[]} nums
 * @return {number}
 O(n)
 */
 var maxAscendingSum = function(nums){
    let currentSum = 0;
    let maxSum = -Infinity;
    
    for(let i= 0; i<nums.length; i++){
        currentSum += nums[i];
        
        //compare the next number
        if(nums[i] < nums[i+1]){
             maxSum = Math.max(currentSum, maxSum);
        }
        //find max and then reset the current sum since 
        // the next number is smaller
        else{
            maxSum = Math.max(currentSum, maxSum); 
            currentSum = 0;
        }
    }
    
    return maxSum;
};