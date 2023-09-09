const items = Array.from(document.querySelectorAll(".ranking__item"));

function findActive() {
  for (const item of items) {
    if (item.childNodes[1].children[1].style.display == "flex") {
      let previous = items.indexOf(item);
      return previous;
    }
  }
}

function onChangeMode(item) {
  let previous = findActive();
  let current = items.indexOf(item.target);

  if (previous !== current) {
    const currentPreset = item.target.childNodes[1].children[0];
    const currentActive = item.target.childNodes[1].children[1];

    const previousPreset = items[previous].childNodes[1].children[0];
    const previousActive = items[previous].childNodes[1].children[1];

    currentPreset.style.display = "none";
    currentActive.style.display = "flex";

    previousPreset.style.display = "flex";
    previousActive.style.display = "none";
  }

  previous = current;
}

items.forEach((item) => item.addEventListener("mouseenter", onChangeMode));
