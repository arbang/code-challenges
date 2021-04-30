const canConstruct = (target,  wordBank){
    if(target === '') return true;

    for(const word of wordBank){
        if(target.indexOf(word)=== 0){
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank)===true)
                return true;
        }
    }

    return false;
}

/**
 * m = target.length, n = wordBank.length
 * O(n*m^2) => second m comes from the slice 
 * O(m^2) => 
 * @param {string} target 
 * @param {array} wordBank 
 * @param {object} memo 
 * @returns boolean if string can be in the wordbank 
 */
const canConstruct = (target,  wordBank, memo={}){
    if(target === '') return true;
    if(target in memo) return memo[target];

    for(const word of wordBank){
        if(target.indexOf(word)=== 0){
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank, memo)=== true){
                memo[target] = true;
                return true;
            }
        }
        
    }
    memo[target] = false;
    return false;
}
    /**
     * O(n*m^2)
     * O(m^2)
     * @param {*} target 
     * @param {*} wordBank 
     */
const countConstruct = (target, wordBank, memo{}) => {
if(target in memo) return memo[target];
if(target === '') return 1;
let totalCount = 0;
for (const word of wordBank){
    if(target.indexOf(word) === 0){
        const numWays = countConstruct(target.slice(word.length), wordBank)
        totalCount += numWays;
    }
}

memo[target] = totalCount;
return totalCount;
}


/** also allConstruct */
