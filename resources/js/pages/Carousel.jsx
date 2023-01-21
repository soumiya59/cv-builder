import React from 'react';
import { useState, useRef, useEffect } from 'react';

// Data
import data from '../data.json';

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (

    <div className="mx-auto my-12 carousel">
      <div className="relative overflow-hidden">
        <div className="absolute flex justify-between w-full h-full top left">
          <button
            onClick={movePrev}
            className="z-10 h-full pl-8 text-center text-white transition-all duration-300 ease-in-out opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-12 bg-slate-400 rounded-2xl"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="z-10 h-full pl-8 text-center text-white transition-all duration-300 ease-in-out opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-12 xl:mr-8 bg-slate-400 rounded-2xl"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="relative z-0 flex gap-1 overflow-hidden carousel-container scroll-smooth snap-x snap-mandatory touch-pan-x"
        >
          {data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                className="relative mx-5 text-center carousel-item snap-start"
              >
                <a
                  href={resource.link}
                  className="z-0 block bg-left-top bg-no-repeat bg-cover w-96 h-max"
                  style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                >
                  <img
                    src={resource.imageUrl || ''}
                    alt={resource.title}
                    className="shadow-md "
                  />
                </a>

                <a
                  href={resource.link}
                  className="absolute top-0 left-0 flex items-center w-full h-full transition-opacity duration-300 opacity-0 hover:opacity-100 bg-slate-100/50 "
                >
                    <button className="p-3 px-5 mx-auto text-2xl text-white shadow-md center text-l rounded-3xl bg-darkpink hover:opacity-95">
                      Selectionner
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;