import React from "react";
import './HomestaysCardsPages.css';
import Header from "../../../Components/Common/Header/Header.jsx";
import SecondBanner from "../../../Components/Banners/OtherPagesBanner/OtherBanner.jsx";
import { homestays_items } from "../../../Assets/Assets.js";
import Homestaysdata from "../../../Components/HomestaysComponents/HomestaysCardComponent/HomestaysCardComponent.jsx";

const HomestaysCardsPages = () => {
    return (
        <>
        <Header />
        <SecondBanner />
        <section className="Homestays-section">
            <div className="homestays-all-cards">
                {homestays_items.map((item, index) => {
                    return (
                        <Homestaysdata
                        key={index}
                        id={item.id}
                        homestay_name={item.homestay_name}
                        rating={item.rating}
                        remark={item.remark}
                        reviews={item.reviews}
                        real_price={item.real_price}
                        discounted_price={item.discounted_price}
                        image={item.image}
                        location={item.location}
                        availability={item.availability}
                        />
                    );
                })}
            </div>
        </section>
        </>
    )
}

export default HomestaysCardsPages;