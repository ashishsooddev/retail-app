import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    tag: "NEW COLLECTION",
    title: "The Art of Refined Dressing",
    text: "Experience the pinnacle of contemporary craftsmanship with our curated Autumn/Winter selection.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMB0SRayQOXa6hBFacIxA9IlzZytSZ9tJR-Xzw5tVdN3Ze-PIbiIHitBxsYCBrbjVBWjXaSw6qmUfdqGSSe5N5H1HC_pT5OT8N6akawnOiPK1UishUsvqv4qtRQRB2VDKv96YHfq6azyAQ9Us2BdWSmm7qB7xjhYwuVXcneQH5UjFMHSKS9jBOImiXT_W8Pnma6oxI5yUKol7fA-oOVjtQ1SBOEDxUpXtY7YRSRchoqO6L75LwBgl4IvadQ4-7VqaAZ1mYNW9qDvei",
  },
  {
    tag: "FUTURE READY",
    title: "Precision Engineering",
    text: "Elevate your digital workflow with devices that bridge the gap between performance and elegance.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA89t4qUABTbJz1KfTNRosrCGv3WlljJZY9_73hBOKyvZOCaCrZagr1fnHLPvdD4gQnUAnaa14WhlHYtrOn-Q45Y8Y73Rz-e-nKlOHrTj_nA1oGsP2krV9SRJk77lb6uMIYqRH0fCn6LThCQnktAxRerGk--hdP81buTYx8p5uYfXHCbRDmqtt2rjcqkYp0Ov_IlOdzh9LhdaQ1FSok0wH-nDFQNSuTNSlXchvXw1bQmiWGyqtAnmXQuIpONTsIEt_lhWlOtpviharQ",
  },
];

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
        <div className="hero-controls">
            <button className="hero-control-btn" onClick={() => moveSlide(-1)}>
            ‹
            </button>
            <button className="hero-control-btn" onClick={() => moveSlide(1)}>
            ›
            </button>
        </div>
    </header>
    );
}

export default HeroBanner;