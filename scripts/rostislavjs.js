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



//Responding to Events with Callbacks
let currentStep = 0;

function openForm() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popupForm').style.display = 'block';
    showStep(currentStep);
}

function closeForm() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popupForm').style.display = 'none';
    resetForm1();
}

function showStep(step) {

    const steps = document.querySelectorAll('.form-step');
    steps.forEach((s) => s.style.display = 'none');


    steps[step].style.display = 'block';


    if (step === 2) {
        document.getElementById('confirmName').innerText = document.getElementById('name').value;
        document.getElementById('confirmEmail').innerText = document.getElementById('email').value;
    }
}

function nextStep(step) {
    if (step === 1) {

        currentStep++;
        showStep(currentStep);
    } else if (step === 2) {

        currentStep++;
        showStep(currentStep);
    }
}

function prevStep(step) {
    currentStep--;
    showStep(currentStep);
}

function resetForm1() {
    document.getElementById('multiStepForm').reset();
    currentStep = 0;
    showStep(currentStep);
}




//Switch Statements
function displayGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }


    document.getElementById('greeting').innerText = greeting;
}


window.onload = function() {
    displayGreeting();
};
