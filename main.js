  
    function newElement() {
      var li = document.createElement("li");
      var inputValue = document.getElementById("myInput").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
      alert("Entrer la tache a réaliser!");
      } else {
        document.getElementById("mes_taches").appendChild(li);
      

      }
    document.getElementById("myInput").value = "";
    
      }
    
  








