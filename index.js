document.addEventListener('DOMContentLoaded',() => {
    const myForm = document.querySelector('form')
    myForm.addEventListener('submit', onSubmit)
   function onSubmit(event) {
       event.preventDefault();
      const comment =document.getElementById('comment').value
      //return (`${comment}`)
     console.log (comment)
   }
        console.log('After DOM loaded')
   });
    console.log('Before DOM loads')

    