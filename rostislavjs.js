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
    const resetButton = document.getElementById('resetButton');
    if (resetButton) {
        resetButton.addEventListener('click', function () {
            document.querySelectorAll('input').forEach(input => input.value = '');
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
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
        } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
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
document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById('toggleThemeBtn');


    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            themeButton.textContent = 'Switch to Light Theme';
        } else {
            themeButton.textContent = 'Switch to Dark Theme';
        }
    });
});
// Функция для переключения темы
function toggleTheme() {
    const body = document.body;
    const themeToggleButton = document.querySelector('.button-style');

    // Проверяем, есть ли у body класс dark-theme
    if (body.classList.contains('dark-theme')) {
        // Если да, то убираем его и меняем текст на кнопке
        body.classList.remove('dark-theme');
        themeToggleButton.innerText = 'Switch to Dark Theme';
    } else {
        // Если нет, то добавляем класс dark-theme и меняем текст на кнопке
        body.classList.add('dark-theme');
        themeToggleButton.innerText = 'Switch to Light Theme';
    }
}
const themeToggleBtn = document.getElementById("theme-toggle");

if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        const body = document.body;

        // Toggle the dark-theme class on body
        body.classList.toggle("dark-theme");

        // Change the button text based on the current theme
        if (body.classList.contains("dark-theme")) {
            themeToggleBtn.textContent = "Switch to Light Theme";
            localStorage.setItem("theme", "dark");  // Save the selected theme
        } else {
            themeToggleBtn.textContent = "Switch to Dark Theme";
            localStorage.setItem("theme", "light");  // Save the selected theme
        }
    });

    // Apply the saved theme on page load
    window.addEventListener("DOMContentLoaded", () => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-theme");
            themeToggleBtn.textContent = "Switch to Light Theme";
        } else {
            themeToggleBtn.textContent = "Switch to Dark Theme";
        }
    });
}


