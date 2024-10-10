// // // import { pool } from '../config/database.js';

// // // // Function to get all locations
// // // export const getLocations = async (req, res) => {
// // //     try {
// // //         const result = await pool.query('SELECT * FROM locations'); // Adjust the SQL query as needed
// // //         res.status(200).json(result.rows); // Respond with the rows fetched from the database
// // //     } catch (error) {
// // //         console.error('Error fetching locations:', error);
// // //         res.status(500).json({ error: 'Internal Server Error' });
// // //     }
// // // };


// // // controllers/locations.js

// // import { pool } from '../config/database.js';

// // // Function to get all locations
// // export const getAllLocations = async (req, res) => {
// //     try {
// //         const result = await pool.query('SELECT * FROM locations'); // Adjust the SQL query as needed
// //         res.status(200).json(result.rows); // Respond with the rows fetched from the database
// //     } catch (error) {
// //         console.error('Error fetching locations:', error);
// //         res.status(500).json({ error: 'Internal Server Error' });
// //     }
// // };


// import { pool } from '../config/database.js';

// // Function to get all locations
// export const getAllLocations = async () => {
//     try {
//         const result = await pool.query('SELECT * FROM locations'); // Adjust the SQL query as needed
//         return result.rows; // Return the rows fetched from the database
//     } catch (error) {
//         console.error('Error fetching locations:', error);
//         throw new Error('Internal Server Error');
//     }
// };

// // Function to get a single location by its ID
// export const getLocationById = async (locationId) => {
//     try {
//         const result = await pool.query('SELECT * FROM locations WHERE id = $1', [locationId]); // Adjust SQL query as needed
//         return result.rows[0]; // Return the first location found
//     } catch (error) {
//         console.error('Error fetching location by ID:', error);
//         throw new Error('Internal Server Error');
//     }
// };


import { pool } from '../config/database.js'; // Adjust the import based on your DB configuration

// Function to get all locations
export const getAllLocations = async () => {
    const selectQuery = `
        SELECT id, name, address, description
        FROM locations
    `;
    const results = await pool.query(selectQuery);
    return results.rows; // Return all rows
};

// Function to get a location by ID
export const getLocationById = async (locationId) => {
    const selectQuery = `
        SELECT name, address, description
        FROM locations
        WHERE id = $1
    `;
    const results = await pool.query(selectQuery, [locationId]);
    return results.rows[0]; // Return the first row
};
