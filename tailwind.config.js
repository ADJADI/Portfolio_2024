// import tailwindTextStroke from "@designbycode/tailwindcss-text-stroke";
/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  },
  options: {
    safelist: ["h-[400px]"], // Include specific classes in purge whitelist
  },

  theme: {
    extend: {
      screens: {
        extraSmall: "350px",
      },
      transitionDuration: {
        1000: "1000ms",
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
        5000: "5000ms",
        6000: "6000ms",
      },
      height: {
        "100px": "100px",
        "200px": "200px",
        "300px": "300px",
        "400px": "400px",
        "500px": "500px",
        "600px": "600px",
        "700px": "700px",
        "800px": "800px",
        "900px": "900px",
        "1000px": "1000px",
        "1100px": "1100px",
        "1200px": "1200px",
        "1300px": "1300px",
        "1400px": "1400px",
        "1500px": "1500px",
        "1600px": "1600px",
        "1700px": "1700px",
        "1800px": "1800px",
      },
      fontFamily: {
        anton: ["Anton", "sans serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },

      gridTemplateRows: {
        thinBorder: "15% 70% 15%",
        thinerBorder: "15% 35% 35% 15%",
        smallOne: "33% 30% 27%",
        smallTwo: "40% 30% 30%",
        smallThree: "29% 34% 37%",
        smallFour: "14% 38% 38%",
      },
      gridTemplateColumns: {
        mobile: "45% 45% 10%",
        thinBorder: "12% 84% 4%",
        left: "70% 30%",
        right: "30% 70%",
      },
      boxShadow: {
        glow: "0 0 60px 30px #fff, 0 0 100px 60px #f0f, 0 0 140px 90px #0ff",
      },
      keyframes: {
        fadeIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        bouncex1: {
          "0%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
        zoom: {
          from: {
            transform: "scale(0.6)",
          },
          to: {
            transform: "scale(1)",
          },
        },
        zoomOut: {
          from: {
            transform: "scale(1.4)",
          },
          to: {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease, transform 0.5s ease",
        bouncex1: "bounce 2s",
        zoom: "zoom ease-out 1.5s",
        zoomOut: "zoomOut ease-out 1.5s",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "group-hover"],
    },
  },
  plugins: [require("@designbycode/tailwindcss-text-stroke")],
};
