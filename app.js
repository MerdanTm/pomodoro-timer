// ===== Pomodoro Timer App =====

// ===== Translations =====
const translations = {
    tr: {
        work: 'Çalışma',
        shortBreak: 'Kısa Mola',
        longBreak: 'Uzun Mola',
        settingsToggle: '⚙️ Süreleri Ayarla',
        workTimeLabel: '🎯 Çalışma Süresi',
        shortBreakLabel: '☕ Kısa Mola',
        longBreakLabel: '🌴 Uzun Mola',
        minutes: 'dk',
        soundSettings: '🔔 Ses Ayarları',
        soundEnabled: '🔊 Sesli Bildirimler',
        volumeLabel: '🎚️ Ses Seviyesi',
        saveBtn: '💾 Kaydet',
        saved: '✅ Kaydedildi!',
        completed: 'Tamamlanan',
        taskPlaceholder: 'Şu an ne üzerinde çalışıyorsun?',
        statsTitle: '📊 Bugünkü İstatistikler',
        minutesLabel: 'Dakika',
        hoursLabel: 'Saat',
        footerText: '🍅 Pomodoro Tekniği ile daha verimli çalış!',
        footerTip: '💡 4 pomodoro = 1 uzun mola',
        timeWarning: 'Az kaldı!',
        workComplete: 'Pomodoro tamamlandı! Kısa bir mola al.',
        longBreakEarned: 'Harika! 4 pomodoro tamamladın. Uzun mola zamanı!',
        breakComplete: 'Mola bitti! Çalışmaya devam.',
        fiveMinLeft: '5 dakika kaldı!',
        oneMinLeft: '1 dakika kaldı!',
        thirtySecLeft: '30 saniye kaldı!',
        voiceEnabled: '🗣️ Sesli Anons',
        soundTypeLabel: '🎵 Bildirim Sesi',
        soundChime: 'Melodi',
        soundBell: 'Zil',
        soundDigital: 'Dijital',
        buyMeCoffee: 'Bana kahve ısmarla',
        bannerText: '🍅 Pomodoro Timer\'ı beğendin mi?',
        supportUs: '☕ Destek Ol'
    },
    en: {
        work: 'Work',
        shortBreak: 'Short Break',
        longBreak: 'Long Break',
        settingsToggle: '⚙️ Set Times',
        workTimeLabel: '🎯 Work Duration',
        shortBreakLabel: '☕ Short Break',
        longBreakLabel: '🌴 Long Break',
        minutes: 'min',
        soundSettings: '🔔 Sound Settings',
        soundEnabled: '🔊 Sound Notifications',
        volumeLabel: '🎚️ Volume',
        saveBtn: '💾 Save',
        saved: '✅ Saved!',
        completed: 'Completed',
        taskPlaceholder: 'What are you working on?',
        statsTitle: '📊 Today\'s Statistics',
        minutesLabel: 'Minutes',
        hoursLabel: 'Hours',
        footerText: '🍅 Work more efficiently with Pomodoro Technique!',
        footerTip: '💡 4 pomodoros = 1 long break',
        buyMeCoffee: 'Buy me a coffee',
        bannerText: '🍅 Enjoying Pomodoro Timer?',
        supportUs: '☕ Support Us',
        timeWarning: 'Almost done!',
        workComplete: 'Pomodoro complete! Take a short break.',
        longBreakEarned: 'Great! 4 pomodoros done. Time for a long break!',
        breakComplete: 'Break over! Back to work.',
        fiveMinLeft: '5 minutes left!',
        oneMinLeft: '1 minute left!',
        thirtySecLeft: '30 seconds left!',
        voiceEnabled: '🗣️ Voice Announcements',
        soundTypeLabel: '🎵 Notification Sound',
        soundChime: 'Chime',
        soundBell: 'Bell',
        soundDigital: 'Digital'
    },
    ru: {
        work: 'Работа',
        shortBreak: 'Короткий перерыв',
        longBreak: 'Длинный перерыв',
        settingsToggle: '⚙️ Настроить время',
        workTimeLabel: '🎯 Время работы',
        shortBreakLabel: '☕ Короткий перерыв',
        longBreakLabel: '🌴 Длинный перерыв',
        minutes: 'мин',
        soundSettings: '🔔 Настройки звука',
        soundEnabled: '🔊 Звуковые уведомления',
        volumeLabel: '🎚️ Громкость',
        saveBtn: '💾 Сохранить',
        saved: '✅ Сохранено!',
        completed: 'Завершено',
        taskPlaceholder: 'Над чем вы работаете?',
        statsTitle: '📊 Статистика за сегодня',
        minutesLabel: 'Минуты',
        hoursLabel: 'Часы',
        footerText: '🍅 Работайте эффективнее с техникой Помодоро!',
        footerTip: '💡 4 помодоро = 1 длинный перерыв',
        timeWarning: 'Почти готово!',
        workComplete: 'Помодоро завершено! Сделайте короткий перерыв.',
        longBreakEarned: 'Отлично! 4 помодоро выполнено. Время для длинного перерыва!',
        breakComplete: 'Перерыв окончен! Возвращайтесь к работе.',
        fiveMinLeft: 'Осталось 5 минут!',
        oneMinLeft: 'Осталась 1 минута!',
        thirtySecLeft: 'Осталось 30 секунд!',
        voiceEnabled: '🗣️ Голосовые объявления',
        soundTypeLabel: '🎵 Звук уведомления',
        soundChime: 'Мелодия',
        soundBell: 'Колокол',
        soundDigital: 'Цифровой',
        buyMeCoffee: 'Купить мне кофе',
        bannerText: '🍅 Нравится Pomodoro Timer?',
        supportUs: '☕ Поддержать'
    },
    fr: {
        work: 'Travail',
        shortBreak: 'Pause courte',
        longBreak: 'Pause longue',
        settingsToggle: '⚙️ Régler les durées',
        workTimeLabel: '🎯 Durée de travail',
        shortBreakLabel: '☕ Pause courte',
        longBreakLabel: '🌴 Pause longue',
        minutes: 'min',
        soundSettings: '🔔 Paramètres sonores',
        soundEnabled: '🔊 Notifications sonores',
        volumeLabel: '🎚️ Volume',
        saveBtn: '💾 Enregistrer',
        saved: '✅ Enregistré!',
        completed: 'Terminé',
        taskPlaceholder: 'Sur quoi travaillez-vous?',
        statsTitle: '📊 Statistiques du jour',
        minutesLabel: 'Minutes',
        hoursLabel: 'Heures',
        footerText: '🍅 Travaillez plus efficacement avec la technique Pomodoro!',
        footerTip: '💡 4 pomodoros = 1 longue pause',
        timeWarning: 'Presque fini!',
        workComplete: 'Pomodoro terminé! Prenez une courte pause.',
        longBreakEarned: 'Excellent! 4 pomodoros terminés. C\'est l\'heure de la longue pause!',
        breakComplete: 'Pause terminée! Retour au travail.',
        fiveMinLeft: '5 minutes restantes!',
        oneMinLeft: '1 minute restante!',
        thirtySecLeft: '30 secondes restantes!',
        voiceEnabled: '🗣️ Annonces vocales',
        soundTypeLabel: '🎵 Son de notification',
        soundChime: 'Carillon',
        soundBell: 'Cloche',
        soundDigital: 'Digital',
        buyMeCoffee: 'Offrez-moi un café',
        bannerText: '🍅 Vous aimez Pomodoro Timer?',
        supportUs: '☕ Nous soutenir'
    },
    zh: {
        work: '工作',
        shortBreak: '短休息',
        longBreak: '长休息',
        settingsToggle: '⚙️ 设置时间',
        workTimeLabel: '🎯 工作时长',
        shortBreakLabel: '☕ 短休息',
        longBreakLabel: '🌴 长休息',
        minutes: '分钟',
        soundSettings: '🔔 声音设置',
        soundEnabled: '🔊 声音通知',
        volumeLabel: '🎚️ 音量',
        saveBtn: '💾 保存',
        saved: '✅ 已保存!',
        completed: '已完成',
        taskPlaceholder: '你正在做什么?',
        statsTitle: '📊 今日统计',
        minutesLabel: '分钟',
        hoursLabel: '小时',
        footerText: '🍅 使用番茄工作法更高效地工作!',
        footerTip: '💡 4个番茄 = 1次长休息',
        timeWarning: '快结束了!',
        workComplete: '番茄完成！休息一下吧。',
        longBreakEarned: '太棒了！完成4个番茄。长休息时间!',
        breakComplete: '休息结束！继续工作。',
        fiveMinLeft: '还剩5分钟!',
        oneMinLeft: '还剩1分钟!',
        thirtySecLeft: '还剩30秒!',
        voiceEnabled: '🗣️ 语音播报',
        soundTypeLabel: '🎵 通知音效',
        soundChime: '风铃',
        soundBell: '铃声',
        soundDigital: '电子音',
        buyMeCoffee: '请我喝咖啡',
        bannerText: '🍅 喜欢番茄计时器吗？',
        supportUs: '☕ 支持我们'
    }
};

