import React, { useState, useEffect } from 'react';

const slides = [
  {
    src: '/src/assets/ac1.jpg',
    alt: 'Slider image 1',
    caption: 'Creative Wellness for All',
  },
  {
    src: '/src/assets/ac2.jpg',
    alt: 'Slider image 2',
    caption: 'Explore Nature',
  },
  {
    src: '/src/assets/ac3.jpg',
    alt: 'Slider image 3',
    caption: 'Grow Together',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[60vh] overflow-hidden rounded-lg shadow-lg">
      {/* Sliding Images Only */}
      {slides.map((slide, idx) => (
        <img
          key={idx}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          draggable={false}
        />
      ))}
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-white' : 'bg-gray-400'} transition-colors`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
