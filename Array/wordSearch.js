/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    
    const dfs = (board,i,j,count,word)=>{
            if(count === word.length) 
                return true;
            
            if(i<0 || i>=board.length || j<0 || j>=board[i].length || board[i][j]!==word.charAt(count))
                return false;
            
            const temp = board[i][j];
            board[i][j]='';
            const found =  dfs(board,i+1,j,1+count,word) 
                        || dfs(board,i-1,j,1+count,word) 
                        || dfs(board,i,j+1,1+count,word) 
                        || dfs(board,i,j-1,1+count,word);
            board[i][j]= temp;
            return found;
    };
    
    for(let i=0; i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if(board[i][j] == word[0] && dfs(board,i,j,0,word)){
               return true;
               }
        }
        
    }
    return false;


};