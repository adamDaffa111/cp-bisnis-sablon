// navbar 
document.querySelector('.toggle-btn').addEventListener('click',(e) => {
  e.target.parentElement.previousElementSibling.classList.toggle('show-menu');
});