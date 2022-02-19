//Encryption algorithm
const fourRand = () => {
    const output =  (Math.floor(Math.random()*10)+1).toString()+(Math.floor(Math.random()*10)).toString()+(Math.floor(Math.random()*10)).toString()+(Math.floor(Math.random()*10)).toString()
    return parseInt(output)
}

const userinput = fourRand()
console.log('User input in integer format ',userinput)
const userInputString = userinput.toString()
const encryptedDataReceived = []

const encryptedData = []

for(i=0; i<userInputString.length; i++){
    encryptedDataReceived.push((parseInt(userInputString[i])+7)%10)
}

encryptedData.push(encryptedDataReceived[2],encryptedDataReceived[3],encryptedDataReceived[0],encryptedDataReceived[1])

console.log('Encrypted data before scrambling the digits in array ',encryptedDataReceived)
console.log('Encrypted data after scrambling the digits in array ',encryptedData)


//  Decryption algorithm

const decryptedDataReceived = []
decryptedDataReceived.push(encryptedData[2],encryptedData[3],encryptedData[0],encryptedData[1])

const decryptedData = []

for(i=0; i<decryptedDataReceived.length; i++){
    const args = decryptedDataReceived[i]-7;
    if (args==-1) {
        decryptedData.push(9)
    } else if(args==-2){
        decryptedData.push(8)
    } else if(args==-3){
        decryptedData.push(7)
    } else if(args==-4){
        decryptedData.push(6)
    } else if(args==-5){
        decryptedData.push(5)
    } else if(args==-6){
        decryptedData.push(4)
    } else if(args==-7){
        decryptedData.push(3)
    } else if(args==2){
        decryptedData.push(2)
    } else if(args==1){
        decryptedData.push(1)
    } else if(args==0){
        decryptedData.push(0)
    }
    
}

console.log('Dencrypted data after uscrambling the digits in array ',decryptedData)

const dencryptedDataToWhole = decryptedData.join("")
console.log('Dencrypted data after changing it to a string ',dencryptedDataToWhole)

const encryptedDataToWholeNum = parseInt(dencryptedDataToWhole)
console.log('Dencrypted data after changing it to integer type ',dencryptedDataToWhole)