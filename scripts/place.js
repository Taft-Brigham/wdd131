// Static values
const temp = 5; // °C
const wind = 10; // km/h

// Function to calculate wind chill (metric)
function calculateWindChill(temp, wind) {
    if (temp > 10 || wind <= 4.8) {
        return "N/A";
    }
    return (13.12 + 0.6215 * temp + (0.3965 * temp - 11.37) * Math.pow(wind, 0.16)).toFixed(1) + "°C";
}

// Update weather on load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('temp').textContent = temp;
    document.getElementById('wind').textContent = wind;
    document.getElementById('chill').textContent = calculateWindChill(temp, wind);
    
    // Footer updates
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('modified').textContent = document.lastModified;
});