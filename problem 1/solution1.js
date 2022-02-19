// Firstly create different functions that adds, multiply, subtract and divide two different numbers
function addNum(fnum, snum){
    return fnum + snum
}
// THis function subtracts the two integers
function subtractNum(fnum, snum){
    return fnum - snum
}
// THis function multiplies the two integers
function multiplyNum(fnum, snum){
    return fnum * snum
}
// THis function divides the two integers
function divideNum(fnum, snum){
    return fnum / snum
}

// THis general Equation takes in the values of what the user passes in and prints out the solution
function Equation(num, myFn, scnd){
    return myFn(num, scnd)
}
Equation(4, addNum, 2)  // prints out 6
Equation(4, subtractNum, 2)  //Prints out 2
Equation(4, multiplyNum, 2) //Prints out 8