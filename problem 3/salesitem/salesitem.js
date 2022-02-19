const form = document.querySelector("form");
const inpuText = document.querySelector("input");
const list = document.querySelector("ul");
const button = document.querySelector("button");
let arrayedData = [];

form.addEventListener("submit", mySalesCommissionCalculator);
function mySalesCommissionCalculator(e) {
  e.preventDefault();
  let inpuTextVal = inpuText.value;
  const data = Number(inpuTextVal * 0.09 + 200);
  arrayedData.push(data);

  function calculateData() {
    const finalData = arrayedData.reduce((tally, Total,) => {
      return tally + Total;
    }, 0);
    console.log(finalData);
    const myData = `<li>Your sales earning for \u20A6${inpuTextVal} worth of items is \u20A6${Math.round(arrayedData[arrayedData.length - 1])}, so therefore your total earning is \u20A6${Math.round(finalData)}</li>.`;
    list.innerHTML += myData;
  }
  calculateData();
}
