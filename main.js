window.addEventListener('load', init);

function init() {
    var allcards = document.getElementsByClassName("thumbnail");
    for (var i = 0; i < allcards.length; i++) {
        console.log("ehhhh" + allcards[i]);
        allcards[i].style.opacity = 1;
    }

}