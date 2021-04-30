/**
 * @param {number[]} nums
 * @return {number[][]}
 O(n * n!) because you have n numbers and each number you have called n! times for backtrack dfs function. System stack also takes n * n! backtrack dfs functions in total. Thus, both time and space complexity is O(n * n!).
 */
 var permute = function(nums) {
    const result = [];
    backtracking(nums,[],result);
    return result;
    
    function backtracking(nums, arr, result){
        if(nums.length === 0){
            result.push([...arr]);
            return;
        }
        
        //for each iteration, fix a number into the array. 
        //remove that number from the nums array and recurse on the remaining array
        //after you recurse, add the number back into the array and go onto the next number.
        //remove that number you just added and go to the next number
        for(let i=0; i<nums.length; i++){
            const num = nums[i];
            arr.push(num);
            nums.splice(i,1);
            backtracking(nums, arr, result);
            
            nums.splice(i,0,num);
            arr.pop();
        }
    }
};
