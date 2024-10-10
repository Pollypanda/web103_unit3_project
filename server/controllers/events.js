// // // import { pool } from '../config/database.js';

// // // // Function to get all events
// // // export const getEvents = async (req, res) => {
// // //     try {
// // //         const result = await pool.query('SELECT * FROM events'); // Adjust the SQL query as needed
// // //         res.status(200).json(result.rows); // Respond with the rows fetched from the database
// // //     } catch (error) {
// // //         console.error('Error fetching events:', error);
// // //         res.status(500).json({ error: 'Internal Server Error' });
// // //     }
// // // };


// // // controllers/events.js

// // import { pool } from '../config/database.js';

// // // Function to get all events
// // export const getEvents = async (req, res) => {
// //     try {
// //         const result = await pool.query('SELECT * FROM events'); // Adjust the SQL query as needed
// //         res.status(200).json(result.rows); // Respond with the rows fetched from the database
// //     } catch (error) {
// //         console.error('Error fetching events:', error);
// //         res.status(500).json({ error: 'Internal Server Error' });
// //     }
// // };

// // // Function to get events by location ID
// // export const getEventsByLocationId = async (req, res) => {
// //     try {
// //         const result = await pool.query('SELECT * FROM events WHERE location_id = $1', [locationId]); // Adjust the SQL query as needed
// //         res.status(200).json(results.rows[0])

// //         // return result.rows; // Return the rows fetched from the database
// //     } catch (error) {
// //         // console.error('Error fetching events by location ID:', error);
// //         // throw new Error('Internal Server Error');
// //         res.status(409).json( { error: error.message} )

// //     }
// // };


// import { pool } from '../config/database.js';

// // Function to get all events
// export const getEvents = async (req, res) => {
//     // Your existing code...
// };

// // Function to get events by location ID
// export const getEventsByLocationId = async (locationId) => {
//     // Your existing code...
// };

// // Function to get a single event by its ID
// export const getEventById = async (eventId) => {
//     try {
//         const result = await pool.query('SELECT * FROM events WHERE id = $1', [eventId]); // Adjust SQL query as needed
//         return result.rows[0]; // Return the first event found
//     } catch (error) {
//         console.error('Error fetching event by ID:', error);
//         throw new Error('Internal Server Error');
//     }
// };


import { pool } from '../config/database.js'; // Adjust the import based on your DB configuration

// Function to get events by ID
export const getEventById = async (eventId) => {
    const selectQuery = `
        SELECT name, date, location, description, createdBy
        FROM events
        WHERE id = $1
    `;
    const results = await pool.query(selectQuery, [eventId]);
    return results.rows[0]; // Return the first row of the results
};

// Function to get events by location ID
export const getEventsByLocationId = async (locationId) => {
    const selectQuery = `
        SELECT id, name, date, location, description, createdBy
        FROM events
        WHERE locationId = $1
    `;
    const results = await pool.query(selectQuery, [locationId]);
    return results.rows; // Return all rows matching the locationId
};