let currentLang = 'en';

// DOM Elements
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const skipBtn = document.getElementById('skipBtn');
const modeBtns = document.querySelectorAll('.mode-btn');
const progressCircle = document.querySelector('.progress-ring-circle');
const timerText = document.querySelector('.timer-text');
const timerCard = document.querySelector('.timer-card');
const sessionCountEl = document.getElementById('sessionCount');
const pomodoroDots = document.querySelectorAll('.dot');
const taskInput = document.getElementById('taskInput');
const currentTaskEl = document.getElementById('currentTask');
const totalPomodorosEl = document.getElementById('totalPomodoros');
const totalMinutesEl = document.getElementById('totalMinutes');
const totalHoursEl = document.getElementById('totalHours');
const playIcon = document.querySelector('.play-icon');
const pauseIcon = document.querySelector('.pause-icon');

// Settings Elements
const settingsToggle = document.getElementById('settingsToggle');
const settingsPanel = document.getElementById('settingsPanel');
const workTimeInput = document.getElementById('workTime');
const shortBreakTimeInput = document.getElementById('shortBreakTime');
const longBreakTimeInput = document.getElementById('longBreakTime');
const saveSettingsBtn = document.getElementById('saveSettingsBtn');
const timeBtns = document.querySelectorAll('.time-btn');
const soundEnabledInput = document.getElementById('soundEnabled');
const voiceEnabledInput = document.getElementById('voiceEnabled');
const volumeSlider = document.getElementById('volumeSlider');
const soundTypeSelect = document.getElementById('soundType');
const testSoundBtn = document.getElementById('testSoundBtn');
const themeToggle = document.getElementById('themeToggle');
const freemiumBanner = document.getElementById('freemiumBanner');
const bannerClose = document.getElementById('bannerClose');
const langDropdown = document.getElementById('languageDropdown');
const langCurrent = document.getElementById('langCurrent');
const langOptions = document.querySelectorAll('.lang-option');
const currentFlag = document.getElementById('currentFlag');
const warningIndicator = document.getElementById('warningIndicator');
const warningText = document.getElementById('warningText');

