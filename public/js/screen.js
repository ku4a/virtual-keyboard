export default class Screen {
  modEslint = 0;

  constructor() {
    const textarea = document.createElement('textarea');
    textarea.className = 'screen';
    textarea.setAttribute('rows', 5);
    textarea.setAttribute('cols', 50);
    textarea.innerHTML = 'Hello, world!';
    textarea.focus();
    textarea.selectionStart = 13;
    textarea.selectionEnd = 13;
    document.body.append(textarea);
  }

  actionAdd(symbol) {
    this.modEslint = 1;
    const screen = document.querySelector('.screen');
    const ss = screen.selectionStart;
    const se = screen.selectionEnd;
    const ln = screen.value.length;
    const textBefore = screen.value.substring(0, ss);
    const textAfter = screen.value.substring(se, ln);

    if (ss === se) {
      screen.value = screen.value.substring(0, ss) + symbol + screen.value.substring(se, ln);
      screen.focus();
      screen.selectionStart = ss + 1;
      screen.selectionEnd = ss + 1;
    } else {
      screen.value = textBefore + symbol + textAfter;
      screen.focus();
      screen.selectionStart = ss;
      screen.selectionEnd = ss;
    }
  }

  actionBackspace() {
    this.modEslint = 1;
    const screen = document.querySelector('.screen');
    const ss = screen.selectionStart;
    const se = screen.selectionEnd;
    const ln = screen.value.length;
    const textBefore = screen.value.substring(0, ss);
    const textAfter = screen.value.substring(se, ln);

    if (ss === se) {
      screen.value = screen.value.substring(0, ss - 1) + screen.value.substring(se, ln);
      screen.focus();
      screen.selectionStart = ss - 1;
      screen.selectionEnd = ss - 1;
    } else {
      screen.value = textBefore + textAfter;
      screen.focus();
      screen.selectionStart = ss;
      screen.selectionEnd = ss;
    }
  }

  actionDelete() {
    this.modEslint = 1;
    const screen = document.querySelector('.screen');
    const ss = screen.selectionStart;
    const se = screen.selectionEnd;
    const ln = screen.value.length;
    const textBefore = screen.value.substring(0, ss);
    const textAfter = screen.value.substring(se, ln);

    if (ss === se) {
      screen.value = screen.value.substring(0, ss) + screen.value.substring(se + 1, ln);
      screen.focus();
      screen.selectionStart = ss;
      screen.selectionEnd = ss;
    } else {
      screen.value = textBefore + textAfter;
      screen.focus();
      screen.selectionStart = ss;
      screen.selectionEnd = ss;
    }
  }

  actionEnter() {
    this.modEslint = 1;
    const screen = document.querySelector('.screen');
    const ss = screen.selectionStart;
    const se = screen.selectionEnd;
    const ln = screen.value.length;
    const textBefore = screen.value.substring(0, ss);
    const textAfter = screen.value.substring(se, ln);
    const enter = '\r\n';

    if (ss === se) {
      screen.value = screen.value.substring(0, ss) + enter + screen.value.substring(se, ln);
      screen.focus();
      screen.selectionStart = ss + 1;
      screen.selectionEnd = ss + 1;
    } else {
      screen.value = textBefore + enter + textAfter;
      screen.focus();
      screen.selectionStart = ss;
      screen.selectionEnd = ss;
    }
  }

  actionTab() {
    this.modEslint = 1;
    const screen = document.querySelector('.screen');
    const start = screen.selectionStart;
    const end = screen.selectionEnd;
    const tab = '    ';

    screen.value = screen.value.substring(0, start) + tab + screen.value.substring(end);

    screen.selectionStart = start + 4;
    screen.selectionEnd = start + 4;
  }
}
