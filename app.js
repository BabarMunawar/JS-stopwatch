var ms = 0, s = 0, m = 0;
var minutes = document.getElementById('m')
var second = document.getElementById('s')
var milisec = document.getElementById('ms')
var button = document.getElementById('strtbttn')
var timer;

function intrval() {

    ms++;
    milisec.innerHTML = ( ms < 10 ? "0" + ms : ms );
    if (ms == 100 ){
        ms = 0;
        s++;
        second.innerHTML = ( s < 10? "0" + s : s);

    }
    if ( s == 60 ){
        s = 0;
        m++;
        minutes.innerHTML = ( m < 10 ? "0" + m : m);

    }
    if (s<10)
    m.innerHTML = "0"+m+":"


}

function start(){
    button.disabled = true;
timer = setInterval(intrval, 10)
}

function stop(){
    button.disabled = false;

 clearInterval(timer)
}

function reset() {
    button.disabled = false;

m = 0;
s = 0;
ms = 0;
minutes.innerHTML = m
second.innerHTML = s
milisec.innerHTML = ms
stop()
document.getElementById("laps").innerHTML = "";
    document.getElementById("start").disabled = false;


}


var setLaps = function() {
    var p = document.createElement("p") ;
    var timer = document.getElementById("m").innerHTML + " : " + document.getElementById("s").innerHTML + " : " + document.getElementById("ms").innerHTML + " : " ;
    var ptext = document.createTextNode(timer);
    p.appendChild(ptext);
    var laps = document.getElementById("laps");
    laps.appendChild(p);
}

// function reset(){
//     button.disabled = false;

//     stop()
//     s = 0
//     ms = 0
//     m = 0
//     milisec.innerHTML = ms
//     second.innerHTML = s
//     minutes.innerHTML = m
//     document.getElementById("setlaps").innerHTML = "";
//     document.getElementById("start").disabled = false;
// }














