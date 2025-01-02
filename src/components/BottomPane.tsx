import React, { useState } from "react";
import imageSrc from "../assets/sss.jpg"; 

export function BottomPane() {
  const imagesPerRow = 4; 
  const totalImages = 16; 

  const createMatrix = (): { id: number; src: string }[][] => {
    const matrix: { id: number; src: string }[][] = [];
    for (let i = 0; i < Math.ceil(totalImages / imagesPerRow); i++) {
      const row: { id: number; src: string }[] = [];
      for (let j = 0; j < imagesPerRow; j++) {
        const cellId = i * imagesPerRow + j + 1;
        if (cellId <= totalImages) {
          row.push({ id: cellId, src: imageSrc });
        }
      }
      matrix.push(row);
    }
    return matrix;
  };

  const [matrix] = useState(createMatrix());

  return (
    <div className="container mx-auto">
      <h6 className="text-lg font-semibold mb-4">Map Rotation</h6>
      <div className="grid grid-cols-4 gap-4">
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col">
            {row.map((cell) => (
              <div
                key={cell.id}
                className="relative group w-full h-40 rounded-md overflow-hidden"
              >
                <img
                  src={cell.src}
                  alt={`Game ${cell.id}`}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute bottom-0 left-0 w-full h-1/2 bg-black bg-opacity-70 text-white flex items-center justify-center text-sm font-semibold
                  group-hover:bg-white group-hover:text-black transition-all duration-300"
                >
                  Conquest large
                  operation locker {cell.id}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

