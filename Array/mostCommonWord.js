/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 * O(n) O(n)
 */


 var mostCommonWord = function(paragraph, banned) {

    let split = paragraph.toLowerCase().split(/\W+/);
    let map = {};
    let mostFreqWord = {word:'', frequency: 0};
    let set = new Set(banned);
    for(const word of split){
        map[word] = map[word]+1 || 1;
        if(mostFreqWord.frequency < map[word] && !set.has(word)){
            mostFreqWord.word = word;
            mostFreqWord.frequency = map[word];
        }
    }
        return mostFreqWord.word;
        
    };