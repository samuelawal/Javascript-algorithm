function Square(){

  let n = 5; // row or column count
  // defining an empty string
  let string = "";
  
  for(let i = 0; i < n; i++) { // external loop
    for(let j = 0; j < n; j++) { // internal loop
      if(i === 0 || i === n - 1) {
        string += "*";
      }
      else {
        if(j === 0 || j === n - 1) {
          string += "*";
        }
        else {
          string += " ";
        }
      }
    }
    // newline after each row
    string += "\n";
  }
  // printing the string
  console.log(string);
}
Square()


function diamond(){
    let n = 5;
    let string = "";
    // Upside pyramid
    // upside diamond
    for (let i = 1; i <= n; i++) {
      // printing spaces
      for (let j = n; j > i; j--) {
        string += " ";
      }
      // printing star
      for (let k = 0; k < i * 2 - 1; k++) {
        if (k === 0 || k === 2 * i - 2) {
          string += "*";
        }
        else {
          string += " ";
        }
      }
      string += "\n";
    }
    // downside diamond
    for (let i = 1; i <= n - 1; i++) {
        // printing spaces
        for (let j = 0; j < i; j++) {
          string += " ";
        }
        // printing star
        for (let k = (n - i) * 2 - 1; k >= 1; k--) {
          if (k === 1 || k === (n - i) * 2 - 1) {
            string += "*";
          }
          else {
            string += " ";
          }
        }
        string += "\n";
      }
    console.log(string);

}
diamond()
