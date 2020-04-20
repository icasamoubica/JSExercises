function smallestOfTwo(num1, num2) {
    let result;
    if(num1 < num2) {
        result = num1
    } else {
        result = num2
    }
    return result;
}

function smallestOfThree(num1, num2, num3) {
    let result;
    if (num1<num2) {
        result = num1;
    } else {
        result = num2;
    }
    if (num3<result) {
        result = num3;
    }
    return result;
}

function largestOfFour(num1, num2, num3, num4) {
    let result;
    if (num1>num2) {
        result = num1;
    } else {
        result = num2;
    }
    if (num3>result) {
        result = num3;
    }
    if (num4>result) {
        result = num3;
    }
    return result;
}

function sumOfXNumbers(x) {
    let i = 0;
    let sum = 0;
    while(i <= x) {
        sum += i;
        i++;
    }
    return sum;
}

function factorialOfX(x) {
    let i = 1;
    let sum = 1;
    while(i <= x) {
        sum *= i;
        i++;
    }
    return sum;
}

function nthNumberIFibonacci(num1) {
    let lower = 0;
    let middle = 0;
    let higher = 1;
    let index = 0;

    while (index < num1) {
        
        lower = middle;
        middle = higher;
        higher = lower + middle;
        index++;
    }
    return middle;

}
function fac(num, acc=1){
    if(num == 1) return acc
    return fac(num-1, acc*num)
}


result = smallestOfTwo(10, 5);
console.log("smallest of 10 and 5 is " + result);
result = smallestOfThree(10, 3, 5);
console.log("smallest of 10,3 and 5 is " + result);
result = largestOfFour(10, 3, 5, 2);
console.log("smallest of 10,3,5 and 2 is " + result);
result = nthNumberIFibonacci(11)
console.log("11th number in fibonacci serie is " + result);
result = sumOfXNumbers(6);
console.log("Sum of numbers 1-6 is " + result);
result = factorialOfX(100);
console.log("Factorial of 100 is " + result);
result = fac(100, 1);
console.log("Factorial of 100 is " + result);