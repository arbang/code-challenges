/**
 * @param {number} n
 * @return {string[]}
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 */
 var generateParenthesis = function(n) {
    let result = [];
    generateP(n,n,'');
    
    function generateP(l,r,s){
        if(l>r) return;
        
        if(l===0 && r===0){
            result.push(s);
            return;
        }
        
        if(l>0) 
            generateP(l-1,r,s+'(');
        
        if(r>0)
            generateP(l,r-1,s+')');

    }
    
    return result;
};