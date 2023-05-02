class Keyboard {
    #keyboardLang;
    #keyboardCase;
    #keyboardLayout = {
        keys: [
            ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"],
            ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete"],
            ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"],
            ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight"],
            ["ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"]
        ],
        rusLowerCase: [
            ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
            ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del"],
            ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
            ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift"],
            ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"]
        ],
        rusUpperCase: [
            ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace"],
            ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del"],
            ["CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter"],
            ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲", "Shift"],
            ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"]
        ],
        engLowerCase: [
            ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
            ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del"],
            ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
            ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift"],
            ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"]
        ],
        engUpperCase: [
            ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
            ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del"],
            ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter"],
            ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "▲", "Shift"],
            ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"]
        ]
    }

    constructor(keyboardLang) {
        this.#keyboardLang = keyboardLang;
        this.#keyboardCase = "caseDown";
    }

    render() {
        const main = document.querySelector('.main')
        const keyboard = document.createElement("div");
        keyboard.className = "keyboard";
        main.append(keyboard);
        this.addKeys()
        this.initListeners();
    }

    addKeys() {
        const keyboard = document.querySelector('.keyboard')
        for (let i = 0; i < this.#keyboardLayout.keys.length; i++) {
            const row = document.createElement("div");
            row.classList.add("row");
            for (let j = 0; j < this.#keyboardLayout.keys[i].length; j++) {
                const key = document.createElement("div");
                key.classList.add("key");
                key.classList.add(this.#keyboardLayout.keys[i][j]);

                const eng = document.createElement("span");
                eng.classList.add("eng");
                const engKeyCaseDown = document.createElement("span");
                engKeyCaseDown.classList.add("caseDown");
                engKeyCaseDown.textContent = this.#keyboardLayout.engLowerCase[i][j];
                const engKeyCaseUp = document.createElement("span");
                engKeyCaseUp.classList.add("caseUp");
                engKeyCaseUp.textContent = this.#keyboardLayout.engUpperCase[i][j];
                key.append(eng)
                eng.append(engKeyCaseDown);
                eng.append(engKeyCaseUp);

                const rus = document.createElement("span");
                rus.classList.add("rus");
                const rusKeyCaseDown = document.createElement("span");
                rusKeyCaseDown.classList.add("caseDown");
                rusKeyCaseDown.textContent = this.#keyboardLayout.rusLowerCase[i][j];
                const rusKeyCaseUp = document.createElement("span");
                rusKeyCaseUp.classList.add("caseUp");
                rusKeyCaseUp.textContent = this.#keyboardLayout.rusUpperCase[i][j];
                key.append(rus)
                rus.append(rusKeyCaseDown);
                rus.append(rusKeyCaseUp);
                row.append(key);
                if (this.#keyboardLang === 'eng') {
                    rus.classList.toggle("hidden");
                } else {
                    eng.classList.toggle("hidden");
                }
                if (this.#keyboardCase === "caseDown") {
                    engKeyCaseUp.classList.toggle("hidden");
                    rusKeyCaseUp.classList.toggle("hidden");
                } else {
                    engKeyCaseDown.classList.toggle("hidden");
                    rusKeyCaseDown.classList.toggle("hidden");
                }
            }
            keyboard.append(row)
        }
    }

    changeLang() {
        const langEnBtn = document.querySelectorAll('.eng')
        const langRuBtn = document.querySelectorAll('.rus')
        langEnBtn.forEach(elem => elem.classList.toggle('hidden'))
        langRuBtn.forEach(elem => elem.classList.toggle('hidden'))
        if (this.#keyboardLang === 'eng') {
            localStorage.setItem('lang', 'rus');
            this.#keyboardLang = 'rus'
        } else {
            localStorage.setItem('lang', 'eng');
            this.#keyboardLang = 'eng'
        }
    }

    changeCase() {
        const keysCaseDown = document.querySelectorAll('.caseDown')
        const keysCaseUp = document.querySelectorAll('.caseUp')
        keysCaseDown.forEach(elem => elem.classList.toggle('hidden'))
        keysCaseUp.forEach(elem => elem.classList.toggle('hidden'))
        if (this.#keyboardCase === 'caseDown') {
            this.#keyboardCase = 'caseUp'
        } else {
            this.#keyboardCase = 'caseDown'
        }
    }

    initListeners() {
        document.addEventListener("keydown", (e) => {
            e.preventDefault();
            const pressedKey = document.querySelector(`.${e.code}`)
            pressedKey.classList.toggle('press')
            if (e.code === "AltLeft" && e.ctrlKey) {
                this.changeLang()
            } else if (e.key === "Shift" && e.shiftKey && !e.repeat) {
                this.changeCase()
            } else {
                this.printKey(pressedKey)
            }
        });

        document.addEventListener("keyup", (e) => {
            const pressedKey = document.querySelector(`.${e.code}`)
            if (e.code != "CapsLock") {
                pressedKey.classList.remove('press')
            }
            if (e.key === "Shift" && !e.shiftKey) {
                this.changeCase()
            }
        });

        document.addEventListener('click', (e) => {
            const { target } = e;
            const key = target.closest(".key");
            if (!key) return false;
            if (!key.classList.contains('CapsLock')) {
                key.classList.add('press')
                key.addEventListener("animationend", () => {
                    key.classList.remove('press');
                });
            } else {
                if (key.classList.contains('press')) {
                    key.classList.remove('press');
                } else {
                    key.classList.add('press');
                }
            }
            this.printKey(key)
            return "click";
        })
    }

    printKey(pressedKey) {
        const screen = document.querySelector('.screen');
        const pointerEnd = screen.selectionEnd;;
        screen.focus()
        const letter = pressedKey.querySelector(`.${this.#keyboardLang}`)
            .querySelector(`.${this.#keyboardCase}`).textContent;
        switch (pressedKey.classList[1]) {
            case 'ControlLeft':
            case 'ControlRight':
            case 'ShiftLeft':
            case 'ShiftRight':
            case 'AltRight':
            case 'AltLeft':
            case 'MetaLeft':
                break;
            case 'CapsLock':
                this.changeCase();
                break;
            case "Enter":
                screen.value += "\n";
                break;
            case "Tab":
                screen.value += "    ";
                break;
            case "Backspace":
                if (pointerEnd === 0) return;
                screen.value = screen.value.slice(0, pointerEnd - 1)
                    + screen.value.slice(pointerEnd);
                screen.selectionEnd = pointerEnd - 1;
                break;
            case "Delete":
                if (pointerEnd === screen.value.length) return;
                screen.value = screen.value.slice(0, pointerEnd)
                    + screen.value.slice(pointerEnd + 1);
                screen.selectionEnd = pointerEnd;
                break;
            default:
                screen.value += letter;
        }
    }
}

function buildPage() {
    const main = document.createElement("main");
    main.classList.add('main')
    document.body.append(main);

    const title = document.createElement("h1");
    title.classList.add('main-title');
    title.textContent = 'Virtual Keyboard'
    main.append(title);

    const monitor = document.createElement("div");
    monitor.classList.add('monitor');
    main.append(monitor);

    const screen = document.createElement("textarea");
    screen.classList.add('screen');
    screen.value = "Клавиатура создана в операционной системе Windows.\nДля переключения языка: Ctrl+Alt\n";
    monitor.append(screen);

    const lang = localStorage.getItem('lang') || 'eng';
    const keyboard = new Keyboard(lang)
    keyboard.render()
}

buildPage()




