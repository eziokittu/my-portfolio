import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import shuffleHeroData from "../../Data/profile/shuffleHeroData.json";

const squareData = shuffleHeroData.images;

const ShuffleHero = () => {
  return (
    <div>
      <div 
        className=" bg-blue-800/25
        text-lime-500 font-bold mb-4 text-center text-4xl "
      >Some Pictures</div>
      <ShuffleGrid />
    </div>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3500);
  };

  return (
    <div 
      className="
      grid grid-cols-4 grid-rows-4 gap-1
      h-[200px] 2xsm:h-[300px] xsm:h-[400px] sm:h-[600px] md:h-[600px] lg:h-[400px] xl:h-[600px]"
    >
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;