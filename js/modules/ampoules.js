console.log("module : Lorenzini");

// define your variables
let target = document.querySelector(".test-ampoules");
let fish = document.querySelector(".img-fish-ampoules");
let sharkPng = document.querySelector(".img-requin-ampoules");
let sharkGif = document.querySelector(".img-requin-ampoules-gif");

let positionShark = sharkPng.offsetLeft + sharkPng.offsetWidth;

let fishPosition = (evt) => {
  var x = evt.pageX;
  var y = evt.pageY;

  fish.style.left = x + 1 + "px";
  fish.style.top = y + 1 + "px";

  let positionFish = fish.offsetLeft;

  if (positionFish < positionShark) {
    sharkPng.style.display = "none";
    sharkGif.style.display = "block";
  } else {
    sharkPng.style.display = "block";
    sharkGif.style.display = "none";
  }
};

// ne pas utiliser de gif ?
let mousePosition = () => {
  target.addEventListener("mousemove", fishPosition);
};

let interactionLorenzini = () => {
  mousePosition();
};

// @TODO : pourquoi le poisson il me suit partout ??
export { interactionLorenzini };
