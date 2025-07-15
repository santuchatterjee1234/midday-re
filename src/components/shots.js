import React, { useState, useRef } from 'react';
import Link from 'next/link';

export default function Shots() {
  const staticLayout = [
    { className: 'bg-1' },
    { className: 'bg-2' },
    { className: 'bg-3' },
  ];

  const cardData = [
    {
      title: 'Lifestyle',
      content: 'As `bhindi on pizza` goes viral, Indian chefs share recipes for desi pizzas',
      backgroundColor: '#deefff',
      borderColor: '#b5dbff',
      link: '/lifestyle/indian-chefs-share-recipes-for-desi-pizzas',
    },
    {
      title: 'Mumbai',
      content: 'Weekly horoscope: Check astrological predictions for all zodiac signs',
      backgroundColor: '#ffe6e9',
      borderColor: '#ffccd1',
      link: '/mumbai/weekly-horoscope-check',
    },
    {
      title: 'Sports',
      content: 'Axar Patel urges Team India to `move on` after ICC World Cup 2023 final defeat. He missed it due to an injury',
      backgroundColor: '#fff7ea',
      borderColor: '#ffe7bf',
      link: '/sports/axar-patel-reacts-icc-wc-2023-loss',
    },
  ];

  const [rotationIndex, setRotationIndex] = useState(0);
  const dragStartX = useRef(null);

  const getRotatedContent = (visualIndex) => {
    return cardData[(visualIndex + rotationIndex) % cardData.length];
  };

  const startSwipe = (x) => {
    dragStartX.current = x;
  };

  const endSwipe = (x) => {
    if (dragStartX.current !== null) {
      const deltaX = x - dragStartX.current;
      if (Math.abs(deltaX) > 50) {
        if (deltaX > 1) {
          goPrevious();
        } else {
          goNext();
        }
      }
      dragStartX.current = null;
    }
  };

  const goPrevious = () => {
    setRotationIndex((prev) =>
      (prev - 1 + cardData.length) % cardData.length
    );
  };

  const goNext = () => {
    setRotationIndex((prev) => (prev + 1) % cardData.length);
  };

  const goToIndex = (index) => {
    setRotationIndex(index);
  };

  return (
    <div className="shots">
      <div className="container">
        <div className="row ps-md-0 pe-md-0 px-2 my-3">
          <div className="col-md-8"></div>
          <div className="col-md-4 ps-md-3 pe-md-4 ps-3 pe-4 shots-card-position">
            <div className="row">
              {staticLayout.map((cardClass, visualIndex) => {
                const content = getRotatedContent(visualIndex);
                return (
                  <div key={visualIndex} className="col-md-12">
                    <div
                      className={`slide-card ${cardClass.className}`}
                      draggable
                      onDragStart={(e) => startSwipe(e.clientX)}
                      onDragEnd={(e) => endSwipe(e.clientX)}
                      onTouchStart={(e) =>
                        startSwipe(e.touches[0].clientX)
                      }
                      onTouchEnd={(e) =>
                        endSwipe(e.changedTouches[0].clientX)
                      }
                      style={{
                        cursor: 'grab',
                        backgroundColor: content.backgroundColor,
                        borderWidth: '2px',
                        borderStyle: 'solid',
                        borderColor: content.borderColor,
                        padding: '20px',
                        borderRadius: '8px',
                        marginBottom: '10px',
                      }}
                    >
                      <h3 className="slide-title">{content.title}</h3>
                      <a
                        href={content.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <p className="slide-content">{content.content}</p>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            {/* <div className="pagination-controls d-flex justify-content-between mt-3">
              <button
                onClick={goPrevious}
                className="btn btn-outline-primary"
              >
                ← Previous
              </button>
              <button
                onClick={goNext}
                className="btn btn-outline-primary"
              >
                Next →
              </button>
            </div> */}

            {/* Dynamic Pagination Dots */}
            <div className="pagination-dots d-flex justify-content-center mt-2">
              {cardData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  style={{
                    width: '5px',
                    height: '5px',
                    margin: '0 5px',
                    borderRadius: '50%',
                    border: 'none',
                    padding: '4px',
                    backgroundColor:
                      rotationIndex % cardData.length === index
                        ? 'red'
                        : '#ccc',
                  }}
                ></button>
              ))}
            </div>

            {/* Continue on App */}
            <div className="position-relative mt-3">
              <Link href="">
                <button type="button" className="continue-app-btn">
                  Continue on App
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
