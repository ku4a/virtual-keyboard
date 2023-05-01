import {Screen} from './screen.js';
import {Keyboard} from './keyboard.js';

let screen = new Screen;
let keyboard = new Keyboard;

document.addEventListener("keydown", function (event) {
    //console.log("event.code = " + event.code);

    if (keyboard.getSymbol(event.code)) {
        screen.addSymbol(keyboard.getSymbol(event.code));
        keyboard.animationAdd(event.code);
    }
});

document.addEventListener("keyup", function (event) {
    if (keyboard.getSymbol(event.code)) {
        keyboard.animationRemove(event.code);
    }
});
