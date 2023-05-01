export class Screen {

    constructor() {
        console.log("Screen");
        let textarea = document.createElement('textarea');
        textarea.className = "screen";
        textarea.setAttribute("id", "textarea");
        textarea.setAttribute("rows", 5);
        textarea.setAttribute("cols", 50);
        document.body.append(textarea);
        //this.name = name;
    }

    sayHi() {
        alert(this.name);
    }

}