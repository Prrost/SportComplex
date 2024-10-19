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

function resetForm(){
    document.querySelectorAll('input').forEach(input => input.value = '')
}






document.addEventListener('DOMContentLoaded', function() {
    //ButtonEventListener
    document.getElementById('resetButton').addEventListener('click', function () {
        document.querySelectorAll('input').forEach(input => input.value = '');
    });


    //KeyboardEventListener
    const menuItems = [...document.querySelectorAll('#navbarMenu .nav-link'),
        document.getElementById('subscribeButton'),
        document.getElementById('homeButton')];
    let currentIndex = 0;

    menuItems[currentIndex].focus();

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % menuItems.length;
            menuItems[currentIndex].focus();
            event.preventDefault();
        }

        else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
            menuItems[currentIndex].focus();
            event.preventDefault();
        }
    });
});