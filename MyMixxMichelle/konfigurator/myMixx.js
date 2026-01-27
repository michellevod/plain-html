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

// CART ITEM TRASHCAN REMOVAL BUTTON //
var removeCartItemButton = document.getElementsByClassName('removeButton')
console.log(removeCartItemButton)
for (var i = 0; i < removeCartItemButton.length; i++) {
  var button = removeCartItemButton[i]
  button.addEventListener('click', function (event) {
    var buttonClicked = event.target
    buttonClicked.closest('.cart-item').remove()
  })
}
// HINZUFÜGEN VON EINEM ITEM //

var addToCartButton = document.getElementsByClassName('addToCart')

for (var i = 0; i < addToCartButton.length; i++) {
  var button = addToCartButton[i]
  button.addEventListener('click', addToCartClicked)
}

function addToCartClicked (event) {
  var button = event.target
  var shopItem = button.closest('.productCard2')
  var imageSrc = shopItem.getElementsByClassName('productImage')[0].src
  var title = shopItem.getElementsByClassName('cardName')[0].innerText
  var weight = shopItem.getElementsByClassName('weightBadge2')[0].innerText
  var price = shopItem.getElementsByClassName('priceBadge2')[0].innerText
  console.log(title, imageSrc, weight, price)
  addItemToCart(title, imageSrc, weight, price)
}

function addItemToCart (title, imageSrc, weight, price )
var popOverCartItem = document.createElement ("div")
