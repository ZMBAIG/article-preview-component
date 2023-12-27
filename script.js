const shareMedia = document.getElementById("share__media");
const btn = document.getElementById("toggleBtn");
btn.addEventListener("click", (e) => {
  shareMedia.classList.toggle("hidden");
});
