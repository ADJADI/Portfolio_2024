import { useState } from "react";
import Marquee from "react-fast-marquee";
import reactLogo from "../../assets/logos/icons8-react-80.png";
import reduxLogo from "../../assets/logos/icons8-redux-96.png";
import tailwindcssLogo from "../../assets/logos/icons8-tailwindcss-96.png";
import JSLogo from "../../assets/logos/icons8-javascript-64.png";
import vercelLogo from "../../assets/logos/vercel.png";
import reactDomLogo from "../../assets/logos/react-router-mark-monotone.png";
import formikLogo from "../../assets/logos/formik.png";
import viteLogo from "../../assets/logos/pngwing.com.png";
import gmail from "../../assets/logos/icons8-gmail-50 (1).png";
import phoneLogo from "../../assets/logos/icons8-phone-30.png";
import fccLogo from "../../assets/logos/fcc_primary_large.png";
import femLogo from "../../assets/logos/favicon-32x32.png";
import githubLogo from "../../assets/logos/icons8-github-60.png";
import linkedinLogo from "../../assets/logos/icons8-linkedin-50.png";

export default function HomePage({ setIsContactClicked, isContactClicked }) {
  const [isClicked, setIsclicked] = useState(false);
  const handleClick = () => {
    setIsclicked(!isClicked);
  };
  const handleContactClicked = () => {
    setIsContactClicked(true);
  };
  const handleMouseLeave = () => {
    setIsContactClicked(false);
  };

  const logoArray = [
    reactLogo,
    tailwindcssLogo,
    reduxLogo,
    JSLogo,
    vercelLogo,
    reactDomLogo,
    formikLogo,
    viteLogo,
  ];

  return (
    <div className="flex justify-center" id="home">
      <div className="h-[1200px] md:h-[800px] max-w-[1800px] flex flex-col bg-neutral-900 w-full p-5 md:p-10 lg:p-20">
        <section className=" gap-10 md:pb-5 md:h-auto w-full flex flex-col lg:flex-row ">
          <div className=" font-bold tracking-widest flex flex-col h-full lg:text-4xl 0 text-slate-50 relative max-w-[300px]  w-full">
            <div className="flex flex-col">
              <h1 className="text:xl md:text-2xl tracking-[0.21em]">
                Hey! je m'appelle
              </h1>
              <h1 className="flex flex-col text-3xl md:text-5xl text-slate-500 tracking-widest">
                <span className="tracking-[0.44em]">ADJADI</span>
                <span className="">Axel</span>
              </h1>
            </div>
            <h1 className="text-3xl md:text-3xl ">
              developpeur web front, voici mon portfolio
            </h1>
          </div>

          <div className="flex flex-col justify-end">
            <h2 className="text-end text-neutral-100 opacity-70 md:px-10">
              Développeur web passionné, je me consacre à la création
              d'expériences numériques modernes et intuitives. Grâce à mon
              expertise en React et en technologies web, j'apporte des solutions
              innovantes et efficaces pour répondre aux besoins des
              utilisateurs.
            </h2>
            <section className="text-xs text-center text-neutral-100 w-full flex items-center h-24 sm:p-10 gap-3 ">
              <ul className="flex items-center justify-end  w-full gap-5 text-xs left-0o md:text-sm ">
                <li className="px-1 py-3 border rounded-full">responsive</li>
                <li className="px-1 py-3 border flex flex-shrink-0 rounded-full">
                  pixel design
                </li>
                <li className="px-1 py-3 border rounded-full">framework</li>
                <li className="px-1 py-3 border rounded-full">mobile-first</li>
              </ul>
            </section>
          </div>
        </section>
        <div className="h-full w-full flex flex-col gap-3 relative text-neutral-900 ">
          <div className="h-full w-full bg-neutral-100 bg-gradient-to-bl rounded-lg from-slate-500 to-slate-950"></div>
          <div className="w-full h-full flex gap-3 ">
            <span
              className={`rounded-xl bg-neutral-100 w-32 ${
                isClicked ? "w-full h-full top-0 left-0 absolute z-50" : "w-32 "
              }`}
            ></span>
            <section className="w-full px-5 font-bold py-5 rounded-xl bg-neutral-50 ">
              <div className="flex flex-col items-start justify-between md:items-center h-full md:flex-row">
                <span className="text-sm extraSmall:text-lg ">
                  Voici mon classement sur le site codewars.com (site
                  d'entraînement à l'algorithmie)
                </span>
                <img
                  src="https://www.codewars.com/users/Leclown/badges/micro"
                  alt="Codewars Badge"
                  className="h-8"
                />
              </div>
            </section>
          </div>
          <div className="w-full h-full flex gap-3 ">
            <section className="w-full flex justify-center h-full gap-5 flex-col px-5 rounded-xl bg-neutral-300 md:flex-row md:justify-between  md:items-center">
              <span className=" text-xs extraSmall:text-xl font-bold flex  md:text-start md:text-lg">
                Apprentissage autodidacte grâce à :{" "}
              </span>
              <div className="flex flex-col items-start md:pl-5 md:justify-center">
                <img src={fccLogo} alt="" className="max-h-8 object-contain" />
                <div className="flex flex-row-reverse items-center justify-end gap-3 flex-shrink-0">
                  <img
                    src={femLogo}
                    alt="front-end-mentor_logo"
                    className="h-3 extraSmall:h-8 md:h-3"
                  />
                  <h2 className=" text-xs extraSmall:text-xl shrink-0 md:text-[18px] font-semibold text-neutral-900">
                    Frontend Mentor
                  </h2>
                </div>
              </div>
            </section>
            <button
              className={`w-[40%] rounded-xl bg-neutral-200 flex items-center justify-center font-bold hover:scale-105 ${
                isContactClicked ? "absolute h-full w-full top-0 z-10" : ""
              }`}
              onMouseDown={handleContactClicked}
              onMouseLeave={handleMouseLeave}
              onDoubleClick={handleMouseLeave}
            >
              {!isContactClicked ? (
                <section
                  className="text-neutral-900 font-bold text-xl md:text-4xl"
                  id="contact"
                >
                  contact me
                </section>
              ) : (
                <section className="flex flex-col justify-center items-center h-full w-full gap-5 text-xs md:text-[14px] md:flex-row">
                  <div className=" h-full w-full">
                    <iframe
                      className="h-full w-full rounded-t-xl md:rounded-tr-none md:rounded-l-xl"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43214.45272002957!2d0.6536575045573301!3d47.394319692548585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fcd5b34a979a55%3A0x40dc8d705388430!2sTours!5e0!3m2!1sen!2sfr!4v1714412958007!5m2!1sen!2sfr"
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className=" p-8  flex flex-col gap-5 w-full">
                    <div className="flex gap-5 items-center ">
                      <img src={gmail} alt="" className="h-5" />
                      <a
                        href="mailto:mradjadi.a@gmail.com"
                        className="flex flex-col items-start hover:underline hover:underline-offset-2"
                      >
                        <span>Adresse mail :</span>
                        <span> mradjadi.a@gmail.com</span>
                      </a>
                    </div>
                    <div className="flex gap-5 items-center">
                      <img src={phoneLogo} alt="" className="h-5" />
                      <a
                        href="tel:+0676919215"
                        className="flex flex-col items-start hover:underline hover:underline-offset-2"
                      >
                        <span>numéro de téléphone :</span>
                        <span> 0676919215</span>
                      </a>
                    </div>
                    <div className="flex gap-5 items-center">
                      <img src={githubLogo} alt="" className="h-5" />
                      <a
                        className="text-start hover:underline hover:underline-offset-2"
                        href="https://github.com/ADJADI"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Cliquer pour visiter mon profil github
                      </a>
                    </div>
                    <div className="flex gap-5 items-center">
                      <img src={linkedinLogo} alt="" className="h-5" />
                      <a
                        href="https://www.linkedin.com/in/axel-adjadi-435071319/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-start hover:underline hover:underline-offset-2"
                      >
                        Cliquer pour visiter mon profil linkedin
                      </a>
                    </div>
                  </div>
                </section>
              )}
            </button>
          </div>
          <div className="bg-neutral-300 text-2xl font-bold text-neutral-900 w-full h-full rounded-xl flex  font-anton tracking-wider  relative">
            <Marquee>
              Besoin de plus de renseignement ? Vous appréciez mon profil ?
              N'hésitez pas à me contacter !
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