// Default Settings
let settings = {
    workTime: 45,
    shortBreakTime: 5,
    longBreakTime: 15,
    soundEnabled: true,
    voiceEnabled: true,
    volume: 70,
    language: 'en',
    soundType: 'chime', // chime, bell, digital
    theme: 'light', // light, dark
    bannerClosed: false
};

// Warning state
let warningPlayed = {
    fiveMin: false,
    oneMin: false,
    thirtySec: false
};

// Timer State
let timer = {
    minutes: 45,
    seconds: 0,
    totalSeconds: 45 * 60,
    initialSeconds: 45 * 60,
    isRunning: false,
    interval: null,
    mode: 'work', // work, shortBreak, longBreak
    sessionCount: 1,
    completedPomodoros: 0,
    totalWorkedMinutes: 0
};

// Circle circumference for progress ring
const CIRCUMFERENCE = 2 * Math.PI * 130; // r = 130

// Initialize
function init() {
    progressCircle.style.strokeDasharray = CIRCUMFERENCE;
    progressCircle.style.strokeDashoffset = 0;
    loadSettings();
    loadStats();
    applyTheme();
    updateDisplay();
    applyLanguage();
    
    // Check if banner was closed
    if (settings.bannerClosed) {
        freemiumBanner.classList.add('hidden');
    }
    
    // Event Listeners
    startBtn.addEventListener('click', toggleTimer);
    resetBtn.addEventListener('click', resetTimer);
    skipBtn.addEventListener('click', skipToNext);
    
    modeBtns.forEach(btn => {
        btn.addEventListener('click', () => switchMode(btn));
    });
    
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            setTask();
        }
    });
    
    taskInput.addEventListener('blur', setTask);
    
    // Settings Event Listeners
    settingsToggle.addEventListener('click', toggleSettings);
    saveSettingsBtn.addEventListener('click', saveSettings);
    testSoundBtn.addEventListener('click', testSound);
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Banner close
    bannerClose.addEventListener('click', closeBanner);
    
    // Language dropdown toggle
    langCurrent.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('open');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!langDropdown.contains(e.target)) {
            langDropdown.classList.remove('open');
        }
    });
    
    // Language option selection
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            langOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            currentLang = option.dataset.lang;
            settings.language = currentLang;
            
            // Update current flag
            const flag = option.querySelector('.flag').textContent;
            currentFlag.textContent = flag;
            
            // Close dropdown
            langDropdown.classList.remove('open');
            
            applyLanguage();
            localStorage.setItem('pomodoroSettings', JSON.stringify(settings));
        });
    });
    
    // Time adjustment buttons
    timeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const input = document.getElementById(targetId);
            const currentVal = parseInt(input.value) || 0;
            const min = parseInt(input.min);
            const max = parseInt(input.max);
            
            if (btn.classList.contains('plus')) {
                input.value = Math.min(currentVal + 1, max);
            } else {
                input.value = Math.max(currentVal - 1, min);
            }
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && document.activeElement !== taskInput && 
            document.activeElement.type !== 'number') {
            e.preventDefault();
            toggleTimer();
        }
        if (e.code === 'KeyR' && document.activeElement !== taskInput &&
            document.activeElement.type !== 'number') {
            resetTimer();
        }
    });
}

