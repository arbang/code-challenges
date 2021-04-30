/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    
    if(!nums) return 0;
    
    let max = nums[0];
    let min = nums[0];
    let maxProduct = nums[0];
    
    for(let i = 1; i<nums.length; i++){
        if(nums[i] < 0){
            [min,max] = [max,min];
        }
        min = Math.min(nums[i] * min, nums[i]);
        max = Math.max(nums[i] * max, nums[i]);
        maxProduct = Math.max(maxProduct,max);
    }
    return maxProduct;
};