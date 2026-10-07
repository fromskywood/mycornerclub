const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
function setupCarousel(trackId, prevId, nextId) {
  const track = document.getElementById(trackId);
  const prev = document.getElementById(prevId);
  const next = document.getElementById(nextId);
  function updateArrows() {
    prev.disabled = track.scrollLeft < 2;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
  }
  function move(direction) {
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = track.firstElementChild.getBoundingClientRect().width + gap;
    track.scrollBy({ left: direction * step, behavior: (reduced.matches || trackId === 'student-track') ? 'instant' : 'smooth' });
  }
  prev.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  track.addEventListener('scroll', updateArrows, { passive: true });
  window.addEventListener('resize', updateArrows);
  track.addEventListener('keydown', event => {
    // Keep the native video controls' keyboard shortcuts intact.
    if (event.target !== track) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1);
    }
  });
  updateArrows();
}
setupCarousel('review-track', 'review-prev', 'review-next');
setupCarousel('video-track', 'video-prev', 'video-next');
// Show a stable window of embeds: Instagram can reset a scrolling parent.
const studentTrack = document.getElementById('student-track');
const studentCards = [...studentTrack.children];
const studentPrev = document.getElementById('student-prev');
const studentNext = document.getElementById('student-next');
let studentIndex = 0;
function renderStudents() {
  const count = innerWidth <= 700 ? 1 : innerWidth <= 1100 ? 2 : 3;
  studentIndex = Math.max(0, Math.min(studentIndex, studentCards.length - count));
  studentCards.forEach((card, i) => { card.hidden = i < studentIndex || i >= studentIndex + count; });
  studentPrev.disabled = studentIndex === 0;
  studentNext.disabled = studentIndex + count >= studentCards.length;
}
studentPrev.addEventListener('click', () => { studentIndex--; renderStudents(); });
studentNext.addEventListener('click', () => { studentIndex++; renderStudents(); });
window.addEventListener('resize', renderStudents);
studentTrack.addEventListener('keydown', event => {
  if (event.target !== studentTrack) return;
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault(); studentIndex += event.key === 'ArrowRight' ? 1 : -1; renderStudents();
  }
});
renderStudents();
const dialog = document.querySelector('#review-dialog');
document.querySelectorAll('[data-review]').forEach(button => {
  button.addEventListener('click', () => {
    dialog.querySelector('img').src = button.dataset.review;
    dialog.showModal();
  });
});
dialog.querySelector('button').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
document.querySelectorAll('video').forEach(video => {
  video.addEventListener('play', () => document.querySelectorAll('video').forEach(other => {
    if (other !== video) other.pause();
  }));
});
