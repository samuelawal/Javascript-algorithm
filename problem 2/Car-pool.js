function carPooling(miles, gallon, parking, tolls) {
  const gasolinePrice = 165.77;
  const gasoline = gallon / gasolinePrice
  const averageMile = miles /  gasoline;
  const data = averageMile + parking + tolls + gallon;
  console.log(data);
  const result = `Total Miles: ${miles}
    Cost per gallon of Gasoline: ${gasolinePrice}
    Average mile per gallon: ${averageMile}
    Parking fees per day: ${parking}
    Tolls per day: ${tolls}
    So therefore it cost \u20A6${data}`;
  console.log(result);
}
carPooling(99, 5000, 500, 100);
