window.onload = function() {

    var loadSearchBtn = document.querySelector('#loadSearchBtn');
    var httpRequest;
  
    loadSearchBtn.addEventListener('click', function(element) {
      element.preventDefault();
  
      httpRequest = new XMLHttpRequest();
  
      // GET Request
      var url = "superheroes.php";
      httpRequest.onreadystatechange = searchButton;
      httpRequest.open('GET', url);
      httpRequest.send();
    });
  
    function searchButton() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          var response = httpRequest.responseText;
          var superheroes = document.querySelector('#superheroes');
          superheroes.innerHTML = response;
        } else {
          alert('superheroes');
        }
      }
    }
  
  };

