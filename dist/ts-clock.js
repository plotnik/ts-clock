function z(t) {
    return (t < 10) ? '0' + t : t.toString();
}
function tsClock() {
    var clock = document.getElementById('clock');
    setInterval(function () {
        var now = new Date();
        clock.textContent = z(now.getHours()) +
            ':' + z(now.getMinutes());
        //':' + z(now.getSeconds());
    }, 250);
}
