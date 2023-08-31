const icons = Array.from(document.querySelectorAll(".fa-heart"));

for (const icon of icons) {
  const onLikeToggle = () => {
    if (icon.classList == "fa-solid fa-heart") {
      icon.classList = "fa-solid fa-heart heart";
    } else icon.classList = "fa-solid fa-heart";
  };

  icon.addEventListener("click", onLikeToggle);
}
