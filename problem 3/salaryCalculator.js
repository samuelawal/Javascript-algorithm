    
function generateSalary(employee, h, r){
    let salary = 0;
    if (h === 40){
        salary = 40 * r;
    }
    else if (h > 40){
        salary = 40 * r + (h - 40) * (r / 2);
    }
   
        return `The salary for ${employee} is ${salary}`
    
}
const firstEmployee = generateSalary('Toyosi', 40, 10)
const SecondEmployee = generateSalary('Tobi', 50, 10)
const thirdEmployee = generateSalary('Tolu', 42, 10)

