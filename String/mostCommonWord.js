
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */


 var mostCommonWord = function(paragraph, banned) {

    let split = paragraph.toLowerCase().split(/\W+/);
    let map = {};
    let answer = {count:-Infinity, word:''}
    let bannedSet = new Set(banned);
        for(const w of split){
            if(!bannedSet.has(w)){
                if(map[w] == null)
                    map[w] = 0;
               
                map[w]++;
            }
            
            if(map[w] > answer.count) {
              answer.count = map[w]
              answer.word = w
          }
        }
    return answer.word;  
    };