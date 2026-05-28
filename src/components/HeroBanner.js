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
        <></>
    )
}

export default HeroBanner;