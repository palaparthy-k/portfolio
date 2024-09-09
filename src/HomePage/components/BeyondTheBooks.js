// BeyondTheBooks.js
import React from 'react';
import Slider from 'react-slick';
import haha from './1.jpeg';
import huhu from './2.jpeg';
import  hehe from  './3.jpeg'
import './BeyondTheBooks.css'; // Ensure this file includes carousel styles

const BeyondTheBooks = () => {
  // Carousel settings for the inner carousels
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="content-card" id="beyond-the-books">
      <section className="beyond-the-books">
        <h2>Beyond the Books</h2>
        <div className="conthr">
          <hr />
        </div>
        <div className="cards-container">
          <div className="hover-card">
            <div className="card-title">
              <h3>Title 1</h3>
            </div>
            <div className="card-image">
              <Slider {...carouselSettings} className="card-carousel">
                <div>
                  <img src={haha} alt="Carousel 1a" className="carousel-image" />
                </div>
                <div>
                  <img src={huhu} alt="Carousel 1b" className="carousel-image" />
                </div>
                <div>
                  <img src={hehe} alt="Carousel 1b" className="carousel-image" />
                </div>
                {/* Add more carousel items as needed */}
              </Slider>
            </div>
            <div className="card-content">
              <p>Content related to Title 1...</p>
            </div>
          </div>
          <div className="hover-card">
            <div className="card-title">
              <h3>Title 2</h3>
            </div>
            <div className="card-image">
              <Slider {...carouselSettings} className="card-carousel">
                <div>
                  <img src="carousel_image2a.jpg" alt="Carousel 2a" className="carousel-image" />
                </div>
                <div>
                  <img src="carousel_image2b.jpg" alt="Carousel 2b" className="carousel-image" />
                </div>
                {/* Add more carousel items as needed */}
              </Slider>
            </div>
            <div className="card-content">
              <p>Content related to Title 2...</p>
            </div>
          </div>
          {/* Add more cards as needed */}
        </div>
      </section>
    </div>
  );
};

export default BeyondTheBooks;


