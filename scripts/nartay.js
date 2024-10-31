
const colors = ["#ff9999", "#99ff99", "#9999ff", "#ffcc99", "#cc99ff", "#99ccff", "#ffff99", "#ff99cc"];


const changeColorBtn = document.getElementById('changeColorBtn');


changeColorBtn.addEventListener('click', function() {
    console.log('Button clicked!');  // Проверим, срабатывает ли событие
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor; // Изменение фона
});


const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;


    if (!validateEmail(email)) {
        alert('Пожалуйста, введите корректный адрес электронной почты.');
        return;
    }


    if (password.length < 6) {
        alert('Пароль должен содержать не менее 6 символов.');
        return;
    }


    if (password !== confirmPassword) {
        alert('Пароли не совпадают.');
        return;
    }

    alert('Форма успешно отправлена!');
});


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function changeImage(imageSrc) {
    const displayImage = document.getElementById('displayImage'); // Выбор главного изображения
    displayImage.src = imageSrc;
}

function changeLargeImage(imageSrc) {
    const largeImage = document.getElementById('largeImage');
    const largeImageContainer = document.getElementById('largeImageContainer');

    if (largeImage && largeImageContainer) {
        largeImage.src = imageSrc;
        largeImageContainer.style.display = 'block';
    } else {
        console.error('Elements not found!');
    }
}

// Обработка событий для миниатюр
const thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const imageSrc = thumbnail.src;
        changeImage(imageSrc);
        changeLargeImage(imageSrc);
    });
});



const toggleThemeBtn = document.getElementById('toggleThemeBtn');
let isDay = true;

toggleThemeBtn.addEventListener('click', function() {
    if (isDay) {
        document.getElementById("dark-light").style.backgroundColor = '#4f4181';
        document.body.style.backgroundColor = "#2c3e50";
        document.body.style.color = "#ecf0f1";
    } else {
        document.getElementById("dark-light").style.backgroundColor = '#c9bcf5';
        document.body.style.backgroundColor = "#ecf0f1";
        document.body.style.color = "#2c3e50";
    }
    isDay = !isDay;
});

function registerUser() {
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    // Сохраняем имя пользователя и пароль в localStorage
    localStorage.setItem("registeredUsername", username);
    localStorage.setItem("registeredPassword", password);

    alert("Registration successful! You can now log in.");
}

// Функция входа
function login() {
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Получаем сохраненные данные из localStorage
    const registeredUsername = localStorage.getItem("registeredUsername");
    const registeredPassword = localStorage.getItem("registeredPassword");

    // Проверяем данные для входа
    if (loginUsername === registeredUsername && loginPassword === registeredPassword) {
        localStorage.setItem("loggedInUser", loginUsername); // Сохраняем пользователя в localStorage
        alert("Login successful!");
        showLogoutButton();
    } else {
        alert("Invalid username or password.");
    }
}

// Функция выхода
function logout() {
    localStorage.removeItem("loggedInUser"); // Удаление пользователя из localStorage
    alert("Logged out successfully.");
    hideLogoutButton();
}

// Функции для показа и скрытия кнопки выхода
function showLogoutButton() {
    document.getElementById("logoutButton").classList.remove("d-none");
    document.getElementById("loginForm").classList.add("d-none");
    document.getElementById("registrationForm").classList.add("d-none");
}

function hideLogoutButton() {
    document.getElementById("logoutButton").classList.add("d-none");
    document.getElementById("loginForm").classList.remove("d-none");
    document.getElementById("registrationForm").classList.remove("d-none");
}

// Проверка статуса входа при загрузке страницы
window.onload = function() {
    if (localStorage.getItem("loggedInUser")) {
        showLogoutButton();
    } else {
        hideLogoutButton();
    }
};