var pyramid = function(pattern, str) {
    let n = 2;
    
    for (let rowCount = 0; rowCount <= n; rowCount++){
        let output = '';
        for(let j=0; j < n - rowCount; j++)
            output += ' ';
        for (let k =1; k <=(2*rowCount+1); k++)
            output += '*';
        console.log(output);
    }
    
    let starCount = 2 * (n - 1) + 1;
    let spaceCount = 1;
    for (let rowCount = 1; rowCount <= n; rowCount++) {
        let output='';
        for (let i = 0; i < rowCount; i++) {
            output += ' ';
        }
        for (let i = 0; i < starCount; i++) {
            output += '*';
        }
        starCount -= 2;
         console.log(output);
    }
    return true;
};