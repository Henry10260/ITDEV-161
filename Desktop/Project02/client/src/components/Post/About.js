import React, { useState } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import './styles.css';

const About= ({ onPostCreated }) => {
    return (
        <div className="about-container">
            <h4>About:</h4>
            <h5>Our site is dedicated to finding a create for for all new puppies and even a few old friends. We know that finding a family friend through a system like this can be challenging, but we've helped hundreds of families find the perfect pet. Our most important sugestion is to always vistit the dog before buying. Thanks for visiting our site and good luck!</h5>
        </div>
    );
};

export default About;