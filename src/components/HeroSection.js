import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel' 

function HeroSection() {
  return (
    <div className='hero-container'>
      
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Welcome to GreensKiosk</h1>
      <p>We sell variety of groceries products</p>
    
      <div className='hero-btns'>
      <Link to="/Products.js" className="btn btn-primary">
        <Button
        href='Cards.js'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
       View Products
        </Button>
        </Link>
        <Link to="/Products.js" className="btn btn-primary">
        <Button
          href='Products.js'
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick="location.href = 'Products.js'"
        >
          order now <i className='fab fa-first-order></i>' />
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
