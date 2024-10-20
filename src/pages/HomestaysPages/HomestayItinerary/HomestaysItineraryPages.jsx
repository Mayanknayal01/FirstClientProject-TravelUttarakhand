import React from 'react';
import './HomestaysItineraryPages.css';
import Header from '../../../Components/Common/Header/Header.jsx';
import { homestaysItineraryArray } from '../../../Assets/Assets.js';
import HomestaysItineraryData from '../../../Components/HomestaysComponents/HomestaysItineraryComponent/HomestaysItineraryComponent.jsx';



const HomestaysItineraryPages = () => {

    const headerStyle = {
        backgroundColor: 'blue',
        position: 'static',
    };
    
    return (
        <>
            <Header style={headerStyle}/>
            <section className="allHomestaysItinerary">
                {homestaysItineraryArray.map((items,index) => {
                    return(
                    <HomestaysItineraryData
                        key={index.id}
                        id={items.id}
                        imageOne={items.imageOne}
                        imageTwo={items.imageTwo}
                        imageThree={items.imageThree}
                        imageFour={items.imageFour}
                        imageFive={items.imageFive}
                        detailsOneHeading={items.detailsOneHeading}
                        detailsOneBed={items.detailsOneBed}
                        detailsOneLocation={items.detailsOneLocation}
                        checkIn={items.checkIn}
                        checkOut={items.checkOut}
                        moreDetails={items.moreDetails}
                        someMoreDetails={items.someMoreDetails}
                        specificationBed={items.specificationBed}
                        price={items.price}
                        overview={items.overview}
                        overviewImage={items.overviewImage}
                        firstReview={items.firstReview}
                        secondReview={items.secondReview}
                        />
                    )
                })};
            </section>
        </>
)
}

export default HomestaysItineraryPages;
