// ===== PWA SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('Service Worker registered successfully');
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

// ===== PWA INSTALL PROMPT =====
let deferredPrompt;
const installPromptDiv = document.getElementById('installPrompt');
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installPromptDiv) {
        installPromptDiv.style.display = 'flex';
    }
});

if (installBtn) {
    installBtn.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`User response: ${outcome}`);
            deferredPrompt = null;
            if (installPromptDiv) {
                installPromptDiv.style.display = 'none';
            }
        }
    });
}

window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    deferredPrompt = null;
    if (installPromptDiv) {
        installPromptDiv.style.display = 'none';
    }
});

// ===== THEME MANAGEMENT =====
function initializeTheme() {
    const savedTheme = localStorage.getItem('wallpaperTheme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        updateThemeIcon(true);
    } else if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.remove('light-theme');
        updateThemeIcon(false);
    }
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLightTheme = document.body.classList.contains('light-theme');
    localStorage.setItem('wallpaperTheme', isLightTheme ? 'light' : 'dark');
    updateThemeIcon(isLightTheme);
}

function updateThemeIcon(isLight) {
    const icon = document.querySelector('.theme-icon');
    if (icon) {
        icon.textContent = isLight ? '🌙' : '☀️';
    }
}

// ===== DAY TRACKER INITIALIZATION =====
function initializeWallpaper() {
    const today = new Date();
    const year = 2026;
    
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    const totalDays = isLeapYear ? 366 : 365;
    
    const yearStart = new Date(year, 0, 1);
    const daysCompleted = today < yearStart ? 0 : Math.floor((today - yearStart) / (1000 * 60 * 60 * 24));
    
    const dotsGrid = document.getElementById('dotsGrid');
    if (dotsGrid) {
        dotsGrid.innerHTML = '';
        
        for (let i = 0; i < totalDays; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            
            if (i < daysCompleted) {
                dot.classList.add('completed');
            }
            
            const dayDate = new Date(year, 0, i + 1);
            dot.title = dayDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            
            dotsGrid.appendChild(dot);
        }
    }
    
    const progressPercentage = (daysCompleted / totalDays) * 100;
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        progressFill.style.width = progressPercentage + '%';
    }
    
    const remainingDays = totalDays - daysCompleted;
    const statsDiv = document.getElementById('stats');
    if (statsDiv) {
        statsDiv.innerHTML = `<strong>${daysCompleted} / ${totalDays}</strong><br>${remainingDays} days remaining`;
    }
}

// ===== ANALOG CLOCK ANIMATION =====
function updateClock() {
    const now = new Date();
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();
    
    const secondDegrees = ((seconds + milliseconds / 1000) / 60) * 360;
    const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
    const hourDegrees = ((hours % 12 + minutes / 60) / 12) * 360;
    
    const secondHand = document.getElementById('secondHand');
    const minuteHand = document.getElementById('minuteHand');
    const hourHand = document.getElementById('hourHand');
    
    if (secondHand) secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    if (minuteHand) minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    if (hourHand) hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// ===== TIME REMAINING CALCULATION =====
function updateTimeRemaining() {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);
    
    const timeRemaining = endOfDay - now;
    const totalSeconds = Math.floor(timeRemaining / 1000);
    const hoursRemaining = Math.floor(totalSeconds / 3600);
    const minutesRemaining = Math.floor((totalSeconds % 3600) / 60);
    
    const formattedTime = `${String(hoursRemaining).padStart(2, '0')}:${String(minutesRemaining).padStart(2, '0')}`;
    const hoursValue = document.getElementById('hoursValue');
    if (hoursValue) {
        hoursValue.textContent = formattedTime;
    }
}

// ===== REFRESH FUNCTIONS =====
window.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeWallpaper();
    updateClock();
    updateTimeRemaining();
    
    const themeButton = document.getElementById('themeButton');
    if (themeButton) {
        themeButton.addEventListener('click', toggleTheme);
    }
    
    setInterval(updateClock, 100);
    setInterval(updateTimeRemaining, 1000);
    setInterval(initializeWallpaper, 3600000);
});

document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        updateClock();
        updateTimeRemaining();
        initializeWallpaper();
    }
});
