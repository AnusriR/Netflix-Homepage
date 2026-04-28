window.addEventListener("scroll", function(){
  const navbar = document.querySelector(".navbar");
  if(window.scrollY > 50){
    navbar.style.background = "black";
  }else{
    navbar.style.background = "rgba(0,0,0,0.7)";
  }
});

// Modal functionality
const previewModal = document.getElementById('previewModal');
const infoModal = document.getElementById('infoModal');
const playOverlay = document.getElementById('playOverlay');

// Movie data for posters (title, description, bg image)
const movieData = [
  // Trending Now
  {title: "Stranger Things", desc: "When a young boy disappears...", bg: "https://images.unsplash.com/photo-1489599169698-6a9dfc62358b?w=900"},
  {title: "Wednesday", desc: "She’s spent her life plotting revenge...", bg: "https://images.unsplash.com/photo-1675410842547-0f3b3d7c3b99?w=900"},
  {title: "The Crown", desc: "Follows the political rivalries...", bg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900"},
  {title: "Squid Game", desc: "Hundreds of cash-strapped players...", bg: "https://images.unsplash.com/photo-1634568017418-2a2f7640eac7?w=900"},
  {title: "The Witcher", desc: "Geralt of Rivia journeys toward...", bg: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900"},
  
  // Popular Movies
  {title: "Avatar", desc: "A paraplegic Marine dispatched...", bg: "https://images.unsplash.com/photo-1682407186183-10a7e5b10d55?w=900"},
  {title: "Avengers", desc: "Earth's mightiest heroes must...", bg: "https://images.unsplash.com/photo-1549576490-b0b4831e7a06?w=900"},
  {title: "Oppenheimer", desc: "The story of American scientist...", bg: "https://images.unsplash.com/photo-1682695796497-1fc68f6a2f60?w=900"},
  {title: "Dune", desc: "Paul Atreides unites with...", bg: "https://images.unsplash.com/photo-1642814115115-1601a90e8e3c?w=900"},
  {title: "John Wick", desc: "John Wick uncovers a path...", bg: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900"}
];

// Hero buttons
document.querySelector('.play-btn').addEventListener('click', function() {
  playOverlay.style.display = 'block';
});

document.querySelector('.info-btn').addEventListener('click', function() {
  infoModal.style.display = 'block';
});

// Poster clicks
document.querySelectorAll('.row-posters img').forEach((img, index) => {
  img.addEventListener('click', function() {
    const data = movieData[index];
    document.querySelector('.modal-img').style.backgroundImage = `url(${data.bg})`;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDesc').textContent = data.desc;
    previewModal.style.display = 'block';
  });
});

// Modal close buttons
document.querySelectorAll('.close').forEach(closeBtn => {
  closeBtn.addEventListener('click', function() {
    previewModal.style.display = 'none';
    infoModal.style.display = 'none';
  });
});

document.querySelector('.close-play').addEventListener('click', function() {
  playOverlay.style.display = 'none';
});

// Close modals on outside click
window.addEventListener('click', function(event) {
  if (event.target === previewModal) previewModal.style.display = 'none';
  if (event.target === infoModal) infoModal.style.display = 'none';
  if (event.target === playOverlay) playOverlay.style.display = 'none';
});

// Modal play buttons
document.querySelector('.play-btn-modal').addEventListener('click', function() {
  previewModal.style.display = 'none';
  playOverlay.style.display = 'block';
});

document.querySelectorAll('.infoModal .play-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    infoModal.style.display = 'none';
    playOverlay.style.display = 'block';
  });
});
