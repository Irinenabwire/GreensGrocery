import React from 'react';
import '../App.css';
import './Carosel.css';
import Carousel from 'react-bootstrap/Carousel' 


function Carosel() {
  return (<Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="images/im-1.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Fruits</h3>
        <p>We seel fresh fruits in affordable prices.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="images/im-2.jpg"
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Greens</h3>
        <p>Do you have trouble finding fresh vegies, visit GreansKiosk for a better experience.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="images/im-3.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Spices</h3>
        <p>Visit our store in finding the different taste you might need for your food.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>)
}

export default Carosel;
