import { Injectable } from '@angular/core';

@Injectable()
export class TypewriterService {

  cursorPosition = 0;
  tag;
  writingTag = false;
  tagOpen = false;
  typeSpeed = 100;
  tempTypeSpeed = 0;

  constructor() { }

  setupTypewriter(t) {
    let that = this;
    let HTML = t.innerHTML;

    t.innerHTML = "";

    let type = function () {

      if (that.writingTag === true) {
        that.tag += HTML[that.cursorPosition];
      }

      if (HTML[that.cursorPosition] === "<") {
        that.tempTypeSpeed = 0;
        if (that.tagOpen) {
          that.tagOpen = false;
          that.writingTag = true;
        } else {
          that.tag = "";
          that.tagOpen = true;
          that.writingTag = true;
          that.tag += HTML[that.cursorPosition];
        }
      }
      if (!that.writingTag && that.tagOpen) {
        that.tag.innerHTML += HTML[that.cursorPosition];
      }
      if (!that.writingTag && !that.tagOpen) {
        if (HTML[that.cursorPosition] === " ") {
          that.tempTypeSpeed = 0;
        }
        else {
          that.tempTypeSpeed = (Math.random() * that.typeSpeed) + 50;
        }
        t.innerHTML += HTML[that.cursorPosition];
      }
      if (that.writingTag === true && HTML[that.cursorPosition] === ">") {
        that.tempTypeSpeed = (Math.random() * that.typeSpeed) + 50;
        that.writingTag = false;
        if (that.tagOpen) {
          var newSpan = document.createElement("span");
          t.appendChild(newSpan);
          newSpan.innerHTML = that.tag;
          that.tag = newSpan.firstChild;
        }
      }

      that.cursorPosition += 1;
      if (that.cursorPosition < HTML.length - 1) {
        setTimeout(type, that.tempTypeSpeed);
      }

    };

    return {
      type: type
    };
  }


}
