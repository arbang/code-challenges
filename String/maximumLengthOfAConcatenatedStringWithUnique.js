/**
 * @param {string[]} arr
 * @return {number}
 */
 var maxLength = function(arr) {
    let max = 0;
    let sets = [new Set('')];
    
    for(let string of arr) {
      const current = new Set(string);
      if (string.length === current.size)  {
      // if the string itself has duplicates, skip
        
        for(let set of sets){
          const intersection = [...set].filter(c => current.has(c));
          // for currently valid string sets, if the current string does not overlap, push it to the sets
          if (intersection.length === 0) {
            const newSet = new Set([...current, ...set]);
            sets.push(newSet);
            max = Math.max(newSet.size, max); 
          }
        }
      }
    }
    
    return max;
  };