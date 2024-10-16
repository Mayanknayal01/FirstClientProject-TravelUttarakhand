import React from "react";
import "./TrekCardsPages.css";
import TrekCard from "../../../Components/TreksComponents/TreksCardComponent/TreksCardComponent.jsx";
import Header from "../../../Components/Common/Header/Header.jsx";
import { track_items } from "../../../Assets/Assets.js";
import OtherBanner from "../../../Components/Banners/OtherPagesBanner/OtherBanner.jsx";
import GetTrack from "../../../Components/GetTrack/GetTrack.jsx";

const TrekCardsPages = () => {
    const treks = GetTrack();
    return (
        <>
        <Header />
        <OtherBanner />
        <section className="Treks-section">
            <div className="trek-allCards">
            {treks.map((item, index) => {
                return (
                <TrekCard
                    key={index}
                    id={item.id}
                    name={item.name}
                    duration={item.duration}
                    difficulty={item.difficulty}
                    real_price={item.realPrice}
                    discounted_price={item.discountedPrice}
                    image={item.image}
                    difficulty_image={track_items[0].difficulty_image}
                    dur_image={track_items[0].dur_image}
                />
                );
            })}
            </div>
        </section>
        </>
    );
};

export default TrekCardsPages;
