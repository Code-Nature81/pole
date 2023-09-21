function checkPassword() {
    var password = document.getElementById("passwordInput").value;
  
    // Comparer le mot de passe entré avec les mots de passe appropriés pour chaque page
    if (password === "Farguettes@81#/R18") {
      window.location.href = "materiel-proctec.html";
      return false;
    } else if (password === "gugu81") {
      window.location.href = "page_protegee2.html";
      return false;
    } else if (password === "gugu81@") {
      window.location.href = "page_protegee3.html";
      return false;
    } else {
      // Mot de passe incorrect, afficher un message d'erreur
      var errorText = document.getElementById("errorText");
      errorText.style.display = "block";
      return false;
    }
  }
  