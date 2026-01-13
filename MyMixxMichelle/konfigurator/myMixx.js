// PRODUCT CARDS INSTALL //
const productCardTemplate = `
  <div class="productCard2">
    <div class="FlexBadges">
      <div class="weightBadge2"><p>500g</p></div>
      <div class="priceBadge2"><p>3,00€</p></div>
    </div>

    <div class="FlexImageTextButton">
      <div class="bowlImage2">
        <img src="img/haferflockenplaceholder.png" alt="bowlImage2" />
      </div>

      <div class="headlineCard">
        <p>Zarte <br />Haferflocken</p>
        <button class="btn">Hinzufügen</button>
      </div>
    </div>
  </div>
`

const basisGrid = document.getElementById('basis-CEREAL')

for (let i = 0; i < 21; i++) {
  basisGrid.innerHTML += productCardTemplate
}
const getrockneteFrGrid = document.getElementById('getrocknete-Fr')

// (sentence 1 ; sentence 2; sentence 3)
for (let i = 0; i < 13; i++) {
  getrockneteFrGrid.innerHTML += productCardTemplate
}

const NuesseSamenGrid = document.getElementById('Nuesse-Samen')

for (let i = 0; i < 12; i++) {
  NuesseSamenGrid.innerHTML += productCardTemplate
}

const SuperfoodsGrid = document.getElementById('super-Foods')

for (let i = 0; i < 11; i++) {
  SuperfoodsGrid.innerHTML += productCardTemplate
}

const extraSuessGrid = document.getElementById('extra-Su')
for (let i = 0; i < 7; i++) {
  extraSuessGrid.innerHTML += productCardTemplate
}

const FluessigkeitenGrid = document.getElementById('fluessig-SE')

for (let i = 0; i < 10; i++) {
  FluessigkeitenGrid.innerHTML += productCardTemplate
}



