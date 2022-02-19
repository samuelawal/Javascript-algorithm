
function equation(fnum, snum, thirdNum){
    const addition = Math(fnum + snum + thirdNum)
    const averageNum = Math.floor((fnum + snum + thirdNum) / 2)
    const product = fnum * snum * thirdNum
    const min = Math.min(fnum, snum, thirdNum)
    const max = Math.max(fnum, snum, thirdNum)

    console.log(`The total Number is ${addition}`)
    console.log(`The average Number is ${averageNum}`)
    console.log(`The product is ${product}`)
    console.log(`The smallest number is ${min}`)
    console.log(`The largest number is ${max}`)
}

equation(4,4,2)