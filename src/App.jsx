import { useState, useEffect } from "react";
import HomePage from "./components/Home/HomePage";
import About from "./components/pages/About/About";
import Navbar from "./common/Navbar";
import Projects from "./components/pages/projects/Projects";
import Services from "./components/pages/Services/Services";
import "./styles/App.css";
import Preloader from "./utils/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isContactClicked, setIsContactClicked] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  console.log(isContactClicked);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);
  return (
    <div
      className={`bg-neutral-900 flex flex-col gap-20 ${
        isOpen ? "h-screen overflow-hidden" : ""
      }`}
    >
      {isLoading && <Preloader />}
      {!isLoading && (
        <Navbar
          setIsContactClicked={setIsContactClicked}
          isOpen={isOpen}
          handleToggle={handleToggle}
          setIsOpen={setIsOpen}
        />
      )}
      <main>
        {!isLoading && (
          <HomePage
            setIsContactClicked={setIsContactClicked}
            isContactClicked={isContactClicked}
          />
        )}
        {!isLoading && <About />}
        {!isLoading && <Projects />}
        {!isLoading && <Services />}
      </main>
    </div>
  );
}

export default App;
