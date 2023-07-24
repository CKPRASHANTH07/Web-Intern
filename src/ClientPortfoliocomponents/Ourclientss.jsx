import React, { useState, useEffect } from 'react';
import img1 from '../images/Adithya.png';
import img2 from '../images/Shoppers_Stop_Logo.png';
import img3 from '../images/dmart.png';
import img4 from '../images/ginijony.jpeg'
import {BiSolidLeftArrow} from 'react-icons/bi'
import {BiSolidRightArrow} from 'react-icons/bi';
import Aos from 'aos'
import 'aos/dist/aos.css'



export default function OurClients() {
  const [activeCard, setActiveCard] = useState(0);
  const cards = [
    { image: img1, partnered: '9', companyname: 'Adithya Birla', description: 'Our Partnership with Birla Company has been a game-changer for our business. We are thrilled to have formed a strong bond.' },
    { image: img2, partnered: '8', companyname: 'Shoppers stop', description: 'The partnership has opened up new avenues of growth and opportunity for us.' },
    { image: img3, partnered: '7', companyname: 'D mart', description: 'The synergy between our companies is remarkable. We have found common ground in our shared values.' },
    { image: img4, partnered: '6', companyname: 'Gini and jhony', description: 'Through this partnership, we have been able to combine our technological prowess with Companys manufacturing capabilities' },
  ];

  const numberOfVisibleCards = 3; // Number of cards to display at a time
  const autoplayInterval =2800; // Autoplay interval in milliseconds

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


  useEffect(()=>{

    Aos.init();
 },[]);

  return (
    <div className='relative' data-aos="fade-up" data-aos-duration="5000"  data-aos-offset="200"
    data-aos-easing="ease-in-sine">
      <div className='flex flex-col mt-10 gap-y-7'>
        {/* heading */}
         <div className='text-center'>
          <h1 className='font-bold lg:text-2xl xl:text-3xl underline underline-offset-8 decoration-4 decoration-violet-500'>Our Clients</h1>
         </div>

        {/* row sliding */}
        <div className='flex flex-row justify-center mx-28'>
          <button className='' onClick={prevCard}><BiSolidLeftArrow size='1.5em' /></button>
          {visibleCards.map((card, index) => {
            const isCenterCard = index === 1; // Check if the card is the center card
            const cardClass = isCenterCard
              ? 'flex flex-col px-8 py-8 lg:w-[35%] xl:w-[30%] rounded-lg shadow-xl border-2 border-black'
              : 'flex flex-col px-8 py-8 lg:w-[35%] xl:w-[30%] rounded-lg shadow-xl border-2 border-black transform scale-[0.7] translate-y-3';

            return (
              <div key={index} className={cardClass}>
                {/* Images logo */}
                <div className='flex justify-center w-20 px-5 py-5 h-14'>
                  <img src={card.image} alt='' />
                </div>
                <div className='flex justify-start mt-5'>
                  <h2 className='text-xl font-extrabold text-violet-500 font-Poppins'>{card.companyname}</h2>
                </div>
                <h1 className='font-bold text-gray-400 font-Inter'>Partnered over {card.partnered} + years</h1>
                <div className='mt-5'>
                  <p className='font-bold font-Inter'>{card.description}</p>
                </div>
              </div>
            );
          })}
          <button className='' onClick={nextCard}><BiSolidRightArrow size="1.5em" /></button>
        </div>
      </div>
    </div>
  );
}
