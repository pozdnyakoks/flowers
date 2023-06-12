export default function presents() {
  return `

    <section class="presents">
      <div class="container">
        <div class="presents-titles">
          <h2 class="title23 presents-title">Открытки</h2>
          <button class="title4 presents-title-btn" disabled>смотреть все</button>
        </div>
        <ul class="presents-list">
          <li class="presents-list-item">
            <img class="presents-list-item-img" src="./src/assets/img/presentImages/card1.jpg" alt="">
            <div class="presents-list-item-block">
              <div class="presents-list-item-info">
                <h4 class="title4 presents-list-item-name">
                  Открытка 1
                </h4>
                <p class="presents-list-item-price">100 ₽</p>
              </div>
              <button class="small-btn presents-list-item-btn" aria-label="в корзину">
                <img src="./src/assets/img/icons/bag.svg" alt="корзина">
              </button>
            </div>
          </li>
        </ul>
        <div class="presents-titles">
          <h2 class="title23 presents-title">Игрушки</h2>
          <button class="title4 presents-title-btn" disabled>смотреть все</button>
        </div>
        <ul class="presents-list">
          <li class="presents-list-item">
            <img class="presents-list-item-img" src="./src/assets/img/presentImages/toy1.jpg" alt="">
            <div class="presents-list-item-block">
              <div class="presents-list-item-info">
                <h4 class="title4 presents-list-item-name">
                  Игрушка 1
                </h4>
                <p class="presents-list-item-price">1 000 ₽</p>
              </div>
              <button class="small-btn presents-list-item-btn" aria-label="в корзину">
                <img src="./src/assets/img/icons/bag.svg" alt="корзина">
              </button>
            </div>
          </li>
        </ul>

      </div>
    </section>
`
}