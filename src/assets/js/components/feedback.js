export default function feedback() {


  return `
 <div class="feedback">
      <div class="feedback-content">
        <button class="feedback-close" aria-label="закрыть окно">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1667 25.8333L25.8334 14.1666" stroke="#191919" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M25.8334 25.8333L14.1667 14.1666" stroke="#191919" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
        <h2 class="feedback-title title1">Обратная связь</h2>
        <p class="feedback-desc title23">Будем рады вашим предложениям по улучшению нашей работы ;)</p>
        <form action="/" class="feedback-form">
          <input class="feedback-input" id="feedbackName" type="text" placeholder="Ваше имя">
          <label for="feedbackName" class="feedback-line"></label>
          <input class="feedback-input" id="feedbackEmail" type="email" placeholder="Ваш email">
          <label for="feedbackEmail" class="feedback-line"></label>
          <input class="feedback-input" id="feedbackPhone" type="tel" placeholder="Ваш телефон">
          <label for="feedbackPhone" class="feedback-line"></label>
          <textarea class="feedback-textarea" name="feedback-wishes" id="feedbackWishes" cols="30" rows="10"
            placeholder="Ваши пожелания"></textarea>
          <button class="feedback-btn huge-btn title1">отправить</button>
        </form>
      </div>
    </div>
`
}