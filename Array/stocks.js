/**
 * @param {number[]} prices
 * @return {number}
 */
 var stocks = function(prices) {
    let buyPrice = prices[0];
    let maxProfit = 0;
    
    for(const num of prices){
        if(num<buyPrice){
            buyPrice = num;
        }
        if(num - buyPrice > maxProfit){
            maxProfit = num - buyPrice;
        }
    }
    
    return maxProfit

};