import {Screen} from './screen.js';
import {Keyboard} from './keyboard.js';

fetch('public/json/mac-keabord.json').then(res => res.json()).then(symbols => {

    //console.log(symbols.find(el => el.row === 1));
    symbols.forEach(function(item) {
        if (item.row === 1) {
            console.log(item.code);
        }
    });
})

new Screen;
new Keyboard;