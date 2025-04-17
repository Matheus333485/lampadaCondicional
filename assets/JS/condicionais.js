
let ligada = false;

function alternarLampada() {
  const lampada = document.getElementById("lampada");

  if (ligada) {
    lampada.src = "https://www.w3schools.com/js/pic_bulboff.gif"; // Lâmpada desligada
    ligada = false;
  } else {
    lampada.src = "https://www.w3schools.com/js/pic_bulbon.gif"; // Lâmpada ligada
    ligada = true;
  }
}
