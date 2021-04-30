/*
Binary tree so its going to be 2 children per -> O(2^(n+m) 
height of tree - # of levels which is n+m -> space:  O(n+m) space)*/
const gridTraveler = (m,n) => {
    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0; // if either dimensions are 0 then grid is empty no way to travel

    return gridTraveler(m-1, n) + gridTraveler(m,n-1);
}

/*
gridTraveler(4,3)
m: {0,1,2,3,4}
n: {0,1,2,3,4}
m*n possible combos
O(m*n) time O(n+m) space
*/
const gridTravelerMemo = (m,n, memo={}) => {
    const key = m + ',' + n;

    if(key in memo) return memo[key];
    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0; // if either dimensions are 0 then grid is empty no way to travel

    memo[key] = gridTravelerMemo(m-1, n, memo) + gridTravelerMemo(m,n-1, memo);
    return memo[key];
}

