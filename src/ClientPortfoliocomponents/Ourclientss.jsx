import React, { useState, useEffect } from 'react';
import img1 from '../images/person1.png';
import img2 from '../images/person2.png';
import img3 from '../images/person3.png';

export default function OurClients() {
  const [activeCard, setActiveCard] = useState(0);
  const cards = [
    { image: img1, partnered: '9', companyname: 'Card 1', description: 'This is the first card.' },
    { image: img2, partnered: '8', companyname: 'Card 2', description: 'This is the second card.' },
    { image: img3, partnered: '7', companyname: 'Card 3', description: 'This is the third card.' },
    { image: img3, partnered: '6', companyname: 'Card 4', description: 'This is the fourth card.' },
  ];

  const numberOfVisibleCards = 3; // Number of cards to display at a time
  const autoplayInterval = 10000; // Autoplay interval in milliseconds

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prevCard) => (prevCard === cards.length - 1 ? 0 : prevCard + 1));
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [cards.length]);

  const nextCard = () => {
    setActiveCard((prevCard) => (prevCard === cards.length - 1 ? 0 : prevCard + 1));
  };

  const prevCard = () => {
    setActiveCard((prevCard) => (prevCard === 0 ? cards.length - 1 : prevCard - 1));
  };

  const getVisibleCards = () => {
    const endIndex = activeCard + numberOfVisibleCards;
    if (endIndex >= cards.length) {
      return [...cards.slice(activeCard), ...cards.slice(0, endIndex % cards.length)];
    }
    return cards.slice(activeCard, endIndex);
  };

  const visibleCards = getVisibleCards();

  return (
    <div className='relative'>
      <div className='flex flex-col gap-y-7 mt-10'>
        {/* heading */}
        <div className='text-center'>
          <h1 className='lg:text-3xl xl:text-5xl font-bold'>Our clients</h1>
        </div>

        {/* row sliding */}
        <div className='flex flex-row justify-center gap-x-20'>
          <button className='' onClick={prevCard}>{'<'}</button>
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className='flex flex-col px-5 py-5 lg:w-[35%] xl:w-[30%] rounded-lg shadow-lg border-2 border-black'
            >
              {/* Images logo */}
              <div className='h-10 w-10'>
                <img src={card.image} alt='' />
              </div>
              <div className='mt-5 flex flex-row justify-between'>
                <h2 className='font-Poppins font-bold'>{card.companyname}</h2>
                <h1 className='font-Inter font-bold text-gray-400'>Partnered over {card.partnered} + years</h1>
              </div>
              <div className='mt-2'>
                <p className='font-Inter font-bold'>{card.description}</p>
              </div>
            </div>
          ))}
          <button className='' onClick={nextCard}>{'>'}</button>
        </div>
      </div>
    </div>
  );
}
