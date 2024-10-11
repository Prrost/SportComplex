function fold() {
    var x = document.getElementById("fold");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function currentTime(){
    const now = new Date;
    const local = now.toLocaleString()
    document.querySelector('#datetime').textContent = local;

}

setInterval(currentTime, 1000)