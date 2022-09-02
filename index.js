//Creating a submit button
//This button enables one to submit their comment on the verse given

document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector('form')
form.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  handleComment(e.target["add-comment"].value)
}
function handleComment(comment) {
  let p = document.createElement('p')
  p.textContent = comment
  console.log(p)
 document.querySelector("#comment").appendChild(p)
}
  console.log ("After DOM loaded")
});
console.log('Before DOM loads')

//Creating a function that will fetch the API data 
//Then convert them to the required form
//Then post them of the webpage when the button get verse is pressed 
document.getElementById('getverse').addEventListener('click', getverse)
function getverse(verse) {
  fetch(`https://bible-api.com/romans+12:1-2`,{
   method : "GET",})
  .then((response)=> response.json())
  .then((bibleverse)=>{ console.log(bibleverse)
  const parentDiv = document.getElementById("verse")
  Array.from(bibleverse).forEach((verse) =>{
    bibleverse += `<p>${verse.text}</p>`
   })
   document.getElementById('verse').innerHTML= JSON.stringify(bibleverse.text)
  } )
  }

  


