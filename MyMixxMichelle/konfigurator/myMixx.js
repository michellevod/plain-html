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

// SHOPPING CART FUNCTIONALITY //
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

  addItemToCart(title, imageSrc, weight, price)
}

function addItemToCart (title, imageSrc, weight, price) {
  var popOverCartItem = document.createElement("div")
  var cartItems = document.getElementsByClassName("cart-items")[0]

  var CartItemContent = `  
    <div class="cart-item">
      <img class="productImage imageFrame" src="${imageSrc}" />
      <span class="cart-item-title">${title}</span>
      <span class="cart-price">${price}</span>
      <span class="cart-weight">${weight}</span>
      <i class="removeButton fa-solid fa-trash-can"></i>
    </div>`

  popOverCartItem.innerHTML = CartItemContent
  cartItems.append(popOverCartItem)

  // ✅ REMOVE BUTTON FOR THIS ITEM
  popOverCartItem
    .getElementsByClassName('removeButton')[0]
    .addEventListener('click', function (event) {
      event.target.closest('.cart-item').remove()
      updateCartTotal()
    })

  // ✅ UPDATE TOTAL AFTER ADD
  updateCartTotal()
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartItems = cartItemContainer.getElementsByClassName('cart-item')

  var total = 0

  for (var i = 0; i < cartItems.length; i++) {
    var cartItem = cartItems[i]
    var priceElement = cartItem.getElementsByClassName('cart-price')[0]
    var price = parseFloat(priceElement.innerText.replace('€', '').trim())
    total += price
  }

  total = Math.round(total * 100) / 100

  // ✅ UPDATE ALL TOTALS (popover + sticky button)
  var totalElements = document.getElementsByClassName('cart-total-price')

  for (var i = 0; i < totalElements.length; i++) {
    totalElements[i].innerText = total.toFixed(2) + '€'
  }
}
