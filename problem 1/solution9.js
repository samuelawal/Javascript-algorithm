function characters(str){
     let myArray = str.split("");
     let myArrayCharCode = myArray.map(char => {
          return char.charCodeAt()
     })
   
     return myArrayCharCode
}
console.log(characters('Toyosi'))