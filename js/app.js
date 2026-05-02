// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Сообщаем Telegram, что приложение готово
tg.ready();

// Разворачиваем на весь экран
tg.expand();

// Устанавливаем цвета хедера
tg.setHeaderColor('#0f111a');

// Функция отправки данных боту
function sendData(action) {
    tg.sendData(JSON.stringify({
        action: action,
        timestamp: new Date().toISOString()
    }));
}

console.log('Telegram Web App initialized');