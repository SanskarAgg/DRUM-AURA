for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var btn = this.innerHTML;
        pla(btn);
    });
}
document.addEventListener("keypress", function(event) {
    var k = event.key;
    pla(k);
})

function pla(key) {
    switch (key) {
        case 'a':
        case 'A':
            var a1 = new Audio("Sounds/tom-1.mp3");
            a1.play();
            break;
        case 's':
        case 'S':
            var a1 = new Audio("Sounds/tom-2.mp3");
            a1.play();
            break;
        case 'd':
        case 'D':
            var a1 = new Audio("Sounds/tom-3.mp3");
            a1.play();
            break;
        case 'f':
        case 'F':
            var a1 = new Audio("Sounds/tom-4.mp3");
            a1.play();
            break;
        case 'g':
        case 'G':
            var a1 = new Audio("Sounds/snare.mp3");
            a1.play();
            break;
        case 'h':
        case 'H':
            var a1 = new Audio("Sounds/crash.mp3");
            a1.play();
            break;
        case 'j':
        case 'J':
            var a1 = new Audio("Sounds/kick-bass.mp3");
            a1.play();
            break;
        default:
            window.alert("Please press a valid key !");
    }
}