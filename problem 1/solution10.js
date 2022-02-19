function fiveDigitInteger(int) {
  let fiveDigitIntegerArrayList = [];
  while (int > 0) {
    let data = int % 10;
    int = Math.floor(int / 10);
    fiveDigitIntegerArrayList.push(data);
  }
 return fiveDigitIntegerArrayList.reverse().join("   ");

}
console.log(fiveDigitInteger(42339));
