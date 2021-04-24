$(document).ready(function () {
    $('#firstH1').hide().slideDown(1100);
    $('#firstP').hide().slideDown(1100);
    $('#firstBTN').hide().slideDown(1100);
    $('#nav').hide().fadeIn(1000);
});


var isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false) {
    window.requestAnimationFrame(function() {
        scrolling(e);
        isScrolling = false;
    });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var card = document.querySelector("#c1");
var HeadWork = document.querySelector(".heading_work");
var cardTwo = document.querySelector("#c2");
var cardThree = document.querySelector("#c3");

var Headline = document.querySelector(".headline");
var ImgBlock = document.querySelector(".img_video_block");

var contentProduct = document.querySelector(".content_product");
var bcgImage = document.querySelector(".bcg-image");
var cardProduct = document.querySelector(".card-product");

function scrolling(e) {

    if (isFullyVisible(card)) {
        card.classList.add("active");
    }

    if (isPartiallyVisible(cardTwo)) {
        cardTwo.classList.add("active");
    }
    if (isFullyVisible(cardThree)) {
        cardThree.classList.add("active");
    }

    if (isFullyVisible(HeadWork)) {
        HeadWork.classList.add("active");
    }

    if (isPartiallyVisible(Headline)) {
        Headline.classList.add("active");
    }
    if (isPartiallyVisible(ImgBlock)) {
        ImgBlock.classList.add("active");
    }
    if (isPartiallyVisible(contentProduct)) {
        contentProduct.classList.add("active");
    }
    if (isPartiallyVisible(bcgImage)) {
        bcgImage.classList.add("active");
    }
    if (isPartiallyVisible(cardProduct)) {
        cardProduct.classList.add("active");
    }
}

function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}
