import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HeroBanner () {
  const [currentSlide, setCurrentSlide] = useState(0);
  const moveSlide = (direction) => {
    setCurrentSlide((prev) => (prev + direction + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

    return(
      <header className="hero-banner" id="hero-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${currentSlide === index ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.title} className="hero-image" />
          <div className="hero-overlay">
            <div className="hero-content">
              <span className="hero-tag">{slide.tag}</span>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-text">{slide.text}</p>
              <Link to="/" className="hero-button">
                Shop Fashion
              </Link>
            </div>
          </div>
        </div>
      ))}

    </header>
    );
}

export default HeroBanner;