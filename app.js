  window.addEventListener('load', ()=>{
    document.querySelector("button#loadSearchBtn").addEventListener("click", (event)=>{
      event.preventDefault();
      let heroSearch = document.querySelector("input#heroSearch").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/,'');
      let resultDisplay = document.querySelector("div#result");
      
      let Url = `superheroes.php?query= ${heroSearch}`;
      fetch(Url, {method : 'GET'})
      .then(response => response.text())
      .then(ele => {
        resultDisplay.innerHTML = '';
        resultDisplay.innerHTML = ele; 
    })
  
});

});

