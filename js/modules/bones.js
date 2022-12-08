console.log("le module : squelette");

let requinSquelette = document.querySelector(".test-squelette");
console.log(requinSquelette);
let peau = document.querySelector(".peau");
let groupBonesSvgContainer = document.querySelectorAll(".bones>g");
let fond = document.querySelector(".fond");
let info = document.querySelector(".requin-squelette.infos");
let infoTextInner = info.querySelector("span");
let attribute = false;

// @TODO : Oh nooon.. c'est trop lourd.. Il y ba bcp trop de path.. bcp trop de boucle dans mon foreach du coup

let bonesSelect = () => {
  peau.addEventListener("click", (evt) => {
    gsap.to(peau, {
      duration: 1,
      opacity: 0,
      onComplete: () => {
        peau.style.display = "none";
      },
    });
  });
  groupBonesSvgContainer.forEach((groupe) => {
    let bones = groupe.querySelectorAll("path");
    groupe.addEventListener("mouseover", (evt) => {
      attribute = groupe.getAttribute("data-squelette");
      bones.forEach((bone) => {
        bone.style.color = "white";
      });
    });
    groupe.addEventListener("mouseout", (evt) => {
      attribute = false;
      bones.forEach((bone) => {
        bone.style.color = "black";
      });
    });
  });
};

let infoPosition = () => {
  requinSquelette.addEventListener("mousemove", (evt) => {
    var x = evt.pageX;
    var y = evt.pageY;

    info.style.left = x + 1 + "px";
    info.style.top = y + 1 + "px";

    infoTextInner.innerHTML = attribute;
    displaySpan();
  });
};

let displaySpan = () => {
  if (attribute == false) {
    info.style.display = "none";
  } else {
    info.style.opacity = "1";
    info.style.display = "block";
  }
};

let interactionBones = () => {
  bonesSelect();
  infoPosition();
};

export { interactionBones };
