// reset.js
import { pool } from './database.js';
import './dotenv.js';
import locationsData from '../data/locations.js';
import eventsData from '../data/events.js';

// Function to create locations table
const createLocationsTable = async () => {
    const dropTableQuery = `DROP TABLE IF EXISTS locations CASCADE;`;
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS locations (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255),
            city VARCHAR(255),
            state VARCHAR(2),
            zip VARCHAR(10),
            image TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;

    try {
        await pool.query(dropTableQuery);
        await pool.query(createTableQuery);
        console.log('🎉 locations table created successfully');
    } catch (err) {
        console.error('⚠️ error creating locations table', err);
    }
};

// Function to create events table
const createEventsTable = async () => {
    const dropTableQuery = `DROP TABLE IF EXISTS events CASCADE;`;
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            date TIMESTAMP NOT NULL,
            location_id INTEGER REFERENCES locations(id),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;

    try {
        await pool.query(dropTableQuery);
        await pool.query(createTableQuery);
        console.log('🎉 events table created successfully');
    } catch (err) {
        console.error('⚠️ error creating events table', err);
    }
};

// Load the data into the tables
const seedLocationsTable = async () => {
    await createLocationsTable();

    for (const location of locationsData) {
        const insertQuery = `
            INSERT INTO locations (name, address, city, state, zip, image) 
            VALUES ($1, $2, $3, $4, $5, $6)
        `;

        const values = [
            location.name,
            location.address,
            location.city,
            location.state,
            location.zip,
            location.image
        ];

        try {
            await pool.query(insertQuery, values);
            console.log(`✅ ${location.name} added successfully`);
        } catch (err) {
            console.error('⚠️ error inserting location', err);
        }
    }
};

const seedEventsTable = async () => {
    await createEventsTable();

    for (const event of eventsData) {
        const eventDate = new Date(event.date); // Ensure date is formatted correctly
        console.log(`Searching for location: ${event.location}`);

        const locationQuery = `SELECT id FROM locations WHERE id = $1`;
        const locationResult = await pool.query(locationQuery, [event.location]); // Ensure you're using the correct query

        console.log('Location result:', locationResult.rows); // Log the location result
        
        if (locationResult.rows.length > 0) {
            const locationId = locationResult.rows[0].id;

            const insertQuery = `
                INSERT INTO events (title, date, location_id) 
                VALUES ($1, $2, $3)
            `;

            const values = [
                event.title,
                eventDate,
                locationId
            ];

            try {
                await pool.query(insertQuery, values);
                console.log(`✅ ${event.title} added successfully`);
            } catch (err) {
                console.error('⚠️ error inserting event', err);
            }
        } else {
            console.error(`⚠️ no location found for ${event.location}`);
        }
    }
};

// Main function to reset and seed the database
const resetDatabase = async () => {
    await seedLocationsTable();
    await seedEventsTable();
};

resetDatabase();
