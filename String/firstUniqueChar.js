

    var firstUniqChar = function(s) {
        if(s.length == 0) return -1;
        let index = Infinity;
        
        let map = {};
        for(const c in s){
            if(map[s.charAt(c)]!=null){
                map[s.charAt(c)] = -1;
            }else{
                map[s.charAt(c)] = c;
            }
        }
        for(const c in map){
            const char = map[c];
            if(char !=-1 && ((Number(char) < Number(index)))){
                index = char;
            }
        }
        return (index==Infinity)? -1:index;
    };
    
    /**
     * @param {string} s
     * @return {number}
     */
     var firstUniqChar = function(s) {
        for(let i=0;i<s.length;i++){
            if(s.indexOf(s[i]) === s.lastIndexOf(s[i]))
                return i;
        }
        return -1;
    };