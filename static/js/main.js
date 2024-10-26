document.addEventListener('DOMContentLoaded', function() {
    const tg = window.Telegram.WebApp;
    const user = tg.initDataUnsafe.user;

    // Отображаем приветствие с именем пользователя
    const greetingElement = document.getElementById('greeting');
    if (user) {
        greetingElement.textContent = `Привет, ${user.first_name}! Points: 0`;
    }

    // Обработчики для кнопок "Soon"
    const soonButtons = document.querySelectorAll('.soon-button');

    soonButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert('Coming Soon...');
        });
    });
});
