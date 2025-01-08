const slides = [
    {
      imgSrc: "images/aryakadam.png",
      name: "arya kadam - 96.04%",
      words: "Outstanding in Mathematics and One of the bright students from the C division of the 10th batch 2024-25."
    },
    {
      imgSrc: "images/Miss.Mansavi-Sontakke.png",
      name: "miss. mansavi sontakke - 97.00%",
      words: "Excellent in Science and One of the bright students from the C division of the 10th batch 2024-25."
    },
    {
      imgSrc: "images/shreya-waswand-e1669259268929.png",
      name: "shreya waswand - 96.00%",
      words: "Top Scorer in Physics and One of the bright students from the C division of the 10th batch 2024-25."
    }
    // {
    //   imgSrc: "https://via.placeholder.com/150/7f7fff",
    //   name: "Jane Smith",
    //   words: "Excellent in Science"
    // }
  ];
  
let currentSlide_topper = 0;
  
function showSlide(index) {
  currentSlide_topper = index;
  const mainSlide = document.getElementById("mainSlide");
  const img = mainSlide.querySelector("img");
  const name = mainSlide.querySelector(".student-name");
  const words = mainSlide.querySelector(".appreciation-words");

  img.src = slides[currentSlide_topper].imgSrc;
  name.textContent = slides[currentSlide_topper].name;
  words.textContent = slides[currentSlide_topper].words;

  document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
    thumb.classList.toggle('active-thumbnail', i === currentSlide_topper);
  });
}

function nextSlide() {
  currentSlide_topper = (currentSlide_topper + 1) % slides.length;
  showSlide(currentSlide_topper);
}

// Auto-rotate every 4 seconds
setInterval(nextSlide, 4000);