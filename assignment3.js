// PROBLEM-03
// DELIVERY-FUNCTION 
function deliveryCost(shirt) {
    if (shirt >= 0) {
        let firstPrice = 100;
        let secondPrice = 80;
        let thirdPrice = 50;


        let first = 100;
        let second = shirt - first;
        let third = shirt - 200;
        if (shirt <= 100) {
            return shirt * firstPrice;
        }
        else if (shirt <= 200) {
            return firstPrice * first + second * secondPrice;
        }
        else {
            return firstPrice * first + secondPrice + thirdPrice * third;
        }
    }
}

const total = deliveryCost(870);
// OUTPUT
console.log(total);