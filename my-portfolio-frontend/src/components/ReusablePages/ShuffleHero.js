import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import shuffleHeroData from "../../data/shuffleHeroData.json";

const squareData = shuffleHeroData.images;

const ShuffleHero = () => {
  return (
    <div className="mx-auto  w-full sm:w-5/6 ">
      <div 
        className=" bg-white/5 rounded-2xl
        text-pink-500 font-bold mb-4 text-center text-4xl "
      >GALLERY</div>
      <div className="h-[200px] 2xsm:h-[330px] xsm:h-[450px] sm:h-[500px] md:h-[600px] lg:h-[400px] xl:h-[600px] overflow-hidden">
        <ShuffleGrid />
      </div>
    </div>
  );
};

// shuffle method that shuffles all the images randomly BOTH vertically and horizontally
// const shuffle = (array) => {
//   let currentIndex = array.length,
//     randomIndex;

//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   return array;
// };

// shuffle method that shuffles all the images randomly ONLY horizontally
const shuffle = (array) => {
  const totalImages = array.length;
  const sqrtTotalImages = Math.ceil(Math.sqrt(totalImages));

  const newArray = [...array];

  for (let row = 0; row < sqrtTotalImages; row++) {
    for (let col = 0; col < sqrtTotalImages; col++) {
      const currentIdx = row * sqrtTotalImages + col;
      if (currentIdx < totalImages) {
        const randomRow = row;
        const randomCol = Math.floor(Math.random() * sqrtTotalImages);
        const randomIdx = randomRow * sqrtTotalImages + randomCol;

        // Swap elements in the same row
        [newArray[currentIdx], newArray[randomIdx]] = [
          newArray[randomIdx],
          newArray[currentIdx],
        ];
      }
    }
  }

  return newArray;
};

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
    >
      <img
        src={sq.src}
        alt={`Square ${sq.id}`}
        className="w-full h-full object-cover"
      />
    </motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    const shuffleSquares = () => {
      setSquares(generateSquares());
      timeoutRef.current = setTimeout(shuffleSquares, 3500);
    };

    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);

    // Add setSquares to the dependency array
  }, [setSquares]);

  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-1 h-full">
      {squares.map((sq) => sq)}
    </div>
  );
};


export default ShuffleHero;