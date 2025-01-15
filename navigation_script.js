const button = document.getElementById('scrollButton');
const targetSection = document.getElementById('div3');
button.addEventListener('click', () => {
  targetSection.scrollIntoView({
  behavior: 'smooth', 
});
});
document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
  e.preventDefault(); 
  const targetId = this.getAttribute('href'); 
  const targetElement = document.querySelector(targetId); 

targetElement.scrollIntoView({
  behavior: 'smooth',
});
});
});
document.querySelectorAll('nav_pc a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
  e.preventDefault(); 
  const targetId = this.getAttribute('href'); 
  const targetElement = document.querySelector(targetId); 

targetElement.scrollIntoView({
  behavior: 'smooth', // Enable smooth scrolling
});
});
});
