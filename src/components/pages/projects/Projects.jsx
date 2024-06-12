import { useEffect, useState } from "react";
import slides from "./DataProject";

const Slide = ({
  slide,
  isOver,
  handleColorChange,
  onClickLink,
  isSpecial,
}) => {
  const [isScreenLarge, setIsScreenLarge] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleScreenSizeChange = (event) => {
      setIsScreenLarge(event.matches);
    };

    handleScreenSizeChange(mediaQuery);
    mediaQuery.addEventListener("change", handleScreenSizeChange);
    return () => {
      mediaQuery.removeEventListener("change", handleScreenSizeChange);
    };
  }, []);

  const handleClickLink = () => {
    if (!isScreenLarge) {
      onClickLink(slide.link);
    }
  };

  return (
    <div
      className={`grayscale flex duration-500 transition-all  rounded-lg ${
        isOver ? "grayscale-0" : ""
      }`}
      onClick={handleClickLink}
      onMouseOver={handleColorChange}
    >
      <div className="">
        <div className="h-full w-[400px] relative">
          <img
            src={slide.url}
            alt=""
            className={`object-cover h-full w-full rounded-md transition-filter duration-300 filter`}
          />
          {isScreenLarge && (
            <a
              href={slide.link}
              target="_blank"
              className={`absolute shadow-xl top-2 right-2 text-xs bg-white p-2 rounded-xl hover:scale-105  ${
                isSpecial
                  ? "md:right-auto md:left-0 2xl:right-2 2xl:left-auto"
                  : ""
              }`}
            >
              Visit Here!
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const number = ["One", "Two", "Three", "Four"];
  const totalSlides = slides.length * 4;
  const [hoverStates, setHoverStates] = useState(
    Array(slides.length).fill(false)
  );

  const handleColorChange = (index) => {
    setHoverStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  const handleClickLink = (link) => {
    window.open(link, "_blank"); // Open the link in a new tab/window
  };
  const sectionData = [
    slides.slice(0, 3),
    slides.slice(3, 5),
    slides.slice(5, 6),
    slides.slice(6, 9),
  ];

  return (
    <div className="" id="project">
      <div className="flex justify-end w-full max-w-[2000px]">
        <h1 className="text-end  md:text-xl font-bold py-10 md:p-10 text-neutral-100 md:w-2/3">
          Vous trouverez ici quelques uns de mes projets d'entraînement, qui
          m'ont permis d'apprendre diverses techniques et l'utilisation de
          différentes bibliothèques.
        </h1>
      </div>
      <div className="overflow-hidden h-[700px] flex justify-center bg-neutral-900">
        <div className="flex justify-center flex-shrink-0 gap-3 w-[2000px] h-[700px]">
          {sectionData.map((sectionSlides, i) => (
            <div
              className={`grid ${
                i === 0
                  ? "grid-rows-3"
                  : i === 1
                  ? "grid-rows-2 "
                  : i === 2
                  ? "grid-rows-1"
                  : i === 3
                  ? "grid-rows-smallTwo "
                  : ""
              } gap-5`}
              key={i}
            >
              {sectionSlides.map((slide, j) => {
                const index =
                  sectionData
                    .slice(0, i)
                    .reduce((acc, curr) => acc + curr.length, 0) + j;
                const isSpecial = index > 5 && index < 9;
                return (
                  <Slide
                    key={index}
                    slide={slide}
                    isOver={hoverStates[index]}
                    handleColorChange={() => handleColorChange(index)}
                    onClickLink={handleClickLink}
                    isSpecial={isSpecial}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
