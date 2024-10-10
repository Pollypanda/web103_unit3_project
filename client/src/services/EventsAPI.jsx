// // services/EventsAPI.js
// const API_BASE_URL = '/api/events';

// const EventsAPI = {
//     async getAllEvents(locationId) {
//         const response = await fetch(`${API_BASE_URL}?locationId=${locationId}`);
//         if (!response.ok) {
//             throw new Error('Failed to fetch events');
//         }
//         return await response.json();
//     },

//     // If you need a function to get a single event by ID
//     async getEventById(eventId) {
//         const response = await fetch(`${API_BASE_URL}/${eventId}`);
//         if (!response.ok) {
//             throw new Error('Failed to fetch event');
//         }
//         return await response.json();
//     },
// };

// export default EventsAPI;


// services/EventsAPI.js

const API_BASE_URL = '/api/events';

const EventsAPI = {
    // Fetch all events for a given location
    async getAllEvents(locationId) {
        const response = await fetch(`${API_BASE_URL}?locationId=${locationId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch events');
        }
        return await response.json();
    },

    // Fetch a single event by its ID
    async getEventById(eventId) {
        const response = await fetch(`${API_BASE_URL}/${eventId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch event');
        }
        return await response.json();
    },
};

export default EventsAPI;
