// navbar 
document.querySelector('.toggle-btn').addEventListener('click',(e) => {
  e.target.parentElement.previousElementSibling.classList.toggle('show-menu');
});


// video popup
const video = document.querySelector('.preview-video');

document.querySelector('.play-btn').addEventListener('click',() => {
  document.querySelector('.popup-video').classList.add('show');
  video.play();
  document.querySelector('.popup-video').addEventListener('click',(e) => {
    if (e.target.className != 'preview-video') {
      document.querySelector('.popup-video').classList.remove('show');
      video.pause();
    }
  });
});

