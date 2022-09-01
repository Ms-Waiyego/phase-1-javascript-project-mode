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

//Getting the API that will generate the bible verse need 
fetch(`https://bible-api.com/romans+12:1-2`)
.then((response)=>response.json)
.then((verse)=>console.log(verse))