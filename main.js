function clock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let time = "";

    if(hours < 10) {
        hours = "0" + hours;
    } 

    if(minutes < 10) {
        minutes = "0" + minutes;
    } 

    if(seconds < 10) {
        seconds = "0" + seconds;
    } 

    if(hours < 12) {
        time = "AM";
    } else {
        time = "PM";
    }
    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds + " " +time;
    setTimeout("clock()", 1000);
}
clock();

let check1= new Date();
console.log(check1)


