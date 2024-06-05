import { useState, useEffect } from "react";

export default function Preloader() {
  const rotations = [
    0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300,
    320, 340, 360,
  ];
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const animationDelay = 100;

    // Set the first element to be visible immediately
    setVisibleIndexes([0]);

    // Schedule staggered appearance for the rest of the elements
    for (let i = 1; i < rotations.length; i++) {
      setTimeout(() => {
        setVisibleIndexes((prevIndexes) => [...prevIndexes, i]);
      }, i * animationDelay);
    }
  }, []);
  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" w-[80%] h-[80%] relative cursor-pointer">
        <div className="">
          {rotations.map((angle, index) => (
            <span
              key={index}
              className={`h-[100px]  w-[50px] md:h-[200px] md:w-[100px]  left-1/2 top-1/4 duration-300 bg-neutral-100 opacity-60 rounded-md origin-bottom-left absolute shadow-xl   }`}
              style={{
                transform: `rotate(${angle}deg)`,
                transition: "opacity 0.5s ease",
                opacity: visibleIndexes.includes(index) ? 1 - angle / 360 : 0,
                transitionDelay: `${index * 0.01}s`,
              }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
