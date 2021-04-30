

var removeDuplicates = function(nums) {
    for(let i=1; i<nums.length; i++){
        if(nums[i] == nums[i-1]){
            nums.splice(i--,1);
        }
    }
    return nums.length;
};


/*sorted list*/
var removeDuplicatesArray = function(nums) {
    for(let i=1; i<nums.length;){
        if(nums[i] == nums[i-1]){
            nums.splice(i--,1);
        }
        else{
            i++;
        }
    }
    return nums.length;
};

function removeDuplicatesUnsortedArrayNoNewMemory (str) {
    //create if next char is the same
    // if its the same remove the character
    // if its not the same, keep going
  if(!str) return str;
  for(let i = 0; i<str.length; i++){
    for(let j = i+1; j < str.length;){
      if(str[i] === str[j]){
        str = str.substring(0,j) + str.substring(j+1);
        console.log(`index ${i} of ${str}`);
      }
      else{
        j++;
      }
    }
    }
    return str;
  
  }