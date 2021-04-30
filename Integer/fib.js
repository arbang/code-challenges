var fibBottomUp = function(n) {
    if(n<=1) return n;
    
    const arr = new Array(n+1);
    arr[0] = 0;
    arr[1] = 1;
    for(let i=2;i<=n;i++){
        arr[i]= arr[i-1] + arr[i-2];
    }
    return arr[n];
};

var fibTwo = function(n) {
    if(n<=1) return n;
    
    let prev = 0, sum=1;
    while(n-->1){
        sum += prev;
        prev = sum - prev;
    }
    return sum;
};

var fibThree = function(n) {
    if(n<=1) return n;
    
    let prev = 1, prev2 = 0, sum=0;
    while(n-->1){
        sum = prev + prev2;
          prev2 = prev;
          prev = sum;
    }
    return sum;
};