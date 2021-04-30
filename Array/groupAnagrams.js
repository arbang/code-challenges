/**
 * @param {string[]} strs
 * @return {string[][]}
 O(n^2logn) time complexity (Array.sort() is nlogn)
 */
 var groupAnagrams = function(strs) {
    let obj = {};
    for(let str of strs){
        let sorted = str.split('').sort().join('');
        
        if (obj[sorted] === undefined) {
            obj[sorted] = [str];
        } else {
            obj[sorted].push(str);
        }
        
    }
    
    return Object.values(obj);
};