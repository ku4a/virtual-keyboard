export class Keyboard {
    lang = localStorage.getItem('lang') === null ? 0 : localStorage.getItem('lang');
    symbols = [];


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

                symbols.forEach(function(item) {
                    if (item.row === i) {
                        //console.log(item.code);

                        let keyboard_key = document.createElement('div');
                        keyboard_key.innerHTML = item.clean[LANG];
                        keyboard_key.className = item.style;
                        keyboard_key.dataset.code = item.code;

                        keyboard_row.append(keyboard_key);
                    }
                });
            }11

        })



        document.body.append(keyboard);
        //this.name = name;
    }

    getLang() {
        return this.lang;
    }

    getSymbol(code) {
        //console.log(code);
       //console.log(this.symbols.find(el => el.code === code));

        let symbol = this.symbols.find(el => el.code === code);
        return symbol ? symbol : false;
    }

    getAction(code) {
        //console.log(code);
        //console.log(this.symbols.find(el => el.code === code));

        let symbol = this.symbols.find(el => el.code === code);
        return symbol ? symbol.action : false;
    }

    animationAdd(code) {
        document.querySelector("[data-code = '" + code + "']").classList.add("active");
    }

    animationRemove(code) {
        document.querySelector("[data-code = '" + code + "']").classList.remove("active");
    }

    actionBackspace(textbox)
    {
        let ss = textbox.selectionStart;
        let se = textbox.selectionEnd;
        let ln  = textbox.value.length;

        let textbefore = textbox.value.substring( 0, ss );    //text in front of selected text
        let textselected = textbox.value.substring( ss, se ); //selected text
        let textafter = textbox.value.substring( se, ln );    //text following selected text

        if(ss === se) // if no text is selected
        {
            textbox.value = textbox.value.substring(0, ss-1 ) + textbox.value.substring(se, ln );
            textbox.focus();
            textbox.selectionStart = ss-1;
            textbox.selectionEnd = ss-1;
        }
        else // if some text is selected
        {
            textbox.value = textbefore + textafter ;
            textbox.focus();
            textbox.selectionStart = ss;
            textbox.selectionEnd = ss;
        }

    }

}