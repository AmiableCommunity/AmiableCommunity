// Weather API Integration
async function fetchWeather() {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Astana&appid=YOUR_API_KEY&units=metric');
  const data = await response.json();
  document.getElementById('weather-container').innerHTML = `
    <p>City: ${data.name}</p>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Condition: ${data.weather[0].description}</p>
  `;
}

// Guide Filter Functionality
document.getElementById('category').addEventListener('change', (e) => {
  const category = e.target.value;
  const results = {
    documents: "Important documents you need to immigrate.",
    finance: "Learn about banking and financial systems.",
    language: "Language classes for newcomers.",
    work: "Work and study opportunities in Kazakhstan."
  };
  document.getElementById('guide-results').innerText = results[category];
});

// Initialize Weather
fetchWeather();
