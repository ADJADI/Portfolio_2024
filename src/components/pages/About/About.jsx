import React, { useState } from "react";
import experienceLogo from "../../../assets/logos/icons8-experience-24 (1).png";
import problemLogo from "../../../assets/logos/icons8-problem-24.png";
import learningLogo from "../../../assets/logos/icons8-learning-24.png";

export default function About() {
  const [isClicked, setIsClicked] = useState(true);

  const handleToggle = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`bg-neutral-900 relative sm:h-full ${
        !isClicked ? "min-h-full" : " min-h-full lg:h-[850px]"
      }`}
      id="about"
    >
      <div className="flex flex-col gap-10 opacity-80 ">
        <div className="flex flex-col text-neutral-100 gap-3 p-10 md:w-[80%] md:text-xl ">
          <h2 className="font-bold">A propos de moi</h2>
          <p className="">
            Je me suis passionné par le developpement web, après un
            apprentissage en autodidacte et le suivi de formations en ligne tel
            qu'avec FreeCodeCamp. J'ai ainsi acquis les bases en HTML/CSS et
            JavaScript. Par la suite j'ai decouvert le framework React.js. J'ai
            rapidement aimé travailler avec React.js et ai ainsi décidé de me
            concentrer sur son apprentissage. J'aime aussi l'associer avec
            tailwindcss pour ce qui est du style car je trouve que le mariage
            entre les deux fonctionne très bien.
          </p>
        </div>
        <div
          className={`flex justify-center w-full h-900px ${
            !isClicked ? "md:h-[400px]" : "sm:h-full"
          }`}
        >
          <div
            className={`flex flex-col  lg:flex-row md:justify-center rounded-md w-[85%] max-w-[1700px] items-center bg-black shadow-md h-full ${
              !isClicked
                ? "h-400px sm:block"
                : "w-[85%] lg:w-[65%] xl:w-[65%] 2xl:w-[85%] duration-1000"
            }`}
          >
            <div
              className={`w-full p-10 text-white ${!isClicked ? "hidden" : ""}`}
            >
              Au cours des deux dernières années, j'ai exploré de manière
              autodidacte le développement frontend et acquis une solide
              expertise dans un large éventail de technologies clés.
            </div>
            <div
              className={`rounded-md text-xs sm:text-sm justify-center items-end w-full flex gap-2 relative h-[400px] cursor-pointer  ${
                !isClicked
                  ? "h-full w-full items-center flex-col md:flex-row "
                  : "flex-col h-full sm:flex-row lg:flex-col sm:h-[400px] "
              }`}
              onClick={handleToggle}
            >
              <span
                className={`h-full w-full sm:w-full md:h-[108%] md:w-[280px] duration-300 bg-white opacity-60 rounded-md origin-bottom-left rotate-[0deg] shadow-xl ${
                  !isClicked ? "origin-center relative" : "lg:absolute"
                }`}
              >
                {isClicked ? (
                  <div className="h-full">
                    <div className="absolute flex items-center top-0 right-0">
                      <span className="font-bold text-neutral-900 text-sm">
                        Expérience
                      </span>
                      <img
                        src={experienceLogo}
                        alt="logo_experience"
                        className="p-2"
                      />
                    </div>
                    <div className="lg:hidden flex items-center h-full text-center  p-3">
                      Lors de mon parcours d'apprentissage, j'ai réalisé
                      plusieurs projets personnels démontrant mes compétences en
                      développement frontend. J'ai été particulièrement attiré
                      par la conception d'interfaces utilisateur réactives et la
                      gestion avancée de l'état des applications.
                    </div>
                  </div>
                ) : (
                  <div className="h-full">
                    <div className="absolute flex items-center top-0 right-0">
                      <span className="font-bold text-neutral-900 text-sm">
                        Expérience
                      </span>
                      <img
                        src={experienceLogo}
                        alt="logo_experience"
                        className="p-2"
                      />
                    </div>
                    <p className="flex h-full items-center text-center font-semibold px-5">
                      Lors de mon parcours d'apprentissage, j'ai réalisé
                      plusieurs projets personnels démontrant mes compétences en
                      développement frontend. J'ai été particulièrement attiré
                      par la conception d'interfaces utilisateur réactives et la
                      gestion avancée de l'état des applications.
                    </p>
                  </div>
                )}
              </span>
              <span
                className={`h-full w-full sm:w-full md:h-[108%] md:w-[280px] duration-500 bg-white opacity-70 rounded-md origin-bottom-left shadow-xl relative ${
                  !isClicked
                    ? "rotate-[0px] origin-center  xl:rotate-[0deg] "
                    : "lg:absolute lg:rotate-[10deg] "
                }`}
              >
                {isClicked ? (
                  <div className="h-full">
                    <div className="absolute flex justify-center w-full items-center top-0 right-0">
                      <span className="font-bold tracking-tighter text-end text-sm text-neutral-900">
                        Approche et Résolution de problème
                      </span>
                      <img
                        src={problemLogo}
                        alt="logo_problem_solving"
                        className="p-2"
                      />
                    </div>
                    <div className="lg:hidden flex items-center h-full text-center p-3">
                      Je m'efforce d'adopter une approche analytique et
                      méthodique pour résoudre les défis techniques rencontrés
                      lors du développement. J'aime explorer de nouvelles
                      solutions et adopter les meilleures pratiques pour assurer
                      la qualité du code.
                    </div>
                  </div>
                ) : (
                  <div className="h-full">
                    <div className="absolute flex items-center top-0 right-0">
                      <span className="font-bold tracking-tighter text-end text-sm text-neutral-900">
                        Approche et Résolution de problème
                      </span>
                      <img
                        src={problemLogo}
                        alt="logo_problem_solving"
                        className="p-2"
                      />
                    </div>
                    <p className="flex h-full items-center font-semibold text-center px-5">
                      Je m'efforce d'adopter une approche analytique et
                      méthodique pour résoudre les défis techniques rencontrés
                      lors du développement. J'aime explorer de nouvelles
                      solutions et adopter les meilleures pratiques pour assurer
                      la qualité du code.
                    </p>
                  </div>
                )}
              </span>

              <span
                className={`h-full w-full sm:w-full md:h-[108%] md:w-[280px] duration-700 bg-white opacity-80 rounded-md origin-bottom-left shadow-xl relative ${
                  !isClicked
                    ? "origin-center  "
                    : "lg:absolute lg:rotate-[20deg]"
                }`}
              >
                {isClicked ? (
                  <div className="h-full">
                    <div className="absolute flex items-center top-0 right-0">
                      <span className="font-bold text-neutral-900 text-sm text-end">
                        Apprentissage Continu
                      </span>
                      <img
                        src={learningLogo}
                        alt="logo_apprentissage"
                        className="p-2"
                      />
                    </div>
                    <div className="lg:hidden flex items-center h-full text-center p-3">
                      Je suis engagé dans un processus d'apprentissage continu
                      et je cherche toujours à approfondir mes compétences et à
                      me tenir au courant des dernières avancées dans le domaine
                      du développement frontend.
                    </div>
                  </div>
                ) : (
                  <div className="h-full">
                    <div className="absolute flex items-center top-0 right-0">
                      <span className="font-bold text-neutral-900 text-sm">
                        Apprentissage Continu
                      </span>
                      <img
                        src={learningLogo}
                        alt="logo_apprentissage"
                        className="p-2"
                      />
                    </div>
                    <p className="flex h-full items-center text-center font-semibold px-5">
                      Je suis engagé dans un processus d'apprentissage continu
                      et je cherche toujours à approfondir mes compétences et à
                      me tenir au courant des dernières avancées dans le domaine
                      du développement frontend.
                    </p>
                  </div>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
