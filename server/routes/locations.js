// // // import express from 'express';
// // // import { getLocations } from '../controllers/locations.js';

// // // const router = express.Router(); // Create a new router

// // // // Define routes to get locations
// // // router.get('/', getLocations); // GET /api/locations

// // // export default router; // Export the router



// // // routes/locations.js
// // import express from 'express';
// // import { getAllLocations } from '../controllers/locations.js'; // Adjust this import based on your folder structure

// // const router = express.Router();

// // // Route to get all locations
// // router.get('/', async (req, res) => {
// //     try {
// //         const locations = await getAllLocations();
// //         res.status(200).json(locations);
// //     } catch (error) {
// //         res.status(500).json({ message: error.message });
// //     }
// // });

// // // Add more location-related routes as needed

// // export default router;


// import express from 'express';
// import { getAllLocations, getLocationById } from '../controllers/locations.js'; // Adjust import based on your folder structure

// const router = express.Router();

// // Route to get all locations
// router.get('/', async (req, res) => {
//     try {
//         const locations = await getAllLocations(); // Call the function to get all locations
//         res.status(200).json(locations); // Respond with the list of locations
//     } catch (error) {
//         res.status(500).json({ message: error.message }); // Handle errors
//     }
// });

// // Route to get a single location by its ID
// router.get('/:locationId', async (req, res) => {
//     const { locationId } = req.params; // Get locationId from URL parameters
//     try {
//         const location = await getLocationById(locationId); // Call the function to get a single location
//         if (!location) {
//             return res.status(404).json({ message: 'Location not found' }); // Handle case where location is not found
//         }
//         res.status(200).json(location); // Respond with the location
//     } catch (error) {
//         res.status(500).json({ message: error.message }); // Handle errors
//     }
// });

// // Add more location-related routes as needed

// export default router;


import express from 'express';
import { getAllLocations, getLocationById } from '../controllers/locations.js';

const router = express.Router();

// Route to get all locations
router.get('/', async (req, res) => {
    try {
        const locations = await getAllLocations();
        res.status(200).json(locations);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
});

// Route to get a single location by its ID
router.get('/:locationId', async (req, res) => {
    const { locationId } = req.params;
    try {
        const location = await getLocationById(locationId);
        if (!location) {
            return res.status(404).json({ message: 'Location not found' });
        }
        res.status(200).json(location);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
});

export default router;
