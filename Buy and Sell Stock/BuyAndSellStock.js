var maxProfit = function(prices) {
    let currentMaxProfit = 0;
    let minPrice = prices[0];
    
    prices.forEach(price => {
        const profitMargin = price - minPrice;
        if (profitMargin > currentMaxProfit) currentMaxProfit = profitMargin;
        if (price < minPrice) minPrice = price;        
    });        
    return currentMaxProfit;
};