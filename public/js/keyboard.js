export class Keyboard {
    lang = localStorage.getItem('lang') === null ? 0 : localStorage.getItem('lang');
    symbols = [];

    modShift = 0;
    modCapslock = 0;


    constructor() {
        const LANG = this.lang;

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
                        //console.log(item.code);

                        let keyboard_key = document.createElement('div');
                        keyboard_key.innerHTML = item.clean[LANG];
                        keyboard_key.className = item.style;
                        keyboard_key.dataset.code = item.code;

                        keyboard_row.append(keyboard_key);
                    }
                });
            }
            11

        })


        document.body.append(keyboard);
        //this.name = name;
    }


    getSymbol(code) {
        //console.log(code);
        //console.log(this.symbols.find(el => el.code === code));

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
        console.log("refresh");
        let keys = document.querySelectorAll(".normal");
        let keyJson = '';
        let keyDiv = {};

        for (let key of keys) {
            //console.log(key.dataset.code + ' = ' + this.symbols.find(el => el.code === key.dataset.code).shiftKey[0]);

            keyJson = this.symbols.find(el => el.code === key.dataset.code);
            keyDiv = document.querySelector("[data-code = '" + key.dataset.code + "']");

            if (this.modShift) {
                keyDiv.innerHTML = keyJson.shiftKey[0]
            } else {
                keyDiv.innerHTML = keyJson.clean[0]
            }

        }

    }

    getModShift() {
        return this.modShift;
    }

}