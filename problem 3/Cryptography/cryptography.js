// Create a four digits integer
// Replace each of the digits by adding seven to it
// Divide the new value by 10 and get the remainder
// then swap the first digit with the third and second digits to the fourth
// Print it out


function toEncryption(num) {
  // Convert the num to string
  const arrayNum = num.toString()
  .split('')
  .map((myNum) => {
    return Number(myNum);
  });
  const encryptedData = arrayNum.map((number) => (number + 7) % 10);
  const data = [
    encryptedData[2],
    encryptedData[3],
    encryptedData[0],
    encryptedData[1],
  ].join('');

 return parseInt(data);
}


  
function toDecryption(num){
  const decryptedData = [];
  let numToString = num.toString().split('')
  numToString.forEach((args) => {
  let decrypt = args - 7;
  if(decrypt <= 0){
    decrypt+=10;
  }
  decryptedData.push(decrypt)
});
const data =  
[decryptedData[2],
  decryptedData[3],
  decryptedData[0],
  decryptedData[1]].join('');
  return parseInt(data)
}

const main  = () => {
  const num = 4125;
  const encryptedNum = toEncryption(num);
  const decryptedNum = toDecryption(encryptedNum)
 console.log(num)
  console.log(encryptedNum)
  console.log(decryptedNum)
};
main()