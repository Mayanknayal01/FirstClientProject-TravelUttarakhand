import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faUtensils, faMountain } from '@fortawesome/free-solid-svg-icons';




function HomestaysItineraryComponent ({ id, imageOne, imageTwo, imageThree, imageFour, imageFive, detailsOneHeading, detailsOneBed, detailsOneLocation, checkIn, checkOut, moreDetails, someMoreDetails, specificationBed, price, overview, overviewImage }) {
    return (
        <div className="homestaysItinerary">
            {/* homestays first images section */}
            <div className="firstItineraryHomestays">
                <div className="itsone">
                    <img src={imageOne} alt="oneImage" />
                </div>
                <div className="itstwo">
                    <img src={imageTwo} alt="TwoImage" />
                    <img src={imageThree} alt="ThreeImage" />
                </div>
                <div className="itsthree">
                    <img src={imageFour} alt="FourImage" />
                    <img src={imageFive} alt="FiveImage" />
                </div>
            </div>
            {/* homestays details section */}
            <div className="homestaysDetails">
                <div className="detailsOne">
                    <div className="detailsOneFirst">
                        <h2>{detailsOneHeading}</h2>
                        <p>{detailsOneBed}</p>
                        <p>{detailsOneLocation}</p>
                    </div>
                    <div className="detailsOneSecond">
                        <div className="detailsOneSecondFirst">
                            <div className="detailsOneCheckIn">
                                <h5>Check In</h5>
                                <p>{checkIn}</p>
                            </div>
                            <div className="detailsOneCheckOut">
                                <h5>Check Out</h5>
                                <p>{checkOut}</p>
                            </div>
                        </div>
                        <div className="detailsOneSecondSecond">
                            <p>{moreDetails}</p>
                        </div>
                        <div className="detailsOneSecondThird">
                            <p>{someMoreDetails}</p>
                        </div>
                    </div>
                </div>
                <div className="detailsSecond">
                    <div className="detailsSecondOne">
                        <div className="detailsSecondOneFirst">
                            <h5>{detailsOneBed}</h5>
                            <p>{specificationBed}</p>
                        </div>
                        <div className="detailsSecondOneSecond">
                            <h5>Rs {price}/-</h5>
                            <p>(per night)</p>
                            <p>Refund as per policy</p>
                        </div>
                    </div>
                    <div className="detailsSecondTwo">
                        <div className="detailsSecondCheckIn">
                                <h5>Check In</h5>
                                <p>{checkIn}</p>
                            </div>
                            <div className="detailsSecondCheckOut">
                                <h5>Check Out</h5>
                                <p>{checkOut}</p>
                            </div>
                        </div>
                    <div className="detailsSecondThree">
                        <button>Enquire Now</button>
                        <button>Book Now</button>
                    </div>
                </div>
            </div>
            {/* overview section */}
            <div className="homestaysOverview">
                <h2>Overview</h2>
                <div className="homestaysoverviewOuter">
                    <div className="homestaysOverviewfirst">
                        <img src={overviewImage} alt="OverviewImage" />
                    </div>
                    <div className="homestaysOverviewsecond">
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
            {/* why stay with us section */}
            <section id="homestaysHighlights" className="homestaysSection homestaysHighlights">
                <h2>Why Stay With Us?</h2>
                <div className="homestaysCards">
                    <div className="homestaysCard">
                        <FontAwesomeIcon icon={faBed} />
                        <h3>Luxury Rooms</h3>
                        <p>Spacious rooms with mountain views and all modern amenities for a cozy stay.</p>
                    </div>
                    <div className="homestaysCard">
                        <FontAwesomeIcon icon={faUtensils} />
                        <h3>Authentic Cuisine</h3>
                        <p>Enjoy homemade local delicacies made with fresh ingredients by our hosts.</p>
                    </div>
                    <div className="homestaysCard">
                        <FontAwesomeIcon icon={faMountain} />
                        <h3>Adventure Activities</h3>
                        <p>Guided treks, nature walks, and more to satisfy the explorer in you.</p>
                    </div>
                </div>
            </section>

            {/* guests reviews section */}

            <section id="homestaysTestimonials" class="homestaysSection homestaysTestimonials">
                <h2>Guest Reviews</h2>
                <div class="homestaysTestimonial">
                    <p>"Absolutely delightful stay! The rooms were cozy, and the trek was unforgettable."</p>
                    <p>- Anjali Sharma</p>
                </div>
                <div class="homestaysTestimonial">
                    <p>"The perfect getaway! From the food to the hospitality, everything was top-notch."</p>
                    <p>- Rohan Malhotra</p>
                </div>
            </section>

            {/* contact us form */}

            <section id="homestaysContact" className="homestaysSection">
            <h2>Contact Us</h2>
            <form 
                id="homestaysBooking" 
                className="homestaysContact-form"
            >
                <label htmlFor="name">Full Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                />

                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                />

                <label htmlFor="date">Check-in Date:</label>
                <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    required 
                />

                <label htmlFor="message">Additional Requests:</label>
                <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                ></textarea>

                <button type="submit">Submit Booking</button>
            </form>
        </section>


        </div>
    );
}

export default HomestaysItineraryComponent ;
