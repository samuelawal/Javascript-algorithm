let table = document.querySelector(".myTable");
let data = [];
let year = 2022;
const initialPop = 7794798739;
let gRate = 0.02;
let pop = 7794798739;
let popisDouble = true;

for (let i = 1; i < 76; i++) {
  year++;
  pop += Math.round(gRate * pop);
  let increase = pop - initialPop;
  if (increase >= initialPop && popisDouble) {
    console.log("The Population will double in the year:" + year);
    gRate *= 2;
    popisDouble = false;
  }
  const response = `
  <tr><td>${year}</td><td>${pop}</td><td>${increase}</td></tr>`;

  data.push(response);
  data.join("");
  table.innerHTML = data;
}
