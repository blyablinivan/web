    function isNumber(number) {
    if (isNaN(number) === false) {
        if (number%2 == 0) {
            alert("Число парне");
        }
        else {
            alert("Число непарне")
        }
    }
    else {
        alert("");
    }
}
function isPrime (value) {
    if (value == 1 || value == 0) {
        return false;
    }

    else {
    for (let i = 2; i < value; i++) {

        if ( value % i == 0)
        { 
            return false;
        }
    }
    return true
}
}
function sumPrimeNumb() {
    let inf = 2;
    let sum = 0;
    let arr = [];
    for (let i = 1; i < inf; i++) {

        if (isPrime(i)) {
            arr.push(i);
            sum += i;
        }
        if (arr.length == 5) {
           return sum;
            
        }
        inf++;
    }
}
function sumOfCoolNumbers (n) {
    let sum = 0, num = 1;
    for (let i = 1; i <= n; i++) {
        sum += num;
        num = num*10 + 1;
    }
    return sum; 
}