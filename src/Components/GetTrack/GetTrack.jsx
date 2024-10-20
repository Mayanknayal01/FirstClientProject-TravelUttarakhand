import { useEffect, useState } from 'react';

const GetTrack = () => {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        const storedTracks = sessionStorage.getItem('tracks');

        if (storedTracks) {
            // Load the tracks from sessionStorage if available
            setTracks(JSON.parse(storedTracks));
        } else {
            const fetchTrack = async () => {
                try {
                    const response = await fetch("https://traveluttarakhandbackend.onrender.com/treks");
                    if (!response.ok) {
                        throw new Error("Failed to fetch treks.");
                    }
                    const data = await response.json();
                    setTracks(data);
                    // Store the fetched data in sessionStorage
                    sessionStorage.setItem('tracks', JSON.stringify(data));
                } catch (error) {
                    console.error("Error fetching treks: ", error);
                }
            };
            fetchTrack();
        }
    }, []);

    return tracks;
};

export default GetTrack;
