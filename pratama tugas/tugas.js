document.addEventListener("DOMContentLoaded", () => {
  const infoButtons = document.querySelectorAll(".info-button");

  infoButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const infoDiv = button.nextElementSibling;
      if (infoDiv.style.display === "block") {
        infoDiv.style.display = "none";
      } else {
        infoDiv.textContent = button.getAttribute("data-info");
        infoDiv.style.display = "block";
      }
    });
  });
});
