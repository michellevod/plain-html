document.addEventListener('DOMContentLoaded', function () {

  // =====================================================
  // SHOPPING CART FUNCTIONALITY
  // =====================================================
  let addToCartButtons = document.getElementsByClassName('product__AddToCartBtn')

  for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
  }

  function addToCartClicked(event) {
    let button = event.target.closest('.product__AddToCartBtn')
    let shopItem = button.closest('.product__Card')

    // ✅ if already selected, deselect and remove from cart
    if (shopItem.classList.contains('selected')) {
      shopItem.classList.remove('selected')

      document.querySelectorAll('.cart__item').forEach(cartItem => {
        let cartTitle = cartItem.querySelector('.product__Name p').innerText
        let cardTitle = shopItem.querySelector('.product__textcontent p').innerText
        if (cartTitle === cardTitle) cartItem.closest('div').remove()
      })

      updateCartTotal()
      return
    }

    shopItem.classList.add('selected')

    let imageSrc = shopItem.querySelector('.product__Image img').src
    let textContent = shopItem.querySelectorAll('.product__textcontent p')
    let title = textContent[0].innerText
    let weight = textContent[1].innerText
    let price = shopItem.getElementsByClassName('product__Price')[0].innerText

    // 🎨 Theme vom übergeordneten Element holen
    let themedParent = shopItem.closest('[class*="theme-"]')
    let themeClass = themedParent
      ? Array.from(themedParent.classList).find(c => c.startsWith('theme-'))
      : null

    addItemToCart(title, imageSrc, weight, price, themeClass, shopItem)
  }

  function addItemToCart(title, imageSrc, weight, price, themeClass, shopItem) {
    let popOverCartItem = document.createElement("div")
    let cartItems = document.getElementsByClassName("cart__item__Container")[0]

    let CartItemContent = `
      <div class="cart__item">
        <div class="cart__item__price"><p>${price}</p></div>
        <div class="cart__item__image"><img src="${imageSrc}" alt="${title}" /></div>
        <div class="product__Name textcontent"><p>${title}</p></div>
        <div class="product__Weight textcontent"><p>${weight}</p></div>
        <div class="cart__item__counter">
          <input type="number" value="1" name="quantity" min="1" max="5" />
        </div>
        <div class="cart__item__remove">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="rgba(213, 6, 6, 1.00)" d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c9.4-9.4 24.6-9.4 33.9 0l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9z"/>
          </svg>
        </div>
      </div>`

    popOverCartItem.innerHTML = CartItemContent
    cartItems.append(popOverCartItem)

    // 🎨 Theme auf Cart Item anwenden
    let cartItem = popOverCartItem.querySelector('.cart__item')
    if (themeClass) cartItem.classList.add(themeClass)

    // ✅ Counter: update total on change
    popOverCartItem.querySelector('.cart__item__counter input').addEventListener('input', function () {
      updateCartTotal()
    })

    // ✅ Remove Button
    popOverCartItem
      .querySelector('.cart__item__remove')
      .addEventListener('click', function () {
        popOverCartItem.remove()

        // ✅ De-select the product card
        document.querySelectorAll('.product__Card.selected').forEach(card => {
          let cardTitle = card.querySelector('.product__textcontent p').innerText
          if (cardTitle === title) card.classList.remove('selected')
        })

        updateCartTotal()
      })

    updateCartTotal()
  }

  function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart__item__Container')[0]
    let cartItems = cartItemContainer.getElementsByClassName('cart__item')

    let total = 0

    for (let i = 0; i < cartItems.length; i++) {
      let priceElement = cartItems[i].querySelector('.cart__item__price p')
      let price = parseFloat(priceElement.innerText.replace('€', '').replace(',', '.').trim())
      let quantity = parseInt(cartItems[i].querySelector('.cart__item__counter input').value)
      total += price * quantity
    }

    total = Math.round(total * 100) / 100

    // ✅ Update ALL .cart__total p elements (cart + sticky button)
    document.querySelectorAll('.cart__total p').forEach(el => {
      el.innerText = total.toFixed(2).replace('.', ',') + '€'
    })
  }

  // =====================================================
  // POPOVER / FORM SUBMIT
  // =====================================================
  const form = document.querySelector('form.cart__Inner__Container')
  const popover = document.getElementById('checkout__Success')

  form.addEventListener('submit', function (e) {
    e.preventDefault()
    popover.showPopover()
  })

  popover.querySelector('.checkout__Btn .btn-secondary').addEventListener('click', () => {
    popover.hidePopover()
  })

  // =====================================================
  // MOBILE STICKY BUTTON — scroll to cart
  // =====================================================
  const mobileStickyBtn = document.querySelector('.mobile_sticky_btn')
  const cartContainer = document.querySelector('.cart__Container')

  if (mobileStickyBtn) {
    mobileStickyBtn.addEventListener('click', () => {
      cartContainer.scrollIntoView({ behavior: 'smooth' })
    })
  }

  // Hide sticky button when cart is visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (mobileStickyBtn) {
        mobileStickyBtn.style.opacity = entry.isIntersecting ? '0' : '1'
        mobileStickyBtn.style.pointerEvents = entry.isIntersecting ? 'none' : 'auto'
      }
    })
  }, { threshold: 0.1 })

  if (cartContainer) observer.observe(cartContainer)

})