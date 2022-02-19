function myDecimalEquivalent(binNum) {
//  This Separates the myDecimalEquivalent so we can pick the digits separately
  let myDecimalNumToArray = [];
  while (binNum > 0) {
    let singleBinaryDigit = binNum % 10;
    binNum = Math.floor(binNum / 10);
    myDecimalNumToArray.push(singleBinaryDigit);
  }
  // This section converts our Binary Numbers to Decimal Equivalents
  const finalArray = [];
  myDecimalNumToArray.map((decimalDigit, i) => {
    const data = decimalDigit * 2;
    const finalResult = Math.pow(data, i);
    finalArray.push(finalResult);
  });
  const totalBinaryNumbers = finalArray.reduce((tally, currentTotal) => {
    return tally + currentTotal;
  }, 0);
  return totalBinaryNumbers;
}

console.log(myDecimalEquivalent(1101));

