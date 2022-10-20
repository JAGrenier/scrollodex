import React from 'react';
import './exampleCard.scss';
import image from './example_headshot.png';

function ExampleCard() {
  return (
    <div className="cardContainer">

        <div className="card">
            <img className="imageContainer" src={image} alt="group of women at NYSE standing in front of WWCode logo." />
        </div>

        <div className="card">
            <h3>Women Who Code</h3>
            <p>Empower diverse women to excel in technology careers</p>
            <p>www.womenwhocode.com</p>
      </div>

    </div>
  );
}

export default ExampleCard;
