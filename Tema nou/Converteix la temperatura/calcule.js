var kelvin = graus + 273.15;

function calcular() {
    var graus = parseFloat(document.getElementById("graus").value);
    var conversion = document.querySelector('input[name="conversion"]:checked').value;
    var resultat;
    if (conversion === "fahrenheit") {
      resultat = (graus - 32) * (5/9);
      resultat = resultat.toFixed(2) + " ºC";
    } else {
      resultat = (graus * 1.8) + 32;
      resultat = resultat.toFixed(2) + " ºF";
    }
    document.getElementById("resultat").textContent = "El resultat és: " + resultat;
  }
  resultat = kelvin.toFixed(2) + " K";