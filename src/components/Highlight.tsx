import { useState, useEffect, useRef } from "react";

import { HighlightList } from "../constants";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Highlight = () => {
  const carousel = useRef<HTMLInputElement>(null);

  const [maxScrollWidth, setMaxScrollWidth] = useState(0);

  const [position, setPosition] = useState(300);

  const handleScroll = (direction: string) => {
    if (direction === "prev") {
      carousel.current?.scrollTo({
        left: carousel.current?.scrollLeft - 344,
        behavior: "smooth",
      });
      setPosition((prevState) => prevState - 344);
    } else {
      carousel.current?.scrollTo({
        left: carousel.current?.scrollLeft + 344,
        behavior: "smooth",
      });
      setPosition((prevState) => prevState + 344);
    }
  };

  useEffect(() => {
    if (carousel.current) {
      setMaxScrollWidth(carousel.current.scrollWidth - screen.width + 344);
    }
  }, []);

  return (
    <div className="relative py-10 divpadding ">
      <h1 className="text-3xl font-bold text-text-highlight textPosition">
        Highlights
      </h1>
      {position > 0 + 344 && (
        <div className="absolute transform -translate-y-1/2 left-5 top-1/2 ">
          <button
            className="flex items-center justify-center p-2 rounded-full bg-opacity-10 leftrighthighlight"
            onClick={() => handleScroll("prev")}
          >
            <FaAngleLeft className="text-4xl text-white" />
          </button>
        </div>
      )}
      {position <= maxScrollWidth && (
        <div className="absolute transform -translate-y-1/2 right-5 top-1/2">
          <button
            className="flex items-center justify-center p-2 rounded-full bg-opacity-10 leftrighthighlight"
            onClick={() => handleScroll("next")}
          >
            <FaAngleRight className="text-4xl text-white" />
          </button>
        </div>
      )}
      <div
        ref={carousel}
        className="z-0 flex gap-6 mt-5 overflow-hidden overflow-x-auto select-none scroll-smooth snap-x snap-mandatory touch-pan-x scrollbar-hide "
      >
        {HighlightList.map((highlight, index) => (
          <div key={index} className=" w-80 shrink-0">
            <a href="#">
              <img
                src={highlight.imageUrl}
                alt={highlight.text}
                className="object-contain rounded-3xl"
              />
              <p className="px-3 text-xl text-left cursor-pointer line-clamp-2 h-14 text-text-normal ">
                {highlight.text}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlight;
