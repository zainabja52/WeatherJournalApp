// Import required modules
const express = require('express'); 
const cors = require('cors');      

// Initialize the app
const app = express();

// Middleware
app.use(cors());                  
app.use(express.json());         
app.use(express.static('website')); 

// Project Data
let projectData = {}; // Object to store the app's data

// Server Port
const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});

// GET route to retrieve data from the server
app.get('/data', (req, res) => {
  res.send(projectData); // Send the stored project data
});

// POST route to receive data from the client
app.post('/add', (req, res) => {
  const { temperature, date, userResponse } = req.body; // Extract data from the request body

  // Save the data into projectData
  projectData = {
    temperature,
    date,
    userResponse,
  };

  console.log('Data received and stored:', projectData); // Log the received data
  res.send({ message: 'Data successfully saved to the server!' }); // Respond with success message
});
