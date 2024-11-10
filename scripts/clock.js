// Set your timezone here, e.g., "Africa/Tripoli" or "America/New_York"
const timezone = "Africa/Tripoli";

function updateClock() {
    const clockElement = document.getElementById("live-clock");

    if (!clockElement) {
        console.log("Clock element not found");
        return;
    }

    // Get current date in the specified timezone
    const nowDate = new Date().toLocaleDateString("en-US", {
        timeZone: timezone,
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    // Get current time in 12-hour format without seconds
    const nowTime = new Date().toLocaleTimeString("en-US", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });

    // Update the clock element's HTML
    clockElement.innerHTML = `
        <div class="date">${nowDate}</div>
        <div class="time">${nowTime}</div>
    `;
}

// Initialize the clock immediately and update every minute
updateClock();
setInterval(updateClock, 60000);
