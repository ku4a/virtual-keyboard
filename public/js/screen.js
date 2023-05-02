export class Screen {
    constructor() {
        let textarea = document.createElement('textarea');
        textarea.className = "screen";
        textarea.setAttribute("rows", 5);
        textarea.setAttribute("cols", 50);
        textarea.innerHTML = "Hello, world!";
        textarea.focus();
        textarea.selectionStart = 13;
        textarea.selectionEnd = 13;
        document.body.append(textarea);
    }

    actionAdd(symbol) {
        //document.querySelector(".screen").value += symbol;
        let screen = document.querySelector(".screen");
        let ss = screen.selectionStart;
        let se = screen.selectionEnd;
        let ln = screen.value.length;
        let textBefore = screen.value.substring(0, ss);    //text in front of selected text
        let textAfter = screen.value.substring(se, ln);    //text following selected text

        if (ss === se) // if no text is selected
        {
            screen.value = screen.value.substring(0, ss) + symbol + screen.value.substring(se, ln);
            screen.focus();
            screen.selectionStart = ss + 1;
            screen.selectionEnd = ss + 1;
        } else // if some text is selected
        {
            screen.value = textBefore + symbol + textAfter;
            screen.focus();
            screen.selectionStart = ss;
            screen.selectionEnd = ss;
        }
    }

    actionBackspace() {
        let screen = document.querySelector(".screen");
        let ss = screen.selectionStart;
        let se = screen.selectionEnd;
        let ln = screen.value.length;
        let textBefore = screen.value.substring(0, ss);    //text in front of selected text
        let textAfter = screen.value.substring(se, ln);    //text following selected text

        if (ss === se) // if no text is selected
        {
            screen.value = screen.value.substring(0, ss - 1) + screen.value.substring(se, ln);
            screen.focus();
            screen.selectionStart = ss - 1;
            screen.selectionEnd = ss - 1;
        } else // if some text is selected
        {
            screen.value = textBefore + textAfter;
            screen.focus();
            screen.selectionStart = ss;
            screen.selectionEnd = ss;
        }
    }

    actionDelete() {
        let screen = document.querySelector(".screen");
        let ss = screen.selectionStart;
        let se = screen.selectionEnd;
        let ln = screen.value.length;
        let textBefore = screen.value.substring(0, ss);    //text in front of selected text
        let textAfter = screen.value.substring(se, ln);    //text following selected text

        if (ss === se) // if no text is selected
        {
            screen.value = screen.value.substring(0, ss) + screen.value.substring(se + 1, ln);
            screen.focus();
            screen.selectionStart = ss;
            screen.selectionEnd = ss;
        } else // if some text is selected
        {
            screen.value = textBefore + textAfter;
            screen.focus();
            screen.selectionStart = ss;
            screen.selectionEnd = ss;
        }
    }

    actionEnter() {
        //document.querySelector(".screen").value += "\r\n";
        let screen = document.querySelector(".screen");
        let ss = screen.selectionStart;
        let se = screen.selectionEnd;
        let ln = screen.value.length;
        let textBefore = screen.value.substring(0, ss);    //text in front of selected text
        let textAfter = screen.value.substring(se, ln);    //text following selected text

        if (ss === se) // if no text is selected
        {
            screen.value = screen.value.substring(0, ss) + "\r\n" + screen.value.substring(se, ln);
            screen.focus();
            screen.selectionStart = ss + 1;
            screen.selectionEnd = ss + 1;
        } else // if some text is selected
        {
            screen.value = textBefore + "\r\n" + textAfter;
            screen.focus();
            screen.selectionStart = ss;
            screen.selectionEnd = ss;
        }
    }

    actionTab() {
        let screen = document.querySelector(".screen");
        let start = screen.selectionStart;
        let end = screen.selectionEnd;

        // set textarea value to: text before caret + tab + text after caret
        screen.value = screen.value.substring(0, start) + "    " + screen.value.substring(end);

        // put caret at right position again
        screen.selectionStart = screen.selectionEnd = start + 4;
    }
}