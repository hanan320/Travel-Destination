import React from 'react';
import { Link, useParams } from 'react-router-dom'; 
import { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import db from '../../data/db.json';
import './TourDetails.css';

function TourDetails() {
    const [isClicked, setIsClicked] = useState(false);
    const { id } = useParams();

    const data = db;

    const showall = () => {
        setIsClicked(!isClicked);
    };

    return (
        <>
            <Header />
            <div className="back-button-container">
                <Link to="/">Back</Link>
            </div>
            {data.map((tour) => {
                if (tour.id === id) {
                    return (
                        <div key={tour.id} className="card">
                            <h4>{tour.name}</h4>
                            <img className="tour-image" src={tour.image} alt={tour.name} />

                            {isClicked ? (
                                <>
                                    <p>{tour.info}</p>
                                    <button onClick={showall}>See less</button>
                                </>
                            ) : (
                                <>
                                    <p>{tour.info.split('.').slice(0, 1)}</p>
                                    <button onClick={showall}>See more</button>
                                </>
                            )}
                        </div>
                    );
                }
                return null; // Add a default return
            })}
            <Footer />
        </>
    );
}

export default TourDetails;
