const countdownDisplay = document.getElementById("countdown-display")
const time = document.getElementById("time")

function renderCountdown(){
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
    const d = new Date();
    const day = d.getDate();
    let daysTil = christmas - day;
    countdownDisplay.textContent = daysTil;
    let t = d.toLocaleString('default', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'America/Los_Angeles',
    });
    time.textContent = t;
}
 
renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.