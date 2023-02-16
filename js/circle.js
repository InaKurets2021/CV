const text = document.querySelector(".circle-animation__text");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) =>
      `<span class="circle-animation__char" style="transform:rotate(${
        i * 11
      }deg)">${char}</span>`
  )
  .join("");
