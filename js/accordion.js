const plusBtn = document.querySelectorAll(".plus");

plusBtn.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("transform");
    const content = item.parentNode.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      document.querySelectorAll(".content").forEach((el) => {
        content.style.maxHeight = content.scrollHeight + "px";
      });
    }
  });
});
