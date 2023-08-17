import React, { useState, useEffect,useMemo } from "react";
import "./cat.css";
import ajio from "../Logos/Ajio.png";
import amazon from "../Logos/amazon.png";
import croma from "../Logos/croma.png";
import flip from "../Logos/flipkart.png";
import myn from "../Logos/myntra.png";
import tata from "../Logos/tata.png";

export default function Category() {
  const cat = [
    {
      id: 1,
      name: "Ajio",
      src: ajio,
      link: "https://www.ajio.com/",
    },
    {
      id: 2,
      name: "Amazon",
      src: amazon,
      link: "https://www.amazon.in/",
    },
    {
      id: 3,
      name: "Croma",
      src: croma,
      link: "https://www.croma.com/",
    },
    {
      id: 4,
      name: "Flipkart",
      src: flip,
      link: "https://www.flipkart.com/",
    },
    {
      id: 5,
      name: "Myntra",
      src: myn,
      link: "https://www.myntra.com/",
    },
    {
      id: 6,
      name: "Tata cliq",
      src: tata,
      link: "https://www.tatacliq.com/",
    },
  ];
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [loopCount, setLoopCount] = useState(0);
  var interval;
  const memoizedCat = useMemo(() => cat, [cat]);

  useEffect(() => {
    if (loopCount >= memoizedCat.length) {
      clearInterval(interval);
      return;
    }

    interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % memoizedCat.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [memoizedCat, loopCount]);

  useEffect(() => {
    if (currentCardIndex === 0) {
      setLoopCount((prevLoopCount) => prevLoopCount + 1);
    }
  }, [currentCardIndex]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="cat-cont">
      <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        className="input"
      />
      <button type="submit" className=" btn sign">Search</button>
    </form>
      <div className="row cat-list">
        {cat.map((index, idx) => (
          <a
            href={index.link}
            className={` col-lg-12 cat btn ${
              idx === currentCardIndex
                ? "active"
                : idx < currentCardIndex
                ? "prev"
                : "next"
            }`}
            key={index.id}
          >
            <img src={index.src} className="cat-img" alt={index.name} />
            
          </a>
        ))}
      </div>
    </div>
  );
}