// Toggle Timer (Start/Pause)
function toggleTimer() {
    if (timer.isRunning) {
        pauseTimer();
    } else {
        startTimer();
    }
}

// Start Timer
function startTimer() {
    timer.isRunning = true;
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
    timerText.classList.remove('paused');
    
    // Reset warning state
    warningPlayed = { fiveMin: false, oneMin: false, thirtySec: false };
    warningIndicator.classList.remove('show');
    
    timer.interval = setInterval(() => {
        if (timer.totalSeconds > 0) {
            timer.totalSeconds--;
            updateDisplay();
            updateProgress();
            checkWarnings();
        } else {
            timerComplete();
        }
    }, 1000);
}

// Pause Timer
function pauseTimer() {
    timer.isRunning = false;
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
    timerText.classList.add('paused');
    clearInterval(timer.interval);
}

// Reset Timer
function resetTimer() {
    pauseTimer();
    timer.totalSeconds = timer.initialSeconds;
    timer.minutes = Math.floor(timer.initialSeconds / 60);
    timer.seconds = 0;
    warningPlayed = { fiveMin: false, oneMin: false, thirtySec: false };
    warningIndicator.classList.remove('show');
    updateDisplay();
    updateProgress();
}

// Skip to Next
function skipToNext() {
    if (timer.mode === 'work') {
        // Don't count incomplete pomodoro
        if (timer.completedPomodoros % 4 === 3) {
            switchMode(document.querySelector('[data-mode="longBreak"]'));
        } else {
            switchMode(document.querySelector('[data-mode="shortBreak"]'));
        }
    } else {
        switchMode(document.querySelector('[data-mode="work"]'));
    }
}

// Switch Mode
function switchMode(btn) {
    pauseTimer();
    
    // Update active button
    modeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Update timer settings based on saved settings
    const mode = btn.dataset.mode;
    let time;
    
    switch(mode) {
        case 'work':
            time = settings.workTime;
            break;
        case 'shortBreak':
            time = settings.shortBreakTime;
            break;
        case 'longBreak':
            time = settings.longBreakTime;
            break;
        default:
            time = settings.workTime;
    }
    
    timer.mode = mode;
    timer.minutes = time;
    timer.seconds = 0;
    timer.totalSeconds = time * 60;
    timer.initialSeconds = time * 60;
    
    // Update body class for styling
    document.body.classList.remove('break-mode', 'long-break-mode');
    if (mode === 'shortBreak') {
        document.body.classList.add('break-mode');
    } else if (mode === 'longBreak') {
        document.body.classList.add('long-break-mode');
    }
    
    updateDisplay();
    updateProgress();
}

// Timer Complete
function timerComplete() {
    pauseTimer();
    playCompleteSound();
    warningIndicator.classList.remove('show');
    timerCard.classList.add('complete');
    setTimeout(() => timerCard.classList.remove('complete'), 600);
    
    if (timer.mode === 'work') {
        // Complete a pomodoro
        timer.completedPomodoros++;
        timer.totalWorkedMinutes += Math.floor(timer.initialSeconds / 60);
        updateStats();
        saveStats();
        
        // Update dots
        const dotIndex = (timer.completedPomodoros - 1) % 4;
        pomodoroDots[dotIndex].classList.add('completed');
        
        // Check for long break
        if (timer.completedPomodoros % 4 === 0) {
            // Reset dots
            pomodoroDots.forEach(dot => dot.classList.remove('completed'));
            switchMode(document.querySelector('[data-mode="longBreak"]'));
            showNotification('🎉 ' + translations[currentLang].longBreakEarned);
            setTimeout(() => speakCompletion(translations[currentLang].longBreakEarned), 500);
        } else {
            switchMode(document.querySelector('[data-mode="shortBreak"]'));
            showNotification('✅ ' + translations[currentLang].workComplete);
            setTimeout(() => speakCompletion(translations[currentLang].workComplete), 500);
        }
        
        timer.sessionCount++;
        sessionCountEl.textContent = timer.sessionCount;
    } else {
        // Break complete
        switchMode(document.querySelector('[data-mode="work"]'));
        showNotification('⏰ ' + translations[currentLang].breakComplete);
        setTimeout(() => speakCompletion(translations[currentLang].breakComplete), 500);
    }
}

