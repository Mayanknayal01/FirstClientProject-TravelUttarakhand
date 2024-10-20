import React, { useState } from "react";
import "./AddTrack.css";

const AddTrack = () => {
    const [formData, setFormData] = useState({
        name: "",
        duration: "",
        difficulty: "",
        altitude: "",
        distance: "",
        transportation: "",
        meals: "",
        season: "",
        trek_type: "",
        realPrice: "",
        discountedPrice: "",
        banner: null,
        heading: "",
        mainImage: null,
        image: null,
        overview: "",
        highlight: "",
        itinerary: "",
        itinerary_details: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (event) => {
        const { name, files } = event.target;
        if (files.length > 0) {
            const file = files[0]; // Get the first file
            setFormData((prevState) => ({
                ...prevState,
                [name]: file, // Update the specific file input in the state
            }));
        }
    };

    const handleAdd = async (e) => {
        e.preventDefault();

        const trek = new FormData();
        trek.append("name", formData.name);
        trek.append("duration", formData.duration);
        trek.append("difficulty", formData.difficulty);
        trek.append("altitude", formData.altitude);
        trek.append("distance", formData.distance);
        trek.append("transportation", formData.transportation);
        trek.append("meals", formData.meals);
        trek.append("season", formData.season);
        trek.append("trek_type", formData.trek_type);
        trek.append("realPrice", parseFloat(formData.realPrice).toFixed(2)); // Ensure price is formatted correctly
        trek.append("discountedPrice", parseFloat(formData.discountedPrice).toFixed(2)); // Ensure price is formatted correctly
        trek.append("image", formData.image);
        trek.append("banner", formData.banner);
        trek.append("mainImage", formData.mainImage);
        trek.append("heading", formData.heading);
        trek.append("overview", formData.overview);
        trek.append("highlight", formData.highlight);
        trek.append("itinerary", formData.itinerary);
        trek.append("itinerary_details", formData.itinerary_details);

        try {
            const response = await fetch("https://traveluttarakhandbackend.onrender.com/new-trek", {
                method: "POST",
                body: trek,
            });
            if (!response.ok) {
                throw new Error("Failed to upload trek.");
            }

            const result = await response.json();
            console.log("Trek added:", result);
        } catch (error) {
            console.error("Error uploading trek: ", error);
        }
    };

    return (
        <div className="main">
                {/* Treks entry */}
                <div className="addtrackone">
                    <form className="addtrack-container" onSubmit={handleAdd}>
                        <div className="addtrack-title">
                            <h2>Add Treks</h2>
                        </div>
                        <div className="addtrack-details">
                            <label htmlFor="name">Trek Name: </label>
                            <input
                                type="text"
                                placeholder="Track Name"
                                id="name"
                                name="name"
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="duration">Duration: </label>
                            <input
                                type="text"
                                placeholder="Duration"
                                id="duration"
                                name="duration"
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="difficulty">Difficulty: </label>
                            <input
                                type="text"
                                name="difficulty"
                                placeholder="Difficulty"
                                onChange={handleChange}
                                id="difficulty"
                            />
                            <label htmlFor="altitude">Altitude: </label>
                            <input
                                type="text"
                                name="altitude"
                                placeholder="Altitude"
                                onChange={handleChange}
                                id="altitude"
                            />
                            <label htmlFor="distance">Distance: </label>
                            <input
                                type="text"
                                name="distance"
                                placeholder="Distance"
                                onChange={handleChange}
                                id="distance"
                            />
                            <label htmlFor="transportation">Transportation: </label>
                            <input
                                type="text"
                                name="transportation"
                                placeholder="Transportation"
                                onChange={handleChange}
                                id="transportation"
                            />
                            <label htmlFor="meals">Meals: </label>
                            <input
                                type="text"
                                name="meals"
                                placeholder="Meals"
                                onChange={handleChange}
                                id="meals"
                            />
                            <label htmlFor="season">Season: </label>
                            <input
                                type="text"
                                name="season"
                                placeholder="Season"
                                onChange={handleChange}
                                id="season"
                            />
                            <label htmlFor="trek_type">Trek type: </label>
                            <input
                                type="text"
                                name="trek_type"
                                placeholder="solo/group"
                                onChange={handleChange}
                                id="trek_type"
                            />
                            <label htmlFor="realPrice">Real Price: </label>
                            <input
                                type="number"
                                placeholder="Real Price"
                                id="realPrice"
                                name="realPrice"
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="finalPrice">Discounted Price:</label>
                            <input
                                type="number"
                                placeholder="Discounted Price"
                                id="finalPrice"
                                name="discountedPrice"
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="image">Card Image: </label>
                            <input
                                type="file"
                                accept="image/*"
                                placeholder="Image"
                                name="image"
                                onChange={handleFileChange}
                                id="image"
                                required
                            />
                            <label htmlFor="banner">Banner Image: </label>
                            <input
                                type="file"
                                accept="image/*"
                                placeholder="Banner Image"
                                name="banner"
                                onChange={handleFileChange}
                                id="banner"
                                required
                            />
                            <label htmlFor="mainImage">Main Image: </label>
                            <input
                                type="file"
                                accept="image/*"
                                placeholder="Main Image"
                                name="mainImage"
                                onChange={handleFileChange}
                                id="mainImage"
                                required
                            />
                            <label htmlFor="heading">Heading: </label>
                            <input
                                type="text"
                                placeholder="Heading"
                                id="heading"
                                name="heading"
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="overview">Overview: </label>
                            <input
                                type="text"
                                name="overview"
                                placeholder="Overview"
                                onChange={handleChange}
                                id="overview"
                            />
                            <label htmlFor="highlight">Highlights: </label>
                            <input
                                type="text"
                                name="highlight"
                                placeholder="Highlights"
                                onChange={handleChange}
                                id="highlight"
                            />
                            <label htmlFor="itinerary">Itinerary: </label>
                            <input
                                type="text"
                                name="itinerary"
                                placeholder="Days"
                                onChange={handleChange}
                                id="itinerary"
                            />
                            <label htmlFor="itinerary_details">itinerary_details: </label>
                            <input
                                type="text"
                                name="itinerary_details"
                                placeholder="Day's detail"
                                onChange={handleChange}
                                id="itinerary_details"
                            />
                        </div>
                        <button type="submit">Add</button>
                    </form>
                </div>

                {/* homesyayd entry */}

                <div className="addtracktwo">
                    <form className="addtrack-container">
                        <div className="addtrack-title">
                        <h2>"Add Homestays"</h2>
                        </div>
                        <div className="addtrack-details">
                        <label htmlFor="bannerImage1">Banner Image 1: </label>
                        <input
                            type="file"
                            accept="image/*"
                            placeholder="Banner Image 1"
                            name="bannerImage1"
                            onChange={handleFileChange}
                            id="bannerImage1"
                            required
                        />
                        <label htmlFor="bannerImage2">Banner Image 2: </label>
                        <input
                            type="file"
                            accept="image/*"
                            placeholder="Banner Image 2"
                            name="bannerImage2"
                            onChange={handleFileChange}
                            id="bannerImage2"
                            required
                        />
                        <label htmlFor="bannerImage3">Banner Image 3: </label>
                        <input
                            type="file"
                            accept="image/*"
                            placeholder="Banner Image 3"
                            name="bannerImage3"
                            onChange={handleFileChange}
                            id="bannerImage3"
                            required
                        />
                        <label htmlFor="bannerImage4">Banner Image 4: </label>
                        <input
                            type="file"
                            accept="image/*"
                            placeholder="Banner Image 4"
                            name="bannerImage4"
                            onChange={handleFileChange}
                            id="bannerImage4"
                            required
                        />
                        <label htmlFor="bannerImage5">Banner Image 5: </label>
                        <input
                            type="file"
                            accept="image/*"
                            placeholder="Banner Image 5"
                            name="bannerImage5"
                            onChange={handleFileChange}
                            id="imagesImage5"
                            required
                        />
                        <label htmlFor="homestayname">Homestays Name: </label>
                        <input
                            type="text"
                            placeholder="Homestays Name"
                            id="homestayname"
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="homestaybeddetails">Bed Details: </label>
                        <input
                            type="text"
                            placeholder="Bed Details"
                            id="homestaybeddetails"
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="homestaylocation">Location: </label>
                        <input
                            type="text"
                            placeholder="Location"
                            id="homestaylocation"
                            onChange={handleChange}
                        />
                        <label htmlFor="homestayCheckIn">Check In: </label>
                        <input
                            type="number"
                            placeholder="Check In"
                            id="homestayCheckIn"
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="homestayCheckOut">Check Out: </label>
                        <input
                            type="number"
                            placeholder="Check Out"
                            id="homestayCheckOut"
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="homestayMoreInfo">More Info:</label>
                        <input
                            type="text"
                            placeholder="More Info"
                            id="homestayMoreInfo"
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="homestaySomeMoreInfo">Some More Info: </label>
                        <input
                            type="text"
                            placeholder="Some More Info"
                            id="homestaySomeMoreInfo"
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="homestaySpecifications">Specifications: </label>
                        <input
                            type="text"
                            placeholder="Specifications"
                            id="homestaySpecifications"
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="homestayPrice">Price: </label>
                        <input
                            type="number"
                            placeholder="Price"
                            id="homestayPrice"
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="homestayOverview">Overview: </label>
                        <input
                            type="text"
                            placeholder="Overview"
                            id="homestayOverview"
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="homestayOverviewImage">Overview Image: </label>
                        <input
                            type="file"
                            accept="image/*"
                            placeholder="Overview Image"
                            id="homestayOverviewImage"
                            onChange={handleFileChange}
                            required
                        />
                        <label htmlFor="homestayReview1">Review1: </label>
                        <input
                            type="text"
                            placeholder="Review1"
                            id="homestayReview1"
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="homestayReview2">Overview: </label>
                        <input
                            type="text"
                            placeholder="Review2"
                            id="homestayReview2"
                            onChange={handleChange}
                            required
                        />
                        </div>
                        <button type="submit">Add</button>
                    </form>
                </div>
        </div>
    );
};
            

export default AddTrack;

