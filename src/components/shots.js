import React, { useState, useRef } from 'react';

export default function Shots() {
  const staticLayout = [
    { className: 'bg-1 layout-1' },
    { className: 'bg-2 layout-2' },
    { className: 'bg-3 layout-3' }
  ];

  const cardData = [
    {
      title: 'Sports',
      content: 'Axar Patel urges Team India to `move on` after IAA World Cup 2023 final defeat. He missed it due to an injury',
      backgroundColor: '#fff7ea',
      borderColor: '#ffebca',
      link: '/sports/axar-patel-reacts-icc-wc-2023-loss',
    },
    {
      title: 'Mumbai',
      content: 'Weekly horoscope: Check astrological predictions for all zodiac signs',
      backgroundColor: '#ffe6e9',
      borderColor: '#ffd7db',
      link: '/mumbai/weekly-horoscope-check',
    },
    {
      title: 'Lifestyle',
      content: 'As `bhindi on pizza` goes viral, Indian chefs share recipes for desi pizzas',
      backgroundColor: '#deefff',
      borderColor: '#d4eaff',
      link: '/lifestyle/indian-chefs-share-recipes-for-desi-pizzas',
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
        if (deltaX < 0) {
          // Swipe left
          setRotationIndex((prev) => (prev + 1) % cardData.length);
        } else {
          // Swipe right
          setRotationIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
        }
      }
      dragStartX.current = null;
    }
  };

  return (
    <div className="shots">
      <div className="container">
        <div className="row pe-2 pe-md-0">
          <div className="col-md-8"></div>
          <div className="col-md-4 ps-md-3 pe-md-5 px-4">
            <div className="row">
              {staticLayout.map((cardClass, visualIndex) => {
                const content = getRotatedContent(visualIndex);
                return (
                  <div key={visualIndex} className="col-md-12 mb-4">
                    <div
                      className={`slide-card ${cardClass.className}`}
                      draggable
                      onDragStart={(e) => startSwipe(e.clientX)}
                      onDragEnd={(e) => endSwipe(e.clientX)}
                      onTouchStart={(e) => startSwipe(e.touches[0].clientX)}
                      onTouchEnd={(e) => endSwipe(e.changedTouches[0].clientX)}
                      style={{
                        cursor: 'grab',
                        backgroundColor: content.backgroundColor,
                        borderWidth: '2px',
                        borderStyle: 'solid',
                        borderColor: content.borderColor,
                        padding: '20px',
                        borderRadius: '8px',
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
          </div>
        </div>
      </div>
    </div>
  );
}
