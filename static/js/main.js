document.addEventListener('DOMContentLoaded', () => {
    // Навигация: переход на страницу задач
    document.querySelector('[data-nav="task"]').addEventListener('click', () => {
        window.location.href = '/tasks';
    });
});
// Навигация: переход на страницу Friends
document.querySelector('[data-nav="friends"]').addEventListener('click', () => {
    window.location.href = '/friends';
});
// Навигация: переход на страницу Leaderboards
document.querySelector('[data-nav="leaderboard"]').addEventListener('click', () => {
    window.location.href = '/leaderboards';
});
// Навигация: переход на страницу Daily Boost
document.querySelector('#daily-boost').addEventListener('click', () => {
    window.location.href = '/daily-boost';
});
// Навигация: переход на страницу Mint Ticket
document.querySelector('#mint-ticket').addEventListener('click', () => {
    window.location.href = '/mint-ticket';
});
// Подсветка активной кнопки
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-nav') === window.location.pathname.slice(1)) {
            item.classList.add('active');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Загрузка имени пользователя
    const usernameElement = document.getElementById('username');
    const username = usernameElement.getAttribute('data-user-name'); // Заглушка
    usernameElement.textContent = username || 'Guest';

    // Загрузка ссылки на кошелек
    const walletElement = document.getElementById('wallet');
    const walletLink = walletElement.getAttribute('data-wallet-link'); // Заглушка
    walletElement.href = walletLink || '#';
});
