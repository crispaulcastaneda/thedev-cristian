"use strict"

const typedTextSpan = document.querySelector(".wow");
const textList = ["{ Hello }", "Nice to see you here.", "Thank you."];
const txtDelay = 200;
const removeDelay = 100;
const insertTxtDelay = 2000;

let textListIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textList[textListIndex].length) {
        typedTextSpan.textContent += textList[textListIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, txtDelay);
    } else {
        setTimeout(erase, insertTxtDelay);
    }
}

function erase() {
    if(charIndex > 0) {
        typedTextSpan.textContent = textList[textListIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, removeDelay);
    } else {
        textListIndex++;
        if(textListIndex >= textList.length) textListIndex = 0;
        setTimeout(type, txtDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, insertTxtDelay + 250);
})


// Light Mode
function imgLight() {
    let el = document.body;
    el.classList.toggle("light-mode");
}

// Cursor
let mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove', cursor);
function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}