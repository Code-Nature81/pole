function checkPassword() {
    var password = document.getElementById("passwordInput").value;
  
    // Comparer le mot de passe entré avec les mots de passe appropriés pour chaque page
    if (password === "Calmon@81#/R8") {
      window.location.href = "Materiel-Protection/materiel-protec-Calmon-R8.html";
      return false;
    }else if (password === "Lacas@81#/R9") {
      window.location.href = "Materiel-Protection/materiel-protec-Lacas-R9.html";
      return false;
    }else if (password === "Redouliere@81#/R11") {
      window.location.href = "Materiel-Protection/materiel-protec-Redoulière-R11.html";
      return false;
    } else if (password === "Puechblanc@81#/R12") {
      window.location.href = "Materiel-Protection/materiel-protec-Puech-Blanc-R12.html";
      return false;
    } else if (password === "Farguettes@81#/R18") {
      window.location.href = "Materiel-Protection/materiel-proctec-Farguettes-R18.html";
      return false;
    } else if (password === "Stbenoitguignerette@81#/R23") {
      window.location.href = "Materiel-Protection/materiel-protec-St-Benoit-Guignerette-R23.html";
      return false;
    } else if (password === "Guignerette1@81#/R25") {
      window.location.href = "Materiel-Protection/materiel-proctec-Guignerette1-R25.html";
      return false;
    } else if (password === "Guignerette2@81#/R25") {
      window.location.href = "Materiel-Protection/materiel-proctec-Guignerette2-R25.html";
      return false;
    } else if (password === "Guignerette3@81#/R25") {
      window.location.href = "Materiel-Protection/materiel-proctec-Guignerette3-R25.html";
      return false;
    } else if (password === "Bellevue@81#/R26") {
      window.location.href = "Materiel-Protection/materiel-protec-Bellevue-R26.html";
      return false;
    } else if (password === "Filtres@81#/R27") {
      window.location.href = "Materiel-Protection/materiel-protec-Filtres-R27.html";
      return false;
    } else if (password === "Paillassarie@81#/R29") {
      window.location.href = "Materiel-Protection/materiel-protec-Paillassarie-R29.html";
      return false;
    } else if (password === "PouzounacCarmaux@81#/R31") {
      window.location.href = "Materiel-Protection/materiel-protec-Pouzounac-Carmaux-R31.html";
      return false;
    } else if (password === "Pouzounacroucarie@81#/R32") {
      window.location.href = "Materiel-Protection/materiel-protec-Pouzounac-Roucarié-R32.html";
      return false;
    } else if (password === "Lempery@81#/R33") {
      window.location.href = "Materiel-Protection/materiel-protec-Lempery-R33.html";
      return false;
    } else if (password === "Puechfau@81#/R34") {
      window.location.href = "Materiel-Protection/materiel-protec-Puech-Fau-R34.html";
      return false;
    } else if (password === "Chenaîe@81#/R46") {
      window.location.href = "Materiel-Protection/materiel-proctec-Chenaîe-R46.html";
      return false;
    } else if (password === "Stsernin@81#/R47") {
      window.location.href = "Materiel-Protection/materiel-protec-St-Sernin-R47.html";
      return false;
  
    } else {
      // Mot de passe incorrect, afficher un message d'erreur
      var errorText = document.getElementById("errorText");
      errorText.style.display = "block";
      return false;
    }
  }
  