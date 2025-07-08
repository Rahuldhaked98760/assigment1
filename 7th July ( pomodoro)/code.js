//  Default Settings
let defaultSettings = {
  work: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
  cyclesBeforeLongBreak: 4
};

//  Timer State
let settings = { ...defaultSettings };
let timer = null;
let timeLeft = settings.work;
let isRunning = false;
let currentSession = 'Work'; // Work | Short Break | Long Break
let completedPomodoros = 0;

//  Set Custom Durations
function setCustomDurations(workMin, shortBreakMin, longBreakMin, cycles) {
  settings.work = workMin * 60;
  settings.shortBreak = shortBreakMin * 60;
  settings.longBreak = longBreakMin * 60;
  settings.cyclesBeforeLongBreak = cycles;
  resetTimer();
  console.log(" Custom durations set:");
  console.log(`Work Duration: ${workMin} minutes`);
  console.log(`Short Break Duration: ${shortBreakMin} minutes`);
  console.log(`Long Break Duration: ${longBreakMin} minutes`);
  console.log(`Pomodoros before Long Break: ${cycles}`);
}

//  Start Timer
function startTimer() {
  if (!isRunning) {
    isRunning = true;
    console.log("▶️ Timer Started");
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        displayTime();
      } else {
        switchSession();
      }
    }, 1000);
  }
}

//  Pause Timer
function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
  console.log(" Timer Paused");
}

//  Reset Timer
function resetTimer() {
  pauseTimer();
  currentSession = 'Work';
  timeLeft = settings.work;
  completedPomodoros = 0;
  console.log(" Timer Reset");
  displayTime();
  updateVisualIndicators();
}

//  Switch Session
function switchSession() {
  if (currentSession === 'Work') {
    completedPomodoros++;
    if (completedPomodoros % settings.cyclesBeforeLongBreak === 0) {
      currentSession = 'Long Break';
      timeLeft = settings.longBreak;
      console.log(" Switching to Long Break");
    } else {
      currentSession = 'Short Break';
      timeLeft = settings.shortBreak;
      console.log(" Switching to Short Break");
    }
  } else {
    currentSession = 'Work';
    timeLeft = settings.work;
    console.log(" Switching to Work Session");
  }
  updateVisualIndicators();
  displayTime();
}

// Display Timer and Session Info
function displayTime() {
  let min = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  let sec = (timeLeft % 60).toString().padStart(2, '0');
  console.log(` Current Session: ${currentSession}`);
  console.log(` Time Left: ${min}:${sec}`);
  updateVisualIndicators();
}

// Visual Progress Indicators
function updateVisualIndicators() {
  let progress = '';
  for (let i = 0; i < settings.cyclesBeforeLongBreak; i++) {
    progress += i < (completedPomodoros % settings.cyclesBeforeLongBreak) ? '🔴 ' : '⚪ ';
  }
  console.log(`Pomodoro Progress: ${progress.trim()}`);
}

//  Example Usage
setCustomDurations(25, 5, 15, 4); 
startTimer();                     
