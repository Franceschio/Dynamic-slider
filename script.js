//
function arrowProperties() {
  firstArrowEl.addEventListener("click", () => {
    if (counter > 0) {
      counter--;
      imageEl.setAttribute("src", images[counter]);
    } else if (counter == 0) {
      counter = images.length - 1;
      imageEl.setAttribute("src", images[counter]);
    }
  });

  secondArrowEl.addEventListener("click", () => {
    if (counter < images.length - 1) {
      counter++;
      imageEl.setAttribute("src", images[counter]);
    } else if (counter == images.length - 1) {
      counter = 0;
      imageEl.setAttribute("src", images[counter]);
    }
  });
}

function createCircles() {
  for (let i = 0; i < images.length; i++) {
    const circleEl = document.createElement("div");
    let nCircle = i + 1;
    circleEl.id = i;
    if (nCircle >= 151) {
      const warningEl = document.createElement("h2");
      warningEl.id = "warning";
      warningEl.textContent =
        "Hai già raggiunto il numero massimo di immagini.";
      document.body.appendChild(warningEl);
      break;
    }

    circlesEl.appendChild(circleEl);

    circleEl.textContent = nCircle;

    if (counter == circleEl.id) {
      circleEl.className = "checked";
    } else if (counter != circleEl.id) {
      circleEl.className = "unchecked";
    }

    if (nCircle > 99) {
      circleEl.style.width = "15px";
      circleEl.style.height = "12px";
    }

    circleEl.addEventListener("click", () => {
      if (circleEl.id != counter) {
        counter = circleEl.id;
        imageEl.setAttribute("src", images[counter]);
        circleEl.className = "checked";
      }
    });

    circlesEl.addEventListener("click", () => {
      if (counter == circleEl.id) {
        circleEl.className = "checked";
      } else if (counter != circleEl.id) {
        circleEl.className = "unchecked";
      }
    });

    firstArrowEl.addEventListener("click", () => {
      if (counter == circleEl.id) {
        circleEl.className = "checked";
      } else {
        circleEl.className = "unchecked";
      }
    });

    secondArrowEl.addEventListener("click", () => {
      if (counter == circleEl.id) {
        circleEl.className = "checked";
      } else {
        circleEl.className = "unchecked";
      }
    });
  }
}

const mainTitleEl = document.createElement("h1");
const mainEl = document.createElement("main");
const firstbtnEl = document.createElement("section");
const firstArrowEl = document.createElement("div");
const secondbtnEl = document.createElement("section");
const secondArrowEl = document.createElement("div");
const sliderEl = document.createElement("section");
const illustratorEl = document.createElement("div");
const imageContainerEl = document.createElement("div");
const imageEl = document.createElement("img");
const circlesEl = document.createElement("div");
const images = [
  "https://picsum.photos/id/243/800/800",
  "https://picsum.photos/id/376/800/800",
  "https://picsum.photos/id/456/800/800",
  "https://picsum.photos/id/459/800/800",
  "https://picsum.photos/id/700/800/800",
  "https://picsum.photos/id/789/800/800",
  "https://picsum.photos/id/256/800/800",
  "https://picsum.photos/id/130/800/800",
  "https://picsum.photos/id/131/800/800",
  "https://picsum.photos/id/133/800/800",
];
let counter = 0;

if (images.length >= 30) {
  sliderEl.style.height = "550px";
  circlesEl.style.height = "30%";
}
if (images.length >= 60) {
  sliderEl.style.height = "650px";
  circlesEl.style.height = "40%";
}
if (images.length >= 90) {
  sliderEl.style.height = "750px";
  circlesEl.style.height = "50%";
}
if (images.length >= 120) {
  sliderEl.style.height = "900px";
  circlesEl.style.height = "50%";
}

document.body.append(mainTitleEl, mainEl);
sliderEl.append(illustratorEl, circlesEl);
illustratorEl.appendChild(imageContainerEl);
imageContainerEl.appendChild(imageEl);
firstbtnEl.appendChild(firstArrowEl);
secondbtnEl.appendChild(secondArrowEl);
mainEl.append(firstbtnEl, sliderEl, secondbtnEl);

mainTitleEl.className = "mainTitle";
sliderEl.className = "slider";
illustratorEl.className = "illustration";
imageContainerEl.className = "sliderImage";
imageEl.className = "mainImage";
firstbtnEl.className = "firstBtn";
secondbtnEl.className = "secondBtn";
firstArrowEl.className = "leftArrow";
secondArrowEl.className = "rightArrow";
circlesEl.className = "circlesContainer";

mainTitleEl.textContent = "Slider";
firstArrowEl.textContent = "<";
secondArrowEl.textContent = ">";

imageEl.setAttribute("src", images[0]);

arrowProperties();

createCircles();
