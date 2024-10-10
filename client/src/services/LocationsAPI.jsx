const API_BASE_URL = '/api'; // Adjust the base URL as needed

const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return await response.json();
};

export const fetchLocationByIndex = async (index) => {
    return await fetchData(`${API_BASE_URL}/locations/${index}`);
};

export const fetchEventsByLocation = async (locationId) => {
    return await fetchData(`${API_BASE_URL}/events?locationId=${locationId}`);
};