// Check for warning times
function checkWarnings() {
    if (!settings.soundEnabled && !settings.voiceEnabled) return;
    
    const secondsLeft = timer.totalSeconds;
    
    // Work mode: 5 minute warning
    if (timer.mode === 'work' && secondsLeft === 300 && !warningPlayed.fiveMin) {
        warningPlayed.fiveMin = true;
        if (settings.soundEnabled) playWarningSound();
        showWarning(translations[currentLang].fiveMinLeft);
        speakTime(5, 'minutes');
    }
    
    // Long break: 1 minute warning
    if (timer.mode === 'longBreak' && secondsLeft === 60 && !warningPlayed.oneMin) {
        warningPlayed.oneMin = true;
        if (settings.soundEnabled) playWarningSound();
        showWarning(translations[currentLang].oneMinLeft);
        speakTime(1, 'minute');
    }
    
    // Short break: 30 second warning
    if (timer.mode === 'shortBreak' && secondsLeft === 30 && !warningPlayed.thirtySec) {
        warningPlayed.thirtySec = true;
        if (settings.soundEnabled) playWarningSound();
        showWarning(translations[currentLang].thirtySecLeft);
        speakTime(30, 'seconds');
    }
}

// Text-to-Speech function
function speakTime(amount, unit) {
    if (!settings.voiceEnabled) return;
    if (!('speechSynthesis' in window)) return;
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    let text = '';
    const lang = currentLang;
    
    if (lang === 'en') {
        text = `${amount} ${unit} left`;
    } else if (lang === 'tr') {
        if (unit === 'minutes' || unit === 'minute') {
            text = `${amount} dakika kaldı`;
        } else {
            text = `${amount} saniye kaldı`;
        }
    } else if (lang === 'ru') {
        if (unit === 'minutes') {
            text = `Осталось ${amount} минут`;
        } else if (unit === 'minute') {
            text = `Осталась ${amount} минута`;
        } else {
            text = `Осталось ${amount} секунд`;
        }
    } else if (lang === 'fr') {
        if (unit === 'minutes' || unit === 'minute') {
            text = `${amount} ${unit === 'minute' ? 'minute' : 'minutes'} restante${amount > 1 ? 's' : ''}`;
        } else {
            text = `${amount} secondes restantes`;
        }
    } else if (lang === 'zh') {
        if (unit === 'minutes' || unit === 'minute') {
            text = `还剩${amount}分钟`;
        } else {
            text = `还剩${amount}秒`;
        }
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.volume = settings.volume / 100;
    utterance.rate = 1;
    
    // Set language for better pronunciation
    if (lang === 'en') utterance.lang = 'en-US';
    else if (lang === 'tr') utterance.lang = 'tr-TR';
    else if (lang === 'ru') utterance.lang = 'ru-RU';
    else if (lang === 'fr') utterance.lang = 'fr-FR';
    else if (lang === 'zh') utterance.lang = 'zh-CN';
    
    window.speechSynthesis.speak(utterance);
}

// Speak completion message
function speakCompletion(message) {
    if (!settings.voiceEnabled) return;
    if (!('speechSynthesis' in window)) return;
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.volume = settings.volume / 100;
    utterance.rate = 1;
    
    if (currentLang === 'en') utterance.lang = 'en-US';
    else if (currentLang === 'tr') utterance.lang = 'tr-TR';
    else if (currentLang === 'ru') utterance.lang = 'ru-RU';
    else if (currentLang === 'fr') utterance.lang = 'fr-FR';
    else if (currentLang === 'zh') utterance.lang = 'zh-CN';
    
    window.speechSynthesis.speak(utterance);
}

// Show warning indicator
function showWarning(message) {
    warningText.textContent = message;
    warningIndicator.classList.add('show');
    
    // Hide after 5 seconds
    setTimeout(() => {
        warningIndicator.classList.remove('show');
    }, 5000);
}

// Update Display
function updateDisplay() {
    const mins = Math.floor(timer.totalSeconds / 60);
    const secs = timer.totalSeconds % 60;
    
    minutesEl.textContent = mins.toString().padStart(2, '0');
    secondsEl.textContent = secs.toString().padStart(2, '0');
    
    // Update page title
    document.title = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')} - Pomodoro`;
}

// Update Progress Ring
function updateProgress() {
    const progress = timer.totalSeconds / timer.initialSeconds;
    const offset = CIRCUMFERENCE * (1 - progress);
    progressCircle.style.strokeDashoffset = offset;
}

// Update Stats Display
function updateStats() {
    totalPomodorosEl.textContent = timer.completedPomodoros;
    totalMinutesEl.textContent = timer.totalWorkedMinutes;
    totalHoursEl.textContent = (timer.totalWorkedMinutes / 60).toFixed(1);
}

// Save Stats to LocalStorage
function saveStats() {
    const today = new Date().toDateString();
    const stats = {
        date: today,
        pomodoros: timer.completedPomodoros,
        minutes: timer.totalWorkedMinutes
    };
    localStorage.setItem('pomodoroStats', JSON.stringify(stats));
}

// Load Stats from LocalStorage
function loadStats() {
    const saved = localStorage.getItem('pomodoroStats');
    if (saved) {
        const stats = JSON.parse(saved);
        const today = new Date().toDateString();
        
        if (stats.date === today) {
            timer.completedPomodoros = stats.pomodoros;
            timer.totalWorkedMinutes = stats.minutes;
            updateStats();
            
            // Update dots
            const completedInCycle = timer.completedPomodoros % 4;
            for (let i = 0; i < completedInCycle; i++) {
                pomodoroDots[i].classList.add('completed');
            }
        }
    }
}

// Toggle Settings Panel
function toggleSettings() {
    settingsPanel.classList.toggle('show');
    settingsToggle.classList.toggle('active');
}

// Save Settings
function saveSettings() {
    const newWorkTime = parseInt(workTimeInput.value) || 45;
    const newShortBreak = parseInt(shortBreakTimeInput.value) || 5;
    const newLongBreak = parseInt(longBreakTimeInput.value) || 15;
    
    // Update settings object
    settings.workTime = Math.max(1, Math.min(120, newWorkTime));
    settings.shortBreakTime = Math.max(1, Math.min(30, newShortBreak));
    settings.longBreakTime = Math.max(1, Math.min(60, newLongBreak));
    settings.soundEnabled = soundEnabledInput.checked;
    settings.voiceEnabled = voiceEnabledInput.checked;
    settings.volume = parseInt(volumeSlider.value);
    settings.language = currentLang;
    settings.soundType = soundTypeSelect.value;
    
    // Save to localStorage
    localStorage.setItem('pomodoroSettings', JSON.stringify(settings));
    
    // Update mode buttons data attributes
    document.querySelector('[data-mode="work"]').dataset.time = settings.workTime;
    document.querySelector('[data-mode="shortBreak"]').dataset.time = settings.shortBreakTime;
    document.querySelector('[data-mode="longBreak"]').dataset.time = settings.longBreakTime;
    
    // Update current timer if not running
    if (!timer.isRunning) {
        const activeBtn = document.querySelector('.mode-btn.active');
        switchMode(activeBtn);
    }
    
    // Close settings panel
    toggleSettings();
    
    // Show confirmation
    showSettingsSaved();
}

// Load Settings from LocalStorage
function loadSettings() {
    const saved = localStorage.getItem('pomodoroSettings');
    if (saved) {
        const savedSettings = JSON.parse(saved);
        settings.workTime = savedSettings.workTime || 45;
        settings.shortBreakTime = savedSettings.shortBreakTime || 5;
        settings.longBreakTime = savedSettings.longBreakTime || 15;
        settings.soundEnabled = savedSettings.soundEnabled !== undefined ? savedSettings.soundEnabled : true;
        settings.voiceEnabled = savedSettings.voiceEnabled !== undefined ? savedSettings.voiceEnabled : true;
        settings.volume = savedSettings.volume !== undefined ? savedSettings.volume : 70;
        settings.language = savedSettings.language || 'en';
        settings.soundType = savedSettings.soundType || 'chime';
        settings.theme = savedSettings.theme || 'light';
        settings.bannerClosed = savedSettings.bannerClosed || false;
    }
    
    // Update inputs
    workTimeInput.value = settings.workTime;
    shortBreakTimeInput.value = settings.shortBreakTime;
    longBreakTimeInput.value = settings.longBreakTime;
    soundEnabledInput.checked = settings.soundEnabled;
    voiceEnabledInput.checked = settings.voiceEnabled;
    volumeSlider.value = settings.volume;
    soundTypeSelect.value = settings.soundType;
    
    // Update language
    currentLang = settings.language;
    langOptions.forEach(option => {
        option.classList.toggle('active', option.dataset.lang === currentLang);
        if (option.dataset.lang === currentLang) {
            currentFlag.textContent = option.querySelector('.flag').textContent;
        }
    });
    
    // Update mode buttons
    document.querySelector('[data-mode="work"]').dataset.time = settings.workTime;
    document.querySelector('[data-mode="shortBreak"]').dataset.time = settings.shortBreakTime;
    document.querySelector('[data-mode="longBreak"]').dataset.time = settings.longBreakTime;
    
    // Update initial timer
    timer.minutes = settings.workTime;
    timer.totalSeconds = settings.workTime * 60;
    timer.initialSeconds = settings.workTime * 60;
}

// Show settings saved confirmation
function showSettingsSaved() {
    const originalText = translations[currentLang].saveBtn;
    saveSettingsBtn.textContent = translations[currentLang].saved;
    saveSettingsBtn.style.background = 'linear-gradient(135deg, #10b981, #34d399)';
    
    setTimeout(() => {
        saveSettingsBtn.textContent = originalText;
        saveSettingsBtn.style.background = '';
    }, 1500);
}

// Apply Language
function applyLanguage() {
    const t = translations[currentLang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (t[key]) {
            el.placeholder = t[key];
        }
    });
    
    // Update select options
    const soundSelect = document.getElementById('soundType');
    if (soundSelect) {
        soundSelect.options[0].text = t.soundChime || 'Chime';
        soundSelect.options[1].text = t.soundBell || 'Bell';
        soundSelect.options[2].text = t.soundDigital || 'Digital';
    }
    
    // Update test button
    if (testSoundBtn) {
        testSoundBtn.textContent = currentLang === 'tr' ? '🔊 Sesi Test Et' : 
                                   currentLang === 'ru' ? '🔊 Тест звука' :
                                   currentLang === 'fr' ? '🔊 Tester le son' :
                                   currentLang === 'zh' ? '🔊 测试声音' :
                                   '🔊 Test Sound';
    }
    
    // Update banner text
    const bannerText = document.querySelector('.banner-text');
    const bannerBtn = document.querySelector('.banner-btn');
    if (bannerText && t.bannerText) bannerText.textContent = t.bannerText;
    if (bannerBtn && t.supportUs) bannerBtn.textContent = t.supportUs;
    
    // Update page title
    document.title = `🍅 Pomodoro Timer`;
}

