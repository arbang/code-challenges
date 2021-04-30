
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicatesSortedArray = function(nums) {
    if(nums.length <= 1) return nums;
     
     let p1 = 0;
     let p2 = 1;
     while(p2<nums.length){ // 3 p1 = 0 , p2 = 2
         if(nums[p1] !== nums[p2]){
             nums[p1+1] = nums[p2]; // [1, 2]
             p1++;
         }
         p2++;
     }
      nums.splice(p1+1);
     return nums.length;
     
 };


var singleNumber = function(nums) {
    let arr = {};
    for(const i of nums){
        if(arr[i]!=undefined){
            arr[i] = true;
        }
        else{
            arr[i] = false;
        }
    }
    
    for(const i in arr){
        if(!arr[i])
            return i;
    }
    return -1;
};

/*unsorted string*/
var removeDuplicateLettersUnsortedSubstring = function(s) {
    if(!s){
        return '';
    } 
    
    let map = {};
    for(let i=0;i<s.length;){
        let char = s[i];
        if(map[char]){
           s = s.substring(0,i) + s.substring(i+1);
        }else{
           map[char] = true;
           i++;
        }
    }
    return s;
};

const removeDuplicateLettersWithRegexAndMap = (s)=> {
    if(!s){
        return s;
    } 
    let uniqueLetters = '';
    const map = {};
    const letters = /^[A-Za-z]+$/; 
    for(const char of s){
      if(char.match(letters)){
        if(!map[char]){
           map[char] = true;
           uniqueLetters+=char;
        }
      }
    }
    console.log(map);
    return uniqueLetters;
  }
var removeDuplicateLettersSet = function(s) {
    if(!s){
        return '';
    } 
    
    return [...new Set(s)].join('');
};



var removeDuplicatesAdjacentStack = function(S) {
    const stack = [];
    for(const char of S){
        const top = stack.pop();
        if(top !== char){
            stack.push(top, char);
        }
    }
    return stack.join('');
};




  function removeDuplicatesObject (s) {
    //create if next char is the same
    // if its the same remove the character
    // if its not the same, keep going
      if(!s || typeof s !== 'string'){
          return s;
      } 
      let uniqueLetters = '';
      const uniqueObj = {};
      for(const char of s){
          const lowerCase = char.toLowerCase();
          if(!uniqueObj[lowerCase]){
            uniqueObj[lowerCase] = true;
             uniqueLetters+=char;
          }
      }
      return uniqueLetters;
    }

    function removeDuplicatesObjectUpdated (s) {
        //create if next char is the same
        // if its the same remove the character
        // if its not the same, keep going
          if(!s || typeof s !== 'string'){
              return s;
          } 
          let uniqueLetters = s[0];
          const uniqueObj = {[uniqueLetters]: true};
          for(let i=1;i<s.length;i++){
              const char = s[i];
              const lowerCase = char.toLowerCase();
              if(!uniqueObj[lowerCase]){
                uniqueObj[lowerCase] = true;
                 uniqueLetters+=char;
              }
          }
          return uniqueLetters;
        }

        //string reverse sentences
        var reverseWords = function(s) {

            s = s.split(' ');
            for (const i in s){
                const str = s[i];
                s[i] = str.split('').reverse().join('');
            }
            return s.join(' ');
            
        };

