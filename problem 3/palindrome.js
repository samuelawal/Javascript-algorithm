function isPalindrome(num) {
  const stringedNum = num.toString();
  if (stringedNum.length > 5) {
    throw new Error("Please enter a new number");
  }
  const arrNum = stringedNum.split("");
  const reversedStr = arrNum.reverse().join("");
  return stringedNum == reversedStr;
}
console.log(isPalindrome(12321));
