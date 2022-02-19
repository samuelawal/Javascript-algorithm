let result = []

function mileage(){
 const name =  document.querySelector('#city').value
 const mile =  document.querySelector('#miles').value
 const gallon =  document.querySelector('#gallon').value
let items = document.querySelector('ul')
 const data = {
     name,
     mile,
     gallon,
 }
 result.push(data)

 let response  = `<li>Your trip to ${data.name} was at ${data.mile}miles, your total mpg is ${Math.floor(data.mile / data.gallon)}</li>`
items.innerHTML += response

}
