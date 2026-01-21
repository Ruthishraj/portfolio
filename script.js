/* HAMBURGER MENU */
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

/* SCROLL ANIMATION */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

/* VIDEO ROTATION PER SECTION */
document.querySelectorAll(".bg-video").forEach(video => {
  const videos = video.dataset.videos.split(",");
  let index = 0;

  video.src = videos[index];
  video.play();

  setInterval(() => {
    index = (index + 1) % videos.length;
    video.style.opacity = 0;

    setTimeout(() => {
      video.src = videos[index];
      video.load();
      video.play();
      video.style.opacity = 1;
    }, 1000);
  }, 7000);
});
