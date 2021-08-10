// For Text Animation - Call it for functions
const typedTextSpan = document.querySelector('.third-highlight');

const textList = ["{ Front End Developer }", "{ Web Development } ", "{ JS Developer }"];
const txtDelay = 80;
const removeDelay = 80;
const insertTxtDelay = 1000;

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
        setTimeout(type, txtDelay + 800);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, insertTxtDelay + 150);
});


// SCROLL TO TOP

var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.80) {
    // Show button
    scrollToTopBtn.classList.add("showBtn")
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn")
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)