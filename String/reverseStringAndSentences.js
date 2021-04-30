
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    
    for(let i=0, j = s.length-1; i<j;){
        const temp = s[i];
        s[i++] = s[j];
        s[j--] = temp;
    }

};

    //string reverse sentences
    var reverseWordsAndSentences = function(s) {

        s = s.split(' ');
        for (const i in s){
            const str = s[i];
            s[i] = str.split('').reverse().join('');
        }
        return s.join(' ');
        
    };