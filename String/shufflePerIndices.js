/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    let newArr = [];
    let i = 0;
    indices.forEach(index=>{
        newArr[index] = s.charAt(i++);
    });
    return newArr.join('');
};