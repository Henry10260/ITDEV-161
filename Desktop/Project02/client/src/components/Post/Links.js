import React, { useState } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Links = ({ onPostCreated }) => {
    return (
        <div className="about-container">

            <h3>Here are some links to other sites with additional information: </h3>
                <ul className="info">
                    <li><a href="https://animalcorner.co.uk/animals/dog/">Animal Corner</a></li>
                    <li><a href="https://northshoredoodles.com/">North Shore Doodles</a></li>
                    <li><a href="https://www.akc.org/dog-breeds/">American Kennel Club</a></li>
                    <li><a href="https://www.care.com/c/stories/6094/101-facts-about-dogs-you-might-not-know/">101 Fun Facts About Dogs</a></li>
            </ul>
        </div>
    );
};

export default Links;
