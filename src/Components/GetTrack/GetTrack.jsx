import { useEffect, useState } from 'react'

const GetTrack = () => {
    const [tracks, setTracks] = useState([]);

    useEffect(()=>{
        const fetchTrack = async ()=> {
            try {
                const response = await fetch("https://traveluttarakhandbackend.onrender.com/treks");
                if (!response.ok){
                    throw new Error("Failed to fetch treks.");
                }
                const data  = await response.json();
                setTracks(data);
            } catch (error) {
                console.error("Error fetching treks: ", error);
            }
        };
        fetchTrack();
    },[]);

return tracks;
}

export default GetTrack;