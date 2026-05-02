const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// Функция для кнопок
function sendData(action) {
    console.log('🔹 Кнопка нажата:', action);
    
    // Отправляем данные
    tg.sendData(JSON.stringify({
        action: action,
        timestamp: new Date().toISOString()
    }));
    
    // Показываем пользователю
    tg.showPopup({
        title: 'Отправка',
        message: 'Отправляю данные боту: ' + action,
        buttons: [{type: 'ok'}]
    });
    
    // НЕ закрываем окно сразу - даём данным уйти
    setTimeout(() => {
        tg.close();
    }, 1000);
}

// Проверяем загрузку
console.log('✅ Web App загружен');
console.log('Telegram user:', tg.initDataUnsafe.user);
