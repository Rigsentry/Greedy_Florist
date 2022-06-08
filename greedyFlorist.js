function greedyFlorist(n,k,prices) {
    //When num flower === person, each will buy one flower
    if(n===k) {
        let sum = 0;
        for (const price of prices) {
            sum+= price;
        }
        return sum;
    }
    //Sort prices in descending order
    prices.sort((a,b)=>b-a);
    let personTh = 0;
    let finalPrice = 0;
    let counter = 0;
    while(prices.length>0) {
        const originalPrice = prices.shift();
        finalPrice += (personTh+1)*originalPrice;
        counter++;
        if(counter % k === 0) {
            personTh++;
        }
    }
    return finalPrice;

}

const n = 3;
const k = 2;
const prices = [2,5,6];
const result = greedyFlorist(n,k,prices);
console.log(result);
