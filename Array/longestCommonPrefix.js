/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if (!strs || strs.length == 0) return '';
    let LCP = '';
    let index = 0;
    for(let c of strs[0]){
        for(let i=1;i<strs.length; i++){
            if (index >= strs[i].length || c!= strs[i].charAt(index))
                return LCP;
        }
        LCP+=c;
        index++;
    }
    return LCP;
};