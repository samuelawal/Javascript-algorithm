function Circle(radius){
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);

    console.log(`The diameter of the circle is ${diameter}`)
    console.log(`The circumference of the circle is ${circumference}`)
    console.log(`The area of the circle is ${area}`)
}
Circle(5)