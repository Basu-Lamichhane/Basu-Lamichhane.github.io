$(document).ready(function () {
    // Attach click event to all buttons
    $("button").click(function () {
        var audio = document.getElementById("audioPlayer");
        audio.play();
    });

    $(".nav-item").click(function () {
        console.log("playing");
        var audio = document.getElementById("audioPlayer");
        audio.play();
    });

    $(".custom-btn").click(function () {
        console.log("playing");
        var audio = document.getElementById("audioPlayer");
        audio.play();
    });
});