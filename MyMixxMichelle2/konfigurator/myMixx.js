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
}, 4000);


const defaultButtonText = 'Hinzufügen';
const selectedButtonText = 'Entfernen';

const summaryContainer = document.getElementsByClassName('itemSumCard2')[0];
const summaryItemTemplate = document.getElementById('summaryItem');

console.log(summaryContainer, summaryItemTemplate)

const clickHandlerProductCard = (event) => {

  const button = event.currentTarget;

  const isNotSelected = defaultButtonText === button.textContent;
  
  if(true === isNotSelected){
    button.textContent = selectedButtonText;
  }else{
    button.textContent = defaultButtonText ;
  }
  
  const productCard = button.closest('.productCard2');

  console.log(productCard);

  const productId = productCard.getAttribute('data-id');

  const verpackung = productCard.querySelector('.weightBadge2 p').innerHTML;
  const preise = productCard.querySelector('.priceBadge2 p').innerHTML;

  const productImage = productCard.querySelector('img').src;
  const productName = productCard.querySelector('.cardName p').innerHTML;

  console.log(productId, productName,verpackung, preise, productImage)

  const summaryItem = summaryItemTemplate.cloneNode(true);

  summaryItem.style.display = 'flex';
  summaryItem.querySelector('img').src = productImage;
  summaryItem.querySelector('.itemSumName').innerHTML = productName;
  summaryItem.querySelector('.itemSumWeight').innerHTML = verpackung;

  summaryContainer.appendChild(summaryItem);

}

const productCards = document.querySelectorAll('.productCard2');

productCards.forEach(card => {

  const button = card.querySelector('button');
  button.addEventListener('click', clickHandlerProductCard);

});


