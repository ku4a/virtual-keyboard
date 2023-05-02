export default class Keyboard {
  lang = localStorage.getItem('lang') === null ? 0 : localStorage.getItem('lang');

  symbols = [];

  modCapslock = 0;

  modShift = 0;

  modCtrl = 0;

  modMeta = 0;

  modAlt = 0;

  modEslint = 0;

  constructor() {
    const LANG = parseInt(this.lang, 10);
    const keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    keyboard.setAttribute('id', 'keyboard');
    fetch('public/json/mac-keabord.json').then((res) => res.json()).then((symbols) => {
      this.symbols = symbols;
      for (let i = 0; i < 5; i += 1) {
        const keyboardRow = document.createElement('div');
        keyboardRow.className = 'row';
        keyboard.append(keyboardRow);

        symbols.forEach((item) => {
          if (item.row === i) {
            const keyboardKey = document.createElement('div');
            keyboardKey.innerHTML = item.clean[LANG];
            keyboardKey.className = item.style;
            keyboardKey.dataset.code = item.code;

            keyboardRow.append(keyboardKey);
          }
        });
      }
    });
    document.body.append(keyboard);
  }

  getSymbol(code) {
    this.modEslint = 1;
    return this.symbols.find((el) => el.code === code);
  }

  animationAdd(code) {
    this.modEslint = 1;
    /* eslint-disable-next-line */
    document.querySelector("[data-code = '" + code + "']").classList.add('active');
  }

  animationRemove(code) {
    this.modEslint = 1;
    /* eslint-disable-next-line */
    document.querySelector("[data-code = '" + code + "']").classList.remove('active');
  }

  refresh() {
    const keys = document.querySelectorAll('.normal');
    let keyJson = '';
    let keyDiv = {};

    /* eslint-disable-next-line */
    for (const key of keys) {
      keyJson = this.symbols.find((el) => el.code === key.dataset.code);
      /* eslint-disable-next-line */
      keyDiv = document.querySelector("[data-code = '" + key.dataset.code + "']");

      if (this.modShift || this.modCapslock) {
        keyDiv.innerHTML = keyJson.shiftKey[this.lang];
      } else if (this.modCtrl) {
        keyDiv.innerHTML = keyJson.ctrlKey[this.lang];
      } else if (this.modAlt) {
        keyDiv.innerHTML = keyJson.altKey[this.lang];
      } else {
        keyDiv.innerHTML = keyJson.clean[this.lang];
      }
    }
  }

  getModCapslock() {
    return this.modCapslock;
  }

  getModShift() {
    return this.modShift;
  }

  getModCtrl() {
    return this.modCtrl;
  }

  getModAlt() {
    return this.modAlt;
  }

  getModMeta() {
    return this.modMeta;
  }

  getLang() {
    return this.lang;
  }

  switchLang() {
    if (parseInt(this.lang, 10) === 0) {
      this.lang = 1;
    } else {
      this.lang = 0;
    }
    localStorage.setItem('lang', this.lang);
  }
}
