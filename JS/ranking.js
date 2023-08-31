const items = Array.from(document.querySelectorAll(".ranking__item"));

for (const item of items) {
  const eventIdx = items.indexOf(item);

  const onActive = () => {
    let preset = item.childNodes[1].children[0];
    let active = item.childNodes[1].children[1];

    preset.style.display = "none";
    active.style.display = "flex";

    onPreset();
  };

  const onPreset = () => {
    for (const remain of items) {
      let preset = remain.childNodes[1].children[0];
      let active = remain.childNodes[1].children[1];

      if (items.indexOf(remain) != eventIdx) {
        preset.style.display = "flex";
        active.style.display = "none";
      }
    }
  };

  item.addEventListener("mouseenter", onActive);
}
