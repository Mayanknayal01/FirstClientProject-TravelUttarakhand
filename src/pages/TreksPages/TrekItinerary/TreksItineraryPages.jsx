import React, { useEffect, useState } from 'react';
import './TreksItineraryPages.css';
import TreksItineraryData from "../../../Components/TreksComponents/TreksItineraryComponent/TreksItineraryComponent.jsx";
import Header from '../../../Components/Common/Header/Header.jsx';
import { useParams } from 'react-router-dom';

const TreksItineraryPages = () => {
    const [trekDetails, setTrekDetails] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        const fetchTrekDetails = async () => {
            try {
                const response = await fetch(`https://traveluttarakhandbackend.onrender.com/trekdetails/${id}`);
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setTrekDetails(data);
            } catch (error) {
                console.error('Error fetching trek details:', error);
            }
        };

        fetchTrekDetails();
    }, [id]);

    if (!trekDetails) {
        return <p>Loading...</p>; // Or some loading indicator
    }
    
    

    return (
        <>
            <Header />
            <section className="allItinerary">
                
                        <TreksItineraryData
                        key={trekDetails.id}
                        id={trekDetails.id}
                        mainImage={trekDetails.mainImage}
                        banner={trekDetails.banner}
                        trek_name={trekDetails.name}
                        heading={trekDetails.heading}
                        duration={trekDetails.duration}
                        difficulty={trekDetails.difficulty}
                        altitude={trekDetails.altitude}
                        distance={trekDetails.distance}
                        transportation={trekDetails.transportation}
                        meals={trekDetails.meals}
                        season={trekDetails.bestSeason}
                        type={trekDetails.trekType}
                        overview={trekDetails.overview}
                        toggle_heading={trekDetails.dayHighlight}
                        days_detail={trekDetails.dayExplain}
                        highlights={trekDetails.highlight}
                        />
            </section>
        </>
    )
}

export default TreksItineraryPages;