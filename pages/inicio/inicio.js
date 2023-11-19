let slideIndex = 0;


export function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slider-item");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2000); // Cambia la imagen cada 2 segundos
  return;
}