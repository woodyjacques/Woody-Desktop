const toggleButtons = document.querySelectorAll(".toggle-sidebar");
const sidebars = document.getElementById("logo-sidebar");
toggleButtons.forEach((toggleButtons) => {
  toggleButtons.addEventListener("click", () => {
    if (sidebars.classList.contains("-translate-x-full")) {
      sidebars.classList.remove("-translate-x-full");
    } else {
      sidebars.classList.add("-translate-x-full");
    }
  });
});

function truncateDescription(description, maxLength) {
  if (description.length <= maxLength) {
    return description;
  } else {
    return `${description.slice(0, maxLength)}...`;
  }
}