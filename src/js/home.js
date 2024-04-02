const $content = document.querySelector("#contents");

function createHome() {
  $content.innerHTML = `
  <div class="p-4 mt-14">
  <div
    class="text-black text-2xl mb-4 p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-center"
  >
    <img src="./src/assets/Logo.png" alt="" />
  </div>
    `;
}
