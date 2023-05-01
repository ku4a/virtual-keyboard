export class Screen {

    constructor() {
        console.log("Screen");
        let textarea = document.createElement('textarea');
        textarea.className = "screen";
        textarea.setAttribute("rows", 5);
        textarea.setAttribute("cols", 50);
        document.body.append(textarea);
        //this.addSymbol("z");
        //this.name = name;
    }


    action(symbol) {
        //console.log(symbol);
        switch(symbol.action) {
            case "add":
                this.actionAdd(symbol);
                break;
            case "backspace":
                this.actionBackspace();
                break;
            default:
            break;
        }
    }

    actionAdd(symbol) {
        //console.log(symbol);
        document.querySelector(".screen").value += symbol.clean[0];
    }



    actionBackspace()
    {
        let screen = document.querySelector(".screen");
        let ss = screen.selectionStart;
        let se = screen.selectionEnd;
        let ln  = screen.value.length;

        let textBefore = screen.value.substring( 0, ss );    //text in front of selected text
        let textSelected = screen.value.substring( ss, se ); //selected text
        let textAfter = screen.value.substring( se, ln );    //text following selected text

        if(ss === se) // if no text is selected
        {
            screen.value = screen.value.substring(0, ss-1 ) + screen.value.substring(se, ln );
            screen.focus();
            screen.selectionStart = ss-1;
            screen.selectionEnd = ss-1;
        }
        else // if some text is selected
        {
            screen.value = textBefore + textAfter ;
            screen.focus();
            screen.selectionStart = ss;
            screen.selectionEnd = ss;
        }

    }

}