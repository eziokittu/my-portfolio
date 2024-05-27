import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import shuffleHeroData from "../../data/shuffleHeroData.json";

const squareData = shuffleHeroData.images;

const ShuffleHero = () => {
  return (
    <div className="mx-auto w-5/6 lg:w-full ">
      <div className="overflow-hidden">
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
    // <div className="grid grid-cols-4 grid-rows-4 gap-1 h-full">
    //   {squares.map((sq) => sq)}
    // </div>
    <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;

// {
//   "images" : [
//     {
//       "id": 1,
//       "src": "./images/myImages/img_1.jpg"
//     },
//     {
//       "id": 2,
//       "src": "./images/myImages/img_2.jpg"
//     },
//     {
//       "id": 3,
//       "src": "./images/myImages/img_3.jpg"
//     },
//     {
//       "id": 4,
//       "src": "./images/myImages/img_4.jpg"
//     },
//     {
//       "id": 5,
//       "src": "./images/myImages/img_5.jpg"
//     },
//     {
//       "id": 6,
//       "src": "./images/myImages/img_6.jpg"
//     },
//     {
//       "id": 7,
//       "src": "./images/myImages/img_9.jpg"
//     },
//     {
//       "id": 8,
//       "src": "./images/otherImages/img_sister.jpg"
//     },
//     {
//       "id": 9,
//       "src": "./images/otherImages/img_cat2.jpg"
//     },
//     {
//       "id": 10,
//       "src": "./images/myImages/img_10.jpg"
//     },
//     {
//       "id": 11,
//       "src": "./images/myImages/img_11.jpg"
//     },
//     {
//       "id": 12,
//       "src": "./images/myImages/img_12.jpg"
//     },
//     {
//       "id": 13,
//       "src": "./images/myImages/img_13.jpg"
//     },
//     {
//       "id": 14,
//       "src": "./images/myImages/img_14.jpg"
//     },
//     {
//       "id": 15,
//       "src": "./images/myImages/img_15.jpg"
//     },
//     {
//       "id": 16,
//       "src": "./images/myImages/img_16.jpg"
//     }
//   ]
// }