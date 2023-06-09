import runningString from "./components/runningString"

export default function switcher() {
  return `
    <div class="start-select">
      <div class="logo switch-logo">
        <img src="./src/assets/img/icons/logo.svg" alt="Литтл Олли - студия цветов и подарков">
      </div>
      <div class="switch">
        <h2 class='switch-title title1'>выберите город доставки</h2>
        <div class="switcher-radios">
          <label class="switch-label title12">
            <input type="radio" class="switch-radio" name="city" value="Moscow" checked>
            <span>Москва</span>
          </label>
          <label class="switch-label title12">
            <input type="radio" class="switch-radio" name="city" value="Cheboksary">
            <span>Чебоксары</span>
          </label>
        </div>
      </div>
    ${runningString()}
    </div>
  `
}