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
fetch(`https://bible-api.com/john%203:16`)
.then((response)=>{ return response.json()})
.then((data)=>{
  document.getElementById("verse").innerHTML= data
})
.catch((error)=>{
  console.log(error)
})
