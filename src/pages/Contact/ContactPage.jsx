// Contact.jsx
import React, { useState } from 'react';
import Header from '../../Components/Common/Header/Header';
import SecondBanner from '../../Components/Banners/OtherPagesBanner/OtherBanner.jsx';
import './ContactPage.css'; // Importing CSS for styling

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Thank you for contacting us!');
    };

    return (
        <>
            <Header />
            <SecondBanner />

            <div className="contact-page-container">
                {/* Contact Form */}
                <div className="form-container">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you! Fill out the form below to get in touch.</p>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Write your message here"
                                required
                            />
                        </div>

                        <button type="submit" className="submit-button">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Additional Information Section */}
                <div className="info-container">
                    <h2>Contact Information</h2>
                    <p><strong>Email:</strong> contact@example.com</p>
                    <p><strong>Phone:</strong> +91 9876543210</p>
                    <p><strong>Address:</strong> 123, Main Street, Dehradun, Uttarakhand</p>

                    <h2>Working Hours</h2>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>

                    <h2>Follow Us</h2>
                    <div className="social-links">
                        <a href="www.google.com">Facebook</a> | <a href="www.google.com">Twitter</a> | <a href="www.google.com">Instagram</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
