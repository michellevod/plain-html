
// IMAGE TRANSITIONS //
const images = [
  'img/ben-neale-cARNiGpmf70-unsplash.jpg',
  'img/julian-hochgesang-mfKjqdSIZDM-unsplash.jpg',
  'img/dimitris-asproloupos-qzRVPgqSWn4-unsplash.jpg',
  'img/carlee-jones-1lPSM8VIdBQ-unsplash.jpg'
]

let currentIndex = 0
const headerImage = document.getElementById('cerealImages')

setInterval(() => {
  // fade out
  headerImage.style.opacity = 0

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length
    headerImage.src = images[currentIndex]

    // fade in
    headerImage.style.opacity = 1
  }, 500) // half of CSS transition time
}, 4000)
