const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for frontend communication
app.use(express.json()); // Parse JSON bodies

// This is a mock database for the sake of the example
let housingOptions = [
    { id: 1, location: 'Downtown', type: 'Studio', emergency: false },
    { id: 2, location: 'Suburb', type: '2-bedroom', emergency: true },
    // ... other housing options
];

// Endpoint to get emergency housing options
app.get('/emergency-housing', (req, res) => {
    const emergencyHousing = housingOptions.filter(house => house.emergency);
    res.json(emergencyHousing);
});

// Search endpoint (you can add more query parameters as needed)
app.get('/search-housing', (req, res) => {
    const locationQuery = req.query.location;
    const searchResults = housingOptions.filter(house =>
        house.location.toLowerCase().includes(locationQuery.toLowerCase())
    );
    res.json(searchResults);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