// Toggle Theme
function toggleTheme() {
    settings.theme = settings.theme === 'light' ? 'dark' : 'light';
    applyTheme();
    localStorage.setItem('pomodoroSettings', JSON.stringify(settings));
}

// Apply Theme
function applyTheme() {
    if (settings.theme === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
}

// Close Banner
function closeBanner() {
    freemiumBanner.classList.add('hidden');
    settings.bannerClosed = true;
    localStorage.setItem('pomodoroSettings', JSON.stringify(settings));
}

// Test Sound
function testSound() {
    const tempSoundEnabled = settings.soundEnabled;
    const tempVoiceEnabled = settings.voiceEnabled;
    
    // Temporarily enable for testing
    settings.soundEnabled = true;
    settings.voiceEnabled = voiceEnabledInput.checked;
    settings.volume = parseInt(volumeSlider.value);
    settings.soundType = soundTypeSelect.value;
    
    // Play the warning sound
    playWarningSound();
    
    // Speak test message
    if (settings.voiceEnabled) {
        setTimeout(() => {
            speakTime(5, 'minutes');
        }, 600);
    }
    
    // Restore original settings
    settings.soundEnabled = tempSoundEnabled;
    settings.voiceEnabled = tempVoiceEnabled;
}

// Set Task
function setTask() {
    const task = taskInput.value.trim();
    if (task) {
        currentTaskEl.textContent = `📌 ${task}`;
        taskInput.blur();
    } else {
        currentTaskEl.textContent = '';
    }
}

// Play Warning Sound
function playWarningSound() {
    if (!settings.soundEnabled) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const volume = settings.volume / 100;
    
    switch(settings.soundType) {
        case 'chime':
            playChimeWarning(audioContext, volume);
            break;
        case 'bell':
            playBellWarning(audioContext, volume);
            break;
        case 'digital':
            playDigitalWarning(audioContext, volume);
            break;
        default:
            playChimeWarning(audioContext, volume);
    }
}

// Chime Warning Sound
function playChimeWarning(audioContext, volume) {
    const playTone = (freq, start, duration, type = 'sine') => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = freq;
        oscillator.type = type;
        
        gainNode.gain.setValueAtTime(0.2 * volume, audioContext.currentTime + start);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + start + duration);
        
        oscillator.start(audioContext.currentTime + start);
        oscillator.stop(audioContext.currentTime + start + duration);
    };
    
    playTone(600, 0, 0.15);
    playTone(600, 0.2, 0.15);
    playTone(800, 0.4, 0.2);
}

