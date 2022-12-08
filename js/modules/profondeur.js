let testProfondeur = document.querySelector(".test-profondeur");
let coucheInf = document.querySelector(".couche-inf");
let coucheInfEspeces = document.querySelector(".couche-inf-especes");
let especes = document.querySelector(".test-profondeur-especes");
let target;

// @TODO : changer la target pour que la lampe soit sur tous le test-profondeur et donc le clipPath aussi
// blend mode (darken) avec un cercle entre le requin et le fond noir -> a tester

// @TODO : ça merde avec mon :nth-child(2n) car je change le scaleX donc le clipPath aussi.. chiant...
//

// @TODO : ajouter des particles quand on descend plus en profondeur (zone sombre)

let light = () => {
  target = coucheInf;
  target.addEventListener("mousemove", (evt) => {
    var x = evt.layerX;
    var y = evt.layerY;

    coucheInfEspeces.style.clipPath =
      "ellipse(200px 200px at " + x + "px " + y + "px )";
  });
};

let selectShark = () => {
  especes.addEventListener("click", (evt) => {
    console.log("le requin");
  });
};

let profondeurEffects = () => {
  light();
  selectShark();
};

export { profondeurEffects };
