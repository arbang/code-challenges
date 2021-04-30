
public int fib(int n) {
        if(n <= 1)
            return n;

        int prev = 1;
        int prev2 = 0;
        int sum=0;
        while(n-->1){
            sum = prev + prev2;
            prev2=prev;
            prev=sum;
        }
        return prev;
    }
    public int fibRec(int n) {
        if(n <= 1)
            return n;

        int[] cache = new int[n+1];
        cache[1]=1;
        for(int i=2;i<=n;i++){
            cache[i]=cache[i-1] + cache[i-2];
        }
        return cache[n];
    }