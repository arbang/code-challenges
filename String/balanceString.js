/**
 * @param {string} s
 * @return {number}
 */
 const balancedStringSplit = (s, count=0) => {
    let balance = 0, count = 0;
    for(let c of s){
        if(c === 'L')
            balance++;
        else
           balance--;
        if(balance === 0)
           count++;
    }
    return count;
};