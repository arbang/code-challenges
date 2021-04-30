/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let m1 = m - 1, 
        n1 = n - 1, 
        i = m + n - 1;
      
      //start at the end
    while (n1 >= 0) {
       if(nums1[m1] > nums2[n1])
         nums1[i--] =  nums1[m1--]
       else{
         nums1[i--] = nums2[n1--];
       } 
    }
  };