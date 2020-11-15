function z(t: number): string {
    return (t<10)? '0'+t : t.toString(); 
}

function tsClock() {
    let clock = document.getElementById('clock');
    setInterval(function() {
        let now = new Date();    
        clock.textContent = z(now.getHours()) + 
                      ':' + z(now.getMinutes()); 
                      //':' + z(now.getSeconds());
    }, 250);
}