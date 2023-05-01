import {Screen} from './screen.js';
import {Keyboard} from './keyboard.js';

let screen = new Screen;
let keyboard = new Keyboard;

document.addEventListener("keydown", function (event) {
    //console.log("event.code = " + event.code);

    let symbol = keyboard.getSymbol(event.code);

    if (symbol) {
        event.preventDefault();
        //console.log(keyboard.getAction(event.code));


        switch(symbol.action) {
            case "add":

                if (keyboard.getModShift()) {
                    screen.actionAdd(symbol.shiftKey[0]);
                } else {
                    screen.actionAdd(symbol.clean[0]);
                }

                break;
            case "backspace":
                screen.actionBackspace();
                break;
            case "shiftLeft":
                keyboard.modShift = 1;
                console.log("shift = " + keyboard.modShift);
                keyboard.refresh();
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
        switch(symbol.action) {
            case "shiftLeft":
                keyboard.modShift = 0;
                console.log("shift = " + keyboard.modShift);
                keyboard.refresh();
                break;
            default:
                break;
        }


        keyboard.animationRemove(event.code);
    }
});
