// // // import express from 'express';
// // // import { getEvents } from '../controllers/events.js';

// // // const router = express.Router(); // Create a new router

// // // // Define routes to get events
// // // router.get('/', getEvents); // GET /api/events

// // // export default router; // Export the router


// // import express from 'express';
// // import { getEventsByLocationId, getEventById } from '../controllers/events.js'; // Ensure both functions are imported

// // const router = express.Router();

// // // Route to get events by location ID
// // router.get('/', async (req, res) => {
// //     const { locationId } = req.query; // Get locationId from query parameters
// //     try {
// //         const events = await getEventsByLocationId(locationId); // Call the function to get events
// //         res.status(200).json(events); // Respond with the events
// //     } catch (error) {
// //         res.status(500).json({ message: error.message }); // Handle errors
// //     }
// // });

// // // Route to get a single event by its ID
// // router.get('/:eventId', async (req, res) => {
// //     const { eventId } = req.params; // Get eventId from URL parameters
// //     try {
// //         const event = await getEventById(eventId); // Call the function to get a single event
// //         if (!event) {
// //             return res.status(404).json({ message: 'Event not found' }); // Handle case where event is not found
// //         }
// //         res.status(200).json(event); // Respond with the event
// //     } catch (error) {
// //         res.status(500).json({ message: error.message }); // Handle errors
// //     }
// // });

// // // Add more event-related routes as needed

// // export default router;

// import express from 'express';
// import { getEventsByLocationId, getEventById } from '../controllers/events.js';

// const router = express.Router();

// // Route to get events by location ID
// router.get('/', async (req, res) => {
//     const { locationId } = req.query;
//     try {
//         const events = await getEventsByLocationId(locationId);
//         res.status(200).json(events);
//     } catch (error) {
//         res.status(409).json({ error: error.message });
//     }
// });

// // Route to get a single event by its ID
// router.get('/:eventId', async (req, res) => {
//     const { eventId } = req.params;
//     try {
//         const event = await getEventById(eventId);
//         if (!event) {
//             return res.status(404).json({ message: 'Event not found' });
//         }
//         res.status(200).json(event);
//     } catch (error) {
//         res.status(409).json({ error: error.message });
//     }
// });

// export default router;

import express from 'express';
import { getEventsByLocationId, getEventById } from '../controllers/events.js';

const router = express.Router();

// Route to get events by location ID
router.get('/', async (req, res) => {
    const { locationId } = req.query;
    try {
        const events = await getEventsByLocationId(locationId);
        res.status(200).json(events);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
});

// Route to get a single event by its ID
router.get('/:eventId', async (req, res) => {
    const { eventId } = req.params;
    try {
        const event = await getEventById(eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
});

export default router;
