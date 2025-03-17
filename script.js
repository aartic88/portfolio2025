const images = [
  "img/Academy_content.png",
  "img/Academy_content_table.png",
  "img/Academy_home.png",
  "img/Academy_mdx.png",
  "img/Academy_pdf.png",
  "img/Academy_problems.png",
];
let currentIndex = 0;

function openCarousel() {
  document.getElementById("carousel").style.display = "block";
  document.getElementById("carousel-image").src = images[currentIndex];
}
function closeCarousel() {
  document.getElementById("carousel").style.display = "none";
}
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("carousel-image").src = images[currentIndex];
}
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("carousel-image").src = images[currentIndex];
}

function updateDateTime() {
  const now = new Date();
  document.getElementById("datetime").innerText = now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

function validateForm(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("All fields are required!");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}
