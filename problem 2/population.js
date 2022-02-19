let population = 7794798739

for(let i = 1; i<=5; i++){
    population +=  Math.floor(0.01 * population);
    console.log(`The estimated population for year ${i} is ${population}`)
}

