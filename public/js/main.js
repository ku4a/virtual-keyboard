import {Screen} from './screen.js';
import {Keyboard} from './keyboard.js';

let screen = new Screen;
let keyboard = new Keyboard;

let page_os = document.createElement('div');
page_os.className = "description";
page_os.innerHTML = "Клавиатура создана в операционной системе Mac Os";
document.body.append(page_os);

let page_lang = document.createElement('div');
page_lang.className = "language";
page_lang.innerHTML = "Для переключения языка комбинация: shift + ctrl";
document.body.append(page_lang);

document.querySelector(".keyboard").addEventListener("mousedown", function (event) {
    let symbol = keyboard.getSymbol(event.target.dataset.code);

    if (symbol) {
        event.preventDefault();

        switch (symbol.action) {
            case "add":
                if (keyboard.getModShift() || keyboard.getModCapslock()) {
                    screen.actionAdd(symbol.shiftKey[keyboard.lang]);
                } else if (keyboard.getModCtrl()) {
                    screen.actionAdd(symbol.ctrlKey[keyboard.lang]);
                } else if (keyboard.getModAlt()) {
                    screen.actionAdd(symbol.altKey[keyboard.lang]);
                } else if (keyboard.getModMeta()) {
                    screen.actionAdd(symbol.metaKey[keyboard.lang]);
                } else {
                    screen.actionAdd(symbol.clean[keyboard.lang]);
                }
                break;
            case "backspace":
                screen.actionBackspace();
                break;
            case "tab":
                screen.actionTab();
                break;
            case "delete":
                screen.actionDelete();
                break;
            case "capslock":
                keyboard.modCapslock = 1;
                keyboard.refresh();
                break;
            case "shiftLeft":
                if (keyboard.getModCtrl()) {
                    keyboard.switchLang();
                } else {
                    keyboard.modShift = 1;
                }
                keyboard.refresh();
                break;
            case "shiftRight":
                if (keyboard.getModCtrl()) {
                    keyboard.switchLang();
                } else {
                    keyboard.modShift = 1;
                }
                keyboard.refresh();
                break;
            case "controlLeft":
                if (keyboard.getModShift()) {
                    keyboard.switchLang();
                } else {
                    keyboard.modCtrl = 1;
                }
                keyboard.refresh();
                break;
            case "controlRight":
                if (keyboard.getModShift()) {
                    keyboard.switchLang();
                } else {
                    keyboard.modCtrl = 1;
                }
                keyboard.refresh();
                break;
            case "altLeft":
                keyboard.modAlt = 1;
                keyboard.refresh();
                break;
            case "metaLeft":
                keyboard.modMeta = 1;
                keyboard.refresh();
                break;
            case "metaRight":
                keyboard.modMeta = 1;
                keyboard.refresh();
                break;
            case "enter":
                screen.actionEnter();
                break;
            default:
                break;
        }
        keyboard.animationAdd(event.target.dataset.code);
    }

});

document.querySelector(".keyboard").addEventListener("mouseup", function (event) {

    let symbol = keyboard.getSymbol(event.target.dataset.code);

    if (symbol) {
        keyboard.animationRemove(event.target.dataset.code);
    }

});

document.querySelector(".keyboard").addEventListener("mouseout", function (event) {
    let symbol = keyboard.getSymbol(event.target.dataset.code);

    if (symbol) {
        keyboard.animationRemove(event.target.dataset.code);
    }

});

document.addEventListener("keydown", function (event) {
    let symbol = keyboard.getSymbol(event.code);

    if (symbol) {
        event.preventDefault();

        switch (symbol.action) {
            case "add":
                if (keyboard.getModShift() || keyboard.getModCapslock()) {
                    screen.actionAdd(symbol.shiftKey[keyboard.lang]);
                } else if (keyboard.getModCtrl()) {
                    screen.actionAdd(symbol.ctrlKey[keyboard.lang]);
                } else if (keyboard.getModAlt()) {
                    screen.actionAdd(symbol.altKey[keyboard.lang]);
                } else if (keyboard.getModMeta()) {
                    screen.actionAdd(symbol.metaKey[keyboard.lang]);
                } else {
                    screen.actionAdd(symbol.clean[keyboard.lang]);
                }
                break;
            case "backspace":
                screen.actionBackspace();
                break;
            case "tab":
                screen.actionTab();
                break;
            case "delete":
                screen.actionDelete();
                break;
            case "capslock":
                keyboard.modCapslock = 1;
                keyboard.refresh();
                break;
            case "shiftLeft":
                if (keyboard.getModCtrl()) {
                    keyboard.switchLang();
                } else {
                    keyboard.modShift = 1;
                }
                keyboard.refresh();
                break;
            case "shiftRight":
                if (keyboard.getModCtrl()) {
                    keyboard.switchLang();
                } else {
                    keyboard.modShift = 1;
                }
                keyboard.refresh();
                break;
            case "controlLeft":
                if (keyboard.getModShift()) {
                    keyboard.switchLang();
                } else {
                    keyboard.modCtrl = 1;
                }
                keyboard.refresh();
                break;
            case "controlRight":
                if (keyboard.getModShift()) {
                    keyboard.switchLang();
                } else {
                    keyboard.modCtrl = 1;
                }
                keyboard.refresh();
                break;
            case "altLeft":
                keyboard.modAlt = 1;
                keyboard.refresh();
                break;
            case "metaLeft":
                keyboard.modMeta = 1;
                keyboard.refresh();
                break;
            case "metaRight":
                keyboard.modMeta = 1;
                keyboard.refresh();
                break;
            case "enter":
                screen.actionEnter();
                break;
            default:
                break;
        }
        keyboard.animationAdd(event.code);
    }
});

document.addEventListener("keyup", function (event) {

    let symbol = keyboard.getSymbol(event.code);

    if (symbol) {
        switch (symbol.action) {
            case "capslock":
                keyboard.modCapslock = 0;
                keyboard.refresh();
                break;
            case "shiftLeft":
                keyboard.modShift = 0;
                keyboard.refresh();
                break;
            case "shiftRight":
                keyboard.modShift = 0;
                keyboard.refresh();
                break;
            case "controlLeft":
                keyboard.modCtrl = 0;
                keyboard.refresh();
                break;
            case "controlRight":
                keyboard.modCtrl = 0;
                keyboard.refresh();
                break;
            case "altLeft":
                keyboard.modAlt = 0;
                keyboard.refresh();
                break;
            case "metaLeft":
                keyboard.modMeta = 0;
                keyboard.refresh();
                break;
            case "metaRight":
                keyboard.modMeta = 0;
                keyboard.refresh();
                break;
            default:
                break;
        }


        keyboard.animationRemove(event.code);
    }
});
