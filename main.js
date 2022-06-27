const handleSubmit = (event)=>{
    event.preventDefault();

    const name = document.querySelector("input[name=name]").value;
    const email = document.querySelector("input[name=email]").value;

    fetch('https://api.sheetmonkey.io/form/gGtbNc86zkSBYEsXnyhsmc', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
        },

        body: JSON.stringify({name, email}),
    });
}

document.querySelector("form").addEventListener("submit", handleSubmit);

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.submit'),
        loader = document.querySelector('.loader'),
        check = document.querySelector('.check');
    
    btn.addEventListener('click', function () {
      loader.classList.add('active');    
    });
   
    loader.addEventListener('animationend', function() {
      check.classList.add('active'); 
    });
});
  