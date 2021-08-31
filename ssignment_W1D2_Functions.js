// --------------Answer for Question 1 ----------------
function computeSeleCommission(salary, sales) {
    let percent = 0;
    //If the salesman is salaried 

    if (salary == true) {
        if (sales < 300) {
            percent = 0;
        } else if (sales >= 300 && sales <= 500) {
            percent = 0.01;
        } else {
            percent = 0.02;
        }
    }
    // If the salesman is not salaried 
    else {
        if (sales >= 300 && sales <= 500) {
            percent = 0.02;
        } else if (sales > 500) {
            percent = 0.03;
        }
    }

    let commission = sales * percent;
    return commission;
}
//test
console.log(computeSeleCommission(false, 300));

// --------------Answer for Question 2 ----------------
function compoundInterest(initialAmount, annualInterestRate, numberOfYears){
    let rate = annualInterestRate/100;
    let balance = initialAmount * Math.pow(1 + (rate / 12), 12 * numberOfYears);
    return balance;
}
//test
console.log(compoundInterest(100, 10, 1));
// --------------Answer for Question 3 ----------------
function calcDownpayment(cost) {
let downPayment = 0;
if(cost > 0 && cost < 50000){
    downPayment = cost*0.05;
}
else if (cost >= 50000 && cost < 100000){
    downPayment = 2500 + (0.1*(cost-50000));
}
else if (cost >= 100000 && cost < 200000){
    downPayment = 7500 + (0.15*(cost-100000));
} 
else if (cost >= 200000){
    downPayment = 5000 + (0.1*(cost-200000));
} 
return downPayment;
}
//call the function
console.log(calcDownpayment(50000));
// --------------Answer for Question 4 ----------------
    //sumDigits  
function sumDigits(num){
    let sum = 0;
    while(num != 0){
        sum  += num%10;
        num = Math.floor(num/10);
    }
    return sum;
}
    console.log(sumDigits(1234));//10
    //multDigits
    function multDigits(num){
        let mul = 1;
        while(num != 0){
            mul  *= num%10;
            num = Math.floor(num/10);
        }
        return mul;
    }
        console.log(multDigits(1234));//24

// --------------Answer for Question 5 ----------------
function convertFahrenheit(fahrenheit){
    let celsius = (fahrenheit-32)*(5/9);
    return celsius;

}
//call function
console.log(convertFahrenheit(100));

// --------------Answer for Question 6 ----------------
function calcDistance(x1,y1,x2,y2){
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + (Math.pow(y2 - y1, 2)));
    return distance;
}
console.log(Math.round(calcDistance(0, 0, 5, 5)));

// the end
