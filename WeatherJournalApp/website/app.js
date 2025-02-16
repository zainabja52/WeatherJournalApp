/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = 'fd73230abe63fd60acb1ab7f3b2d9f0f&units=metric'; 

// DOM Elements
const generateBtn = document.querySelector('.button');
const zipInput = document.getElementById('zip');
const feelingsInput = document.getElementById('feelings');

// Event Listener
generateBtn.addEventListener('click', handleGenerate);

/* Function to handle the Generate button click */
async function handleGenerate() {
  const zipCode = zipInput.value;
  const feelings = feelingsInput.value;

  if (!zipCode) {
    alert('Please enter a zip code');
    return;
  }

  try {
    // Fetch weather data
    const weatherData = await getWeather(baseURL, zipCode, apiKey);

    // Extract relevant data
    const newDate = new Date().toLocaleDateString();
    const temperature = weatherData.main.temp;
    const location = weatherData.name;
    const description = weatherData.weather[0].description;

    // Post data to server
    await postData('/add', {
      temperature,
      date: newDate,
      location,
      description,
      userResponse: feelings,
    });

    // Update UI with fetched and user data
    updateUI();
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. Please try again.');
  }
}

/* Function to GET weather data from OpenWeatherMap API */
async function getWeather(baseURL, zip, key) {
  const response = await fetch(`${baseURL}${zip}&appid=${key}`);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return await response.json();
}

/* Function to POST data to the server */
async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to send data to server');
  }
  return await response.json();
}

/* Function to GET data from the server and update the UI */
async function updateUI() {
  const response = await fetch('/data');
  if (!response.ok) {
    throw new Error('Failed to fetch data from server');
  }

  const allData = await response.json();

  // Display the data
  document.getElementById('entryHolder').style.display = 'block';
  document.getElementById('date').innerHTML = `Date: ${allData.date}`;
  document.getElementById('temp').innerHTML = `Temperature: ${allData.temperature}°C`;
  document.getElementById('content').innerHTML = `Feelings: ${allData.userResponse}`;
}
