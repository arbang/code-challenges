/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const obj = {};
     
     for(const i in nums){
         const num = nums[i];
         if(obj[target-num]){
             return [obj[sum], i];
           }
         else{
              obj[num] = i;
         }
     }
     
     return [];
 };