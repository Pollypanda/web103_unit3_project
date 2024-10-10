// import React, { useState, useEffect } from 'react'
// import Event from '../components/Event'
// import '../css/LocationEvents.css'
// import { fetchLocationByIndex, fetchEventsByLocation } from '../services/LocationsAPI.jsx'; // Adjust the import path as needed

// // const LocationEvents = ({index}) => {
// //     const [location, setLocation] = useState([])
// //     const [events, setEvents] = useState([])

// //     return (
// //         <div className='location-events'>
// //             <header>
// //                 <div className='location-image'>
// //                     <img src={location.image} />
// //                 </div>

// //                 <div className='location-info'>
// //                     <h2>{location.name}</h2>
// //                     <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
// //                 </div>
// //             </header>

// //             <main>
// //                 {
// //                     events && events.length > 0 ? events.map((event, index) =>
// //                         <Event
// //                             key={event.id}
// //                             id={event.id}
// //                             title={event.title}
// //                             date={event.date}
// //                             time={event.time}
// //                             image={event.image}
// //                         />
// //                     ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
// //                 }
// //             </main>
// //         </div>
// //     )
// // }


// const LocationEvents = ({ index }) => {
//     const [location, setLocation] = useState({});
//     const [events, setEvents] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const getLocationAndEvents = async () => {
//             try {
//                 const locationData = await fetchLocationByIndex(index); // Fetch location data based on index
//                 setLocation(locationData);

//                 const eventsData = await fetchEventsByLocation(locationData.id); // Fetch events for the location
//                 setEvents(eventsData);
//             } catch (err) {
//                 setError(err.message); // Handle any errors
//             } finally {
//                 setLoading(false); // Set loading to false after data fetching
//             }
//         };

//         getLocationAndEvents();
//     }, [index]); // Dependency array to run effect when index changes

//     if (loading) {
//         return <h2>Loading events for this location...</h2>; // Optional loading state
//     }

//     if (error) {
//         return <h2>Error fetching data: {error}</h2>; // Handle error state
//     }

//     return (
//         <div className='location-events'>
//             <header>
//                 <div className='location-image'>
//                     {location.image ? (
//                         <img src={location.image} alt={`${location.name}`} />
//                     ) : (
//                         <img src="/path/to/default-image.jpg" alt="Default Location" /> // Use a default image if needed
//                     )}
//                 </div>

//                 <div className='location-info'>
//                     <h2>{location.name}</h2>
//                     <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
//                 </div>
//             </header>

//             <main>
//                 {events.length > 0 ? (
//                     events.map(event => (
//                         <Event
//                             key={event.id}
//                             id={event.id}
//                             title={event.title}
//                             date={event.date}
//                             time={event.time}
//                             image={event.image}
//                         />
//                     ))
//                 ) : (
//                     <h2>
//                         <i className="fa-regular fa-calendar-xmark fa-shake"></i>
//                         {' No events scheduled at this location yet!'}
//                     </h2>
//                 )}
//             </main>
//         </div>
//     );
// };

// export default LocationEvents;


import React, { useState, useEffect } from 'react';
import Event from '../components/Event';
import '../css/LocationEvents.css';
import { fetchLocationByIndex } from '../services/LocationsAPI'; // Import the correct function for fetching location
import EventsAPI from '../services/EventsAPI'; // Import EventsAPI

const LocationEvents = ({ index }) => {
    const [location, setLocation] = useState({});
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getLocationAndEvents = async () => {
            try {
                const locationData = await fetchLocationByIndex(index); // Fetch location data based on index
                setLocation(locationData);

                const eventsData = await EventsAPI.getAllEvents(locationData.id); // Fetch events for the location
                setEvents(eventsData);
            } catch (err) {
                setError(err.message); // Handle any errors
            } finally {
                setLoading(false); // Set loading to false after data fetching
            }
        };

        getLocationAndEvents();
    }, [index]); // Dependency array to run effect when index changes

    // Define dates here after fetching events
    const dates = events.map(event => event.date); // Define dates based on fetched events

    if (loading) {
        return <h2>Loading events for this location...</h2>; // Optional loading state
    }

    if (error) {
        return <h2>Error fetching data: {error}</h2>; // Handle error state
    }

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    {location.image ? (
                        <img src={location.image} alt={`${location.name}`} />
                    ) : (
                        <img src="/path/to/default-image.jpg" alt="Default Location" />
                    )}
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
                </div>
            </header>

            <main>
                {events.length > 0 ? (
                    events.map(event => (
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                        />
                    ))
                ) : (
                    <h2>
                        <i className="fa-regular fa-calendar-xmark fa-shake"></i>
                        {' No events scheduled at this location yet!'}
                    </h2>
                )}
            </main>
        </div>
    );
};

export default LocationEvents;
