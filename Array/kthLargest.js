
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargestSimple = function(nums, k) {
    let arr = nums.sort((a, b) => a - b); // [1, 2, 3, 4, 5, 6]
    return arr[nums.length - k] // arr[6 - 2] == 5
};



/* O(N) */
var findKthLargest = function(nums, k) {

    return quickSelect(nums, 0,nums.length-1, k);
    
    function quickSelect(nums,start,end,k){
        //choose a randomPivot and swap it to the end of the array
        let randomPivot = Math.floor(Math.random()*(end-start+1))+start;
        swap(nums,randomPivot, end);
        
        let pivotIndex = partition(nums, start, end);

        //if k is smaller than the target is in the right side
        if(k < nums.length - pivotIndex){
            return quickSelect(nums, pivotIndex+1, end, k);
        }
        
        //if k is smaller than the target is in the right side
        else if(k > nums.length - pivotIndex){
            return quickSelect(nums, start, pivotIndex-1, k);
        }
        
        //if k === nums.length - pivotIndex
        return nums[pivotIndex];
    }
    
    function partition(nums,start,end){
       const pivot = nums[end];
        let i = start;
        let j = end - 1;
        
        // move all numbers smaller, left of pivot, and larger to the right of pivot
        while(i<=j) {
            while(nums[i] < pivot)
                i++;
            while(nums[j]>pivot)
                j--;
            
            if(i<=j){
                swap(nums, i, j);
                i++;
                j--;
            }
        }
        // swap pivot to its final position
        swap(nums, i, end);
        return i;
    }
    
   function swap(nums,i,j){
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        // [nums[i], nums[j]] = [nums[j], nums[i]];

    }
};

