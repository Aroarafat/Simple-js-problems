// PROBLEM-02
// TOTAL-SALES-FUNCTION 
// MAIN-TASK
function totalSales(shirt, pant, shoe) {
    perShirt = 100;
    perPant = 200;
    perShoe = 500;
    const perShirtQuantity = perShirt * shirt;
    const pePantQuantity = perPant * pant;
    const perShoeQuantity = perShoe * shoe;
    const totalSale = perShirtQuantity + pePantQuantity + perShoeQuantity;
    return totalSale;
}
const total = totalSales(2, 9, 16);
// OUTPUT
console.log(total);