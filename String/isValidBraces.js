/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let valid = {
        '[':']',
        '(':')',
        '{':'}'
    };    
    let arr = [];
    for(let c of s){
        if(valid[c]){
            arr.push(valid[c])
        }
        else if(arr && arr.pop()!==c){
            return false;
        }
    }
    return arr.length === 0;
};