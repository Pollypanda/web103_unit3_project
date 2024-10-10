// import express from 'express'
// import path from 'path'
// import favicon from 'serve-favicon'
// import dotenv from 'dotenv'
// import cors from 'cors'
// import './config/dotenv.js'


// // Load environment variables from .env file
// dotenv.config();

// // import the router from your routes file
// import eventsRouter from './routes/events.js';
// import locationsRouter from './routes/locations.js';

// const app = express()

// app.use(cors())
// app.use(express.json())

// if (process.env.NODE_ENV === 'development') {
//     app.use(favicon(path.resolve('../', 'client', 'public', 'party.png')))
// }
// else if (process.env.NODE_ENV === 'production') {
//     app.use(favicon(path.resolve('public', 'party.png')))
//     app.use(express.static('public'))
// }

// // specify the api path for the server to use
// app.use('/api/events', eventsRouter); // Use the events router
// app.use('/api/locations', locationsRouter); // Use the locations router


// if (process.env.NODE_ENV === 'production') {
//     app.get('/*', (_, res) =>
//         res.sendFile(path.resolve('public', 'index.html'))
//     )
// }

// const PORT = process.env.PORT || 3001

// app.listen(PORT, () => {
//     console.log(`🚀 server listening on http://localhost:${PORT}`)
// })


import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import dotenv from 'dotenv';
import cors from 'cors';
import './config/dotenv.js';

// Load environment variables from .env file
dotenv.config();

// Import the router from your routes file
import eventsRouter from './routes/events.js';
import locationsRouter from './routes/locations.js';

const app = express();

app.use(cors());
app.use(express.json());

// Determine the directory name from import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Set the favicon
const faviconPath = path.resolve(process.cwd(), 'public', 'party.png'); // Use process.cwd() to avoid __dirname issues
app.use(favicon(faviconPath));

// Serve static files
app.use(express.static(path.resolve(__dirname, '../public')));

// Specify the API path for the server to use
app.use('/api/events', eventsRouter); // Use the events router
app.use('/api/locations', locationsRouter); // Use the locations router

// Catch-all route for serving the React app
app.get('/*', (_, res) => {
    res.sendFile(path.resolve('public', 'index.html'))
});

// Set the server port
const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 server listening on http://localhost:${PORT}`);
});
