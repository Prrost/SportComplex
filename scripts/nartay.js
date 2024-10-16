// Массив предопределённых цветов
const colors = ["#ff9999", "#99ff99", "#9999ff", "#ffcc99", "#cc99ff", "#99ccff", "#ffff99", "#ff99cc"];

// Получение кнопки для смены фона
const changeColorBtn = document.getElementById('changeColorBtn');

// Функция для смены фона по нажатию на кнопку
changeColorBtn.addEventListener('click', function() {
    console.log('Button clicked!');  // Проверим, срабатывает ли событие
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor; // Изменение фона
});

// Валидация формы
const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Проверка email
    if (!validateEmail(email)) {
        alert('Пожалуйста, введите корректный адрес электронной почты.');
        return;
    }

    // Проверка длины пароля
    if (password.length < 6) {
        alert('Пароль должен содержать не менее 6 символов.');
        return;
    }

    // Проверка совпадения паролей
    if (password !== confirmPassword) {
        alert('Пароли не совпадают.');
        return;
    }

    alert('Форма успешно отправлена!'); // Можно заменить на логику отправки данных
});

// Функция для валидации email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Простой регулярный выражение для валидации email
    return re.test(email);
}
