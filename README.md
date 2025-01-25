# 🌦️ Weather Journal App

### **Description**
The **Weather Journal App** is a simple yet powerful application that combines asynchronous JavaScript, Web APIs, and user input to dynamically update the UI with weather data. By integrating with the OpenWeatherMap API, this app allows users to fetch real-time weather information based on their zip code and share their feelings about the weather. 🌍🌈

---

### **Key Features**
- **API Integration**: Retrieves live weather data using the OpenWeatherMap API. 🌐
- **User Interaction**: Allows users to input their zip code and feelings, creating a personalized weather log. 📝
- **Dynamic UI Updates**: The app dynamically updates the DOM with weather data, including temperature, location, and user feelings. ⚡
- **Responsive Design**: Styled with CSS to ensure a clean and user-friendly experience on all devices. 💻📱
- **Backend API Endpoints**: Features GET and POST routes using Express.js to manage weather and user data. 🚀

---

### **Programming Languages and Tools**

<img align="left" alt="HTML5" width="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
<img align="left" alt="CSS3" width="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
<img align="left" alt="JavaScript" width="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" />
<img align="left" alt="Node.js" width="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" />
<img align="left" alt="Express" width="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" /><br><br>

---

### **Setup and Installation**
To run this project locally, make sure you have **Node.js** installed.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/zainabja52/WeatherJournalApp.git
   cd WeatherJournalApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   node server.js
   ```

4. **Access the app**:
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000). 🌐

---

### **How to Use**
1. Enter your zip code in the input field. 📫
2. Share how you’re feeling about the weather in the text area. 😊
3. Click the "Generate" button to fetch weather data and see your weather journal entry. 🌞🌧️
4. View the weather details (date, temperature, and your feelings) dynamically displayed in the UI. 🖥️

---

### **Project File Structure**
```
WeatherJournalApp/
├── node_modules/                 # Node.js dependencies (auto-generated)
├── package.json                  # Project metadata and dependencies
├── package-lock.json             # Exact versions of dependencies
├── server.js                     # Backend logic (Node.js server)
├── README.md                     # Project documentation
└── website/                      # Frontend folder
    ├── app.js                    # Frontend logic (JavaScript)
    ├── index.html                # HTML layout
    ├── style.css                 # CSS for styling
```

---

### **API Features**
- **Fetch Weather Data**: Uses the OpenWeatherMap API to get real-time weather information based on the zip code.
- **POST Data**: Sends weather data and user input to the server.
- **GET Data**: Retrieves the stored weather log and updates the UI.

---

### **Sample Workflow**
1. User enters zip code (e.g., `10001` for New York).  
2. Weather data is fetched from the OpenWeatherMap API.  
3. User’s input and weather details are sent to the server and displayed in the app.

---

### **Future Improvements**
- 🌟 Add geolocation-based weather fetching.  
- 🌟 Support for multiple weather entries.  
- 🌟 Option to switch between metric and imperial units.
