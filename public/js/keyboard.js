export class Keyboard {
    lang = localStorage.getItem('lang') === null ? 0 : localStorage.getItem('lang');
    symbols = [];

    modCapslock = 0;
    modShift = 0;
    modCtrl = 0;
    modMeta = 0;
    modAlt = 0;



    constructor() {
        const LANG = parseInt(this.lang);



        let keyboard = document.createElement('div');
        keyboard.className = "keyboard";
        keyboard.setAttribute("id", "keyboard");

        fetch('public/json/mac-keabord.json').then(res => res.json()).then(symbols => {

            this.symbols = symbols;

            for (let i = 0; i < 5; i++) {

                let keyboard_row = document.createElement('div');
                keyboard_row.className = "row";
                keyboard.append(keyboard_row);

                symbols.forEach(function (item) {
                    if (item.row === i) {
                        let keyboard_key = document.createElement('div');
                        keyboard_key.innerHTML = item.clean[LANG];
                        keyboard_key.className = item.style;
                        keyboard_key.dataset.code = item.code;

                        keyboard_row.append(keyboard_key);
                    }
                });
            }

        })


        document.body.append(keyboard);
        //this.name = name;
    }


    getSymbol(code) {
        let symbol = this.symbols.find(el => el.code === code);
        return symbol ? symbol : false;
    }


    animationAdd(code) {
        document.querySelector("[data-code = '" + code + "']").classList.add("active");
    }

    animationRemove(code) {
        document.querySelector("[data-code = '" + code + "']").classList.remove("active");
    }

    refresh() {

        let keys = document.querySelectorAll(".normal");
        let keyJson = '';
        let keyDiv = {};

        for (let key of keys) {


            keyJson = this.symbols.find(el => el.code === key.dataset.code);
            keyDiv = document.querySelector("[data-code = '" + key.dataset.code + "']");

            if (this.modShift || this.modCapslock) {
                keyDiv.innerHTML = keyJson.shiftKey[this.lang]
            } else if (this.modCtrl) {
                keyDiv.innerHTML = keyJson.ctrlKey[this.lang]
            } else if (this.modAlt) {
                keyDiv.innerHTML = keyJson.altKey[this.lang]
            } else {

                keyDiv.innerHTML = keyJson.clean[this.lang]
            }

        }

    }

    getModShift() {
        return this.modShift;
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

    switchLang(){
        if (parseInt(this.lang) === 0) {
            this.lang = 1;
        } else {
            this.lang = 0;
        }
        localStorage.setItem("lang", this.lang);
    }
}