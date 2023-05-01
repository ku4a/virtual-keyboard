export class Screen {

    constructor() {
        console.log("Screen");
        let textarea = document.createElement('textarea');
        textarea.className = "screen";
        textarea.setAttribute("rows", 5);
        textarea.setAttribute("cols", 50);
        document.body.append(textarea);
        this.addSymbol("z");
        //this.name = name;
    }


    addSymbol(symbol) {
        document.querySelector(".screen").value += symbol;
    }

}