// Bell Warning Sound
function playBellWarning(audioContext, volume) {
    const playTone = (freq, start, duration) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = freq;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3 * volume, audioContext.currentTime + start);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + start + duration);
        
        oscillator.start(audioContext.currentTime + start);
        oscillator.stop(audioContext.currentTime + start + duration);
    };
    
    // Bell-like sound with harmonics
    playTone(880, 0, 0.6);
    playTone(1760, 0, 0.3);
    playTone(2640, 0, 0.15);
}

// Digital Warning Sound
function playDigitalWarning(audioContext, volume) {
    const playTone = (freq, start, duration) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = freq;
        oscillator.type = 'square';
        
        gainNode.gain.setValueAtTime(0.15 * volume, audioContext.currentTime + start);
        gainNode.gain.setValueAtTime(0, audioContext.currentTime + start + duration);
        
        oscillator.start(audioContext.currentTime + start);
        oscillator.stop(audioContext.currentTime + start + duration + 0.01);
    };
    
    // Digital beep pattern
    playTone(1000, 0, 0.1);
    playTone(1000, 0.15, 0.1);
    playTone(1500, 0.3, 0.15);
}

// Play Complete Sound
function playCompleteSound() {
    if (!settings.soundEnabled) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const volume = settings.volume / 100;
    
    switch(settings.soundType) {
        case 'chime':
            playChimeComplete(audioContext, volume);
            break;
        case 'bell':
            playBellComplete(audioContext, volume);
            break;
        case 'digital':
            playDigitalComplete(audioContext, volume);
            break;
        default:
            playChimeComplete(audioContext, volume);
    }
}

