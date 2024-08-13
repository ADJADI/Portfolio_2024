import React, { useState, useEffect } from "react";
import {
  frontEndService,
  uxService,
  stateService,
  optimizationService,
} from "./ServicesData";
import { useInView } from "react-intersection-observer";
import { space } from "postcss/lib/list";

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexState, setCurrentIndexState] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  useEffect(() => {
    // Update isVisible state when inView changes
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  const handleNextUx = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === uxService.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevUx = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? uxService.length - 1 : prevIndex - 1
    );
  };

  const handleSlideChangUx = (index) => {
    setCurrentIndex(index);
  };

  const handleNextState = () => {
    setCurrentIndexState((prevIndex) =>
      prevIndex === stateService.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevState = () => {
    setCurrentIndexState((prevIndex) =>
      prevIndex === 0 ? stateService.length - 1 : prevIndex - 1
    );
  };

  const handleSlideChangeState = (index) => {
    setCurrentIndexState(index);
  };

  return (
    <div
      ref={ref}
      className="h-full sm:h-[1000px] lg:h-[800px] w-full sm:p-5 flex items-center justify-center text-neutral-100 transition-all duration-1000 "
      id="service"
    >
      <div className="flex flex-col  h-full max-w-[1700px] gap-10 p-10 transition-all duration-1000 ">
        <div className="flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:h-[300px]  ">
          <div className="flex flex-col gap-2 h-full">
            <hr className="block w-full h-2  bg-neutral-100" />
            <h2 className="flex h-full text-center ">
              Compétences en Développement Frontend
            </h2>
          </div>
          <div className="flex flex-col gap-2 h-full justify-center">
            <hr className="block w-full h-2 bg-neutral-300" />
            <h2 className=" flex h-full text-center">
              Conception et Développement UI/UX
            </h2>
          </div>
          <div className="flex flex-col gap-2 h-full justify-center">
            <hr className="block w-full h-2 bg-neutral-500" />
            <h2 className=" flex h-full items-center text-center">
              Gestion d'État et Gestion de Formulaires
            </h2>
          </div>

          <div className="flex  flex-col  gap-2 h-full justify-center">
            <hr className="block w-full h-2 bg-neutral-700" />
            <h2 className="flex h-full items-center text-center ">
              Flux de Travail de Développement et Optimisation
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:h-[500px]  ">
          <span
            className={`bg-neutral-100 h-[200px] rounded-md sm:h-full ${
              isVisible ? "" : ""
            }`}
          >
            <ul
              className="text-neutral-900 text-sm flex flex-col h-full p-5 gap-10 overflow-y-scroll "
              tabIndex={0}
            >
              {frontEndService.map((service) => (
                <li
                  key={service.id}
                  className=" h-full w-full flex flex-row-reverse justify-end gap-5 "
                >
                  <span className="w-[80%]">{service.description}</span>
                  <span className="h-2 flex w-2 bg-neutral-900 rounded-xl mt-2"></span>
                </li>
              ))}
            </ul>
          </span>
          <span
            className={`bg-neutral-300 rounded-md h-[200px]  sm:h-full relative ${
              isVisible ? "" : ""
            }`}
          >
            <div className=" text-sm text-center text-neutral-900 flex h-full justify-center items-center p-5">
              {uxService[currentIndex].description}
            </div>
            <div className="absolute top-0 w-full flex justify-between h-full ">
              <button
                className="h-full w-10 "
                onClick={handlePrevUx}
                aria-label="Go to the previous slide"
              ></button>
              <button
                className="h-full w-10 "
                onClick={handleNextUx}
                aria-label="Go to the next slide"
              ></button>
            </div>
            <div className="flex gap-2 w-full px-2 absolute top-1">
              {uxService.map((service, index) => (
                <div className="w-full flex" key={index}>
                  <button
                    onClick={() => handleSlideChangUx(index)}
                    className={`h-1 w-full rounded-sm  ${
                      currentIndex === index
                        ? "bg-neutral-900"
                        : "bg-neutral-50"
                    }`}
                    aria-label="change slide"
                  ></button>
                </div>
              ))}
            </div>
          </span>
          <span
            className={`bg-neutral-500 rounded-md h-[200px] sm:h-full relative ${
              isVisible ? "" : ""
            }`}
          >
            <div className=" text-sm text-center text-neutral-900  flex justify-center h-full items-center p-5">
              {stateService[currentIndexState].description}
            </div>
            <div className="absolute top-0 w-full flex justify-between h-full ">
              <button
                className="h-full w-10 "
                onClick={handlePrevState}
                aria-label="go to the previous slide"
              ></button>
              <button
                className="h-full w-10 "
                onClick={handleNextState}
                aria-label="go to the next slide"
              ></button>
            </div>
            <div className="flex gap-2 w-full px-2 absolute top-1">
              {stateService.map((service, index) => (
                <div className="w-full flex" key={index}>
                  <button
                    onClick={() => handleSlideChangeState(index)}
                    className={`h-1 w-full rounded-sm  ${
                      currentIndexState === index
                        ? "bg-neutral-900"
                        : "bg-neutral-50"
                    }`}
                    aria-label="change slide"
                  ></button>
                </div>
              ))}
            </div>
          </span>
          <span
            className={`bg-neutral-700 rounded-md h-[200px] sm:h-full ${
              isVisible ? "" : ""
            }`}
          >
            <ul
              className="text-neutral-100 text-sm text-end flex flex-col h-full p-5 gap-10 overflow-y-scroll "
              tabIndex={0}
            >
              {optimizationService.map((service) => (
                <li
                  key={service.id}
                  className=" h-full w-full flex justify-end gap-5 "
                >
                  <p className="w-[80%]">{service.description}</p>
                  <span className="h-2 flex w-2 bg-neutral-100  rounded-xl mt-2"></span>
                </li>
              ))}
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}
