
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
