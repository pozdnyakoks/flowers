export default function header() {
  return `
    <header class="header">
      <div class="container">
        <div class="switcher-radios">
          <label class="switch-label">
            <input type="radio" class="switch-radio" name="city" value="Moscow" checked>
            <span>Москва</span>
          </label>
          <label class="switch-label">
            <input type="radio" class="switch-radio" name="city" value="Cheboksary">
            <span>Чебоксары</span>
          </label>
        </div>
        <div class="header-block">
          <a href="tel:89875750018" class="btn header-btn">+7 987 575 00 18</a>
          <img src="./src/assets/img/icons/logo-header.svg" alt="Литтл Олли - студия цветов и подарков">
          <button class="btn header-btn">заказать обратный звонок</button>
        </div>

        <nav class='header-nav'>
          <ul class="header-nav-list">
            <li class="header-nav-list-item active"><a href="">О НАС</a></li>
            <li class="header-nav-list-item"><a href="">БУКЕТЫ</a></li>
            <li class="header-nav-list-item"><a href="">ПОДАРКИ</a></li>
            <li class="header-nav-list-item"><a href="">ОПЛАТА И ДОСТАВКА</a></li>
            <li class="header-nav-list-item"><a href="">ПОДПИСКА</a></li>
            <li class="header-nav-list-item"><a href="">ОБУЧЕНИЕ</a></li>
            <li class="header-nav-list-item"><a href="">КОНТАКТЫ</a></li>
          </ul>
          <div class="header-icons">
            <button class="header-icon" aria-label="личный кабинет">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.1405 22.5203C17.2605 22.7911 16.2205 22.9161 15.0005 22.9161H9.00047C7.78047 22.9161 6.74047 22.7911 5.86047 22.5203C6.08047 19.812 8.75047 17.6765 12.0005 17.6765C15.2505 17.6765 17.9205 19.812 18.1405 22.5203Z"
                  stroke="#191919" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M15.0002 2.0835H9.00024C4.00024 2.0835 2.00024 4.16683 2.00024 9.37516V15.6252C2.00024 19.5627 3.14024 21.7189 5.86024 22.521C6.08024 19.8127 8.75024 17.6772 12.0002 17.6772C15.2502 17.6772 17.9202 19.8127 18.1402 22.521C20.8602 21.7189 22.0002 19.5627 22.0002 15.6252V9.37516C22.0002 4.16683 20.0002 2.0835 15.0002 2.0835ZM12.0002 14.7606C10.0202 14.7606 8.42024 13.0835 8.42024 11.021C8.42024 8.95851 10.0202 7.29183 12.0002 7.29183C13.9802 7.29183 15.5802 8.95851 15.5802 11.021C15.5802 13.0835 13.9802 14.7606 12.0002 14.7606Z"
                  stroke="#191919" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M15.5799 11.0204C15.5799 13.0829 13.9799 14.76 11.9999 14.76C10.0199 14.76 8.41992 13.0829 8.41992 11.0204C8.41992 8.95794 10.0199 7.29126 11.9999 7.29126C13.9799 7.29126 15.5799 8.95794 15.5799 11.0204Z"
                  stroke="#191919" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>

            <button class="header-icon" aria-label="корзина">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.7083 7.1875C17.7083 6.57193 17.5736 5.96239 17.3118 5.39367C17.0501 4.82496 16.6664 4.30821 16.1828 3.87294C15.6992 3.43766 15.125 3.09238 14.4931 2.85681C13.8612 2.62125 13.1839 2.5 12.5 2.5C11.816 2.5 11.1387 2.62125 10.5068 2.85681C9.87491 3.09238 9.30075 3.43766 8.81711 3.87294C8.33347 4.30821 7.94983 4.82496 7.68809 5.39367C7.42634 5.96239 7.29163 6.57193 7.29163 7.1875"
                  stroke="#191919" stroke-linecap="round" />
                <path
                  d="M18.1653 7.89014H6.84137C4.38721 7.89014 2.51177 10.0798 2.88888 12.5048L3.94084 19.2694C4.24383 21.2178 5.9215 22.6548 7.89333 22.6548H17.1134C19.0852 22.6548 20.7629 21.2178 21.0659 19.2694L22.1178 12.5048C22.4949 10.0798 20.6195 7.89014 18.1653 7.89014Z"
                  stroke="#191919" />
                <path
                  d="M15.625 12.5C15.625 12.9104 15.5442 13.3167 15.3871 13.6959C15.2301 14.075 14.9999 14.4195 14.7097 14.7097C14.4195 14.9999 14.075 15.2301 13.6959 15.3871C13.3167 15.5442 12.9104 15.625 12.5 15.625C12.0896 15.625 11.6833 15.5442 11.3041 15.3871C10.925 15.2301 10.5805 14.9999 10.2903 14.7097C10.0001 14.4195 9.76992 14.075 9.61288 13.6959C9.45583 13.3167 9.375 12.9104 9.375 12.5"
                  stroke="#191919" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </button>
          </div>
        </nav>
    </header>
`
}