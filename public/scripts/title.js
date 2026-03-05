const track = document.querySelector('.track');

let position = 0;
const speed = 0.5; // pixels per frame (adjust this)

function animate() {
  position -= speed;

  // reset seamlessly when half the track has scrolled
  if (Math.abs(position) >= track.scrollWidth / 2) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();