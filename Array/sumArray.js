/** 
takes in targetSum and array of numbers
indicate whether or not it is possible to generate the targetSum using numbers from the array
all inputs are nonnegative
canSum(7,[5,3,4,7]) => true
7,[2,4] => false

m = target sum
n = array length
O(m*n) time
O(m) space
@param number[] numbers
@param int targetSum
* 
*/

const canSum(targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers){
        const remainder = targetSum - num;
        if(canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}


const canSumIterative(targetSum, numbers) => {

    const obj = {};
    for(let num of numbers){
        const remainder = targetSum - num;
        if(obj[remainder]) {
            return true;
        }
        else{
            obj[num] = true;
        }
    }
    return false;
}


// O(n^m) time O(m) space - m is target sum n is array length
// const canSum(targetSum, numbers) => {
//     if(targetSum === 0) return true;
//     if(targetSum < 0) return false;

//     for(let num of numbers){
//         const remainder = targetSum - num;
//         if(canSum(remainder, numbers) === true) {
//             return true;
//         }
//     }

//     return false;
// }



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


/*
bestSum(targetSum, numbers) return an array containing
 the shortst combo of numbers that add up to targetsum
*/

const bestSum = (targetSum, numbers, memo={}) => {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    if(targetSum in memo) return memo[targetSum];

    let shortest = null;
    for(const num of numbers){
        const remainder = targetSum - num;
        const combination = bestSum(remainder, numbers, memo);
        if(combination === null || combination.length < shortest.length ){
            shortest = combination;
        }
    }
    memo[targetSum] = shortest;
    return shortest;
}


