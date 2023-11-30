document.addEventListener('DOMContentLoaded', (event) => {

    function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var format = "AM";
        // Add leading zeros if the digits are less than 10
        hours = (hours < 10 ? '0' : '') + hours;
        minutes = (minutes < 10 ? '0' : '') + minutes;
        seconds = (seconds < 10 ? '0' : '') + seconds;

        if (hours > 12) {
            format = "PM";
            hours = hours - 12;
        }
        var timeString = hours + ':' + minutes + ':' + seconds + " " + format;

        document.getElementById('site-clock').innerHTML = timeString;
    }

    // Update the clock every second
    setInterval(updateClock, 1000);

    // Initial call to display the clock immediately
    updateClock();
});