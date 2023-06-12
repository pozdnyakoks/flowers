export default function delivery() {
  return `
    <section class="delivery section">
      <div class="container">
        <h2 class="title1 delivery-title">условия доставки, оплаты и возврата средств</h2>
        <p class='title3 delivery-desc'>срочная доставка <span>Мы бережем ваше время</span></p>
        <div class="delivery-block">
          <ul class="delivery-list">
            <li class="delivery-list-item">
              <h3 class="delivery-list-item-title title22">Готовые букеты в наличии
              </h3>
              <p class="delivery-list-item-desc title3">Каждый день мы подготавливаем витрину готовых букетов для
                быстрого заказа.<br>
                Актуальная информация содержится в инстаграм.</p>
            </li>
            <li class="delivery-list-item">
              <h3 class="delivery-list-item-title title22">Выбор букета в течение 10 минут
              </h3>
              <p class="delivery-list-item-desc title3">Наш менеджер вышлет вам фотографии готовых букетов с ценами.<br>
                Букет сразу отправляется на доставку.</p>
            </li>
            <li class="delivery-list-item">
              <h3 class="delivery-list-item-title title22">Курьер доставит лично в руки
              </h3>
              <p class="delivery-list-item-desc title3">В нашей компании профессиональные курьеры с опытом работы более
                года.<br>
                Так же можем отправить сопутствующие подарки.</p>
            </li>
            <li class="delivery-list-item">
              <h3 class="delivery-list-item-title title22">Поздравление
              </h3>
              <p class="delivery-list-item-desc title3">Мы можем подписать открытку с поздравительным текстом
                <br> или курьер передаст ваше пожелание.
              </p>
            </li>
          </ul>
          <img src="./src/assets/img/images/delivery.jpg" alt="букет цветов">
        </div>
      </div>
      <div class="delivery-info">
        <p class="delivery-info-desc title22">Заказы на сайте принимаются до 21:00. Доставляем от 60 минут!<br>
          Вы можете оплатить через менеджера, либо через курьера.</p>
      </div>

      <div class="container delivery-table-block">
        <div class="delivery-switcher-block">
          <h3 class="title3 delivery-down-title">Стоимость доставки</h3>
          <div class="switcher-radios">
            <label class="switch-label">
              <input type="radio" class="switch-radio" name="cityDelivery" value="Moscow" checked>
              <span>Москва</span>
            </label>
            <label class="switch-label">
              <input type="radio" class="switch-radio" name="cityDelivery" value="Cheboksary">
              <span>Чебоксары</span>
            </label>
          </div>
        </div>


        <table class="delivery-table">
          <tr>
            <th colspan="2" class="title2 delivery-table-title" scope="col">Обычная доставка</td>
            <th class="delivery-table-line" rowspan="4"><svg width="58" height="203" viewBox="0 0 58 203" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <line x1="57.4812" y1="0.135787" x2="0.48121" y2="202.136" stroke="#E7B588" />
              </svg></th>
            <th colspan="3" class="title2 delivery-table-title" scope="col">Доставка в праздничные дни <span>(День мамы,
                14
                февраля, 8 марта)</span></th>
          </tr>
          <tr>
            <td class="delivery-table-item title22" scope="row">При покупке до 2 500 ₽</td>
            <td class="delivery-table-item-price title23">250 ₽</td>
            <td class="delivery-table-item title22" scope="row">При покупке до 3 000 ₽</td>
            <td class="delivery-table-item-price title23">300 ₽</td>
            <td rowspan="3"></td>
          </tr>
          <tr>
            <td class="delivery-table-item title22" scope="row">При покупке от 2 500 ₽</td>
            <td class="delivery-table-item-price title23">бесплатно</td>
            <td class="delivery-table-item title22" scope="row">При покупке от 3 000 ₽</td>
            <td class="delivery-table-item-price title23">бесплатно</td>
          </tr>
          <tr>
            <td class="delivery-table-item title22" scope="row">Доставка в Новочебоксарск/Кугеси/Чандрово/Новый
              город/Яуши*</td>
            <td class="delivery-table-item-price title23">350 ₽</td>

            <td class="delivery-table-item title22" scope="row">Доставка в Новочебоксарск/Кугеси/Чандрово/Новый
              город/Яуши*</td>
            <td class="delivery-table-item-price title23">400 ₽</td>
          </tr>

        </table>
        <p class="delivery-table-block-desc title22">*Расчет доставки в другие населенные пункты производится менеджером
        </p>
      </div>
    </section>

`
}