// Chime Complete Sound
function playChimeComplete(audioContext, volume) {
    const playTone = (freq, start, duration) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = freq;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3 * volume, audioContext.currentTime + start);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + start + duration);
        
        oscillator.start(audioContext.currentTime + start);
        oscillator.stop(audioContext.currentTime + start + duration);
    };
    
    // Pleasant completion chime
    playTone(523, 0, 0.2);      // C5
    playTone(659, 0.15, 0.2);   // E5
    playTone(784, 0.3, 0.2);    // G5
    playTone(1047, 0.45, 0.4);  // C6
}

// Bell Complete Sound
function playBellComplete(audioContext, volume) {
    const playTone = (freq, start, duration) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = freq;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.35 * volume, audioContext.currentTime + start);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + start + duration);
        
        oscillator.start(audioContext.currentTime + start);
        oscillator.stop(audioContext.currentTime + start + duration);
    };
    
    // Church bell style
    playTone(440, 0, 0.8);
    playTone(880, 0, 0.5);
    playTone(1320, 0, 0.3);
    playTone(440, 0.5, 0.8);
    playTone(880, 0.5, 0.5);
}

// Digital Complete Sound
function playDigitalComplete(audioContext, volume) {
    const playTone = (freq, start, duration) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = freq;
        oscillator.type = 'square';
        
        gainNode.gain.setValueAtTime(0.15 * volume, audioContext.currentTime + start);
        gainNode.gain.setValueAtTime(0, audioContext.currentTime + start + duration);
        
        oscillator.start(audioContext.currentTime + start);
        oscillator.stop(audioContext.currentTime + start + duration + 0.01);
    };
    
    // Victory jingle
    playTone(800, 0, 0.1);
    playTone(1000, 0.1, 0.1);
    playTone(1200, 0.2, 0.1);
    playTone(1600, 0.3, 0.2);
}

// Show Notification
function showNotification(message) {
    // Check if notifications are supported and permitted
    if ('Notification' in window) {
        if (Notification.permission === 'granted') {
            new Notification('🍅 Pomodoro Timer', {
                body: message,
                icon: '🍅'
            });
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    new Notification('🍅 Pomodoro Timer', {
                        body: message,
                        icon: '🍅'
                    });
                }
            });
        }
    }
    
    // Also log to console for fallback
    console.log(message);
}

// Request notification permission on first interaction
document.addEventListener('click', () => {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}, { once: true });

// Initialize the app
init();

