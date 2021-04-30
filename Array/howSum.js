/** 
return an array containing any combination of elements that add 
up to exactly the targetSum. If there is no combo that adds 
up to the targetSum, return null
howSum 7,[5,3,4,7] => [3,4]

m = target sum
n = array length
O(m*n) time
O(m) space
@param number[] numbers
@param int targetSum

Brute Force
m = target sum
n = numbers.length
time: O(n^m * m )
because of copying remainderResult array you multiply by m
space: O(m) 
* 

Memoized
time: O(n*m^2) -> (n*m) possibilities but for every call you're making an array of m so its m^2
space: O(m) //consider values of memo

*/

const howSum(targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if(remainderResult !== null){
            memo[targetSum] =  [...remainderResult, num]
            return memo[targetSum]; // return same array with num attached
        }
    }
    memo[targetSum] = null;
    return null;
}





