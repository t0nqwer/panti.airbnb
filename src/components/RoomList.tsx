import { useState, useEffect, useRef } from "react";
import { roomLists } from "../constants";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { updateRoomSelect } from "../state/roomselect/roomselectSlice";

const RoomList = () => {
  const dispatch = useDispatch();
  const roomSelect = useSelector((state: RootState) => state.roomSelect.value);
  const carousel = useRef<HTMLInputElement>(null);
  const [maxScrollWidth, setMaxScrollWidth] = useState(0);
  const [position, setPosition] = useState(300);

  const handleScroll = (direction: string) => {
    if (direction === "prev") {
      carousel.current?.scrollTo({
        left: carousel.current?.scrollLeft - 300,
        behavior: "smooth",
      });
      setPosition((prevState) => prevState - 300);
    } else {
      carousel.current?.scrollTo({
        left: carousel.current?.scrollLeft + 300,
        behavior: "smooth",
      });
      setPosition((prevState) => prevState + 300);
    }
  };

  useEffect(() => {
    if (carousel.current) {
      setMaxScrollWidth(carousel.current.scrollWidth - screen.width + 300);
    }
  }, []);

  return (
    <div className="relative mt-10 ">
      <h1 className="text-3xl font-bold divpadding text-text-highlight textPosition ">
        เลือกห้อง
      </h1>
      <div className="relative divpadding ">
        {position > 0 + 300 && (
          <div className="absolute hidden transform -translate-y-1/2 left-5 top-1/2 md:block ">
            <button
              className="flex items-center justify-center p-2 rounded-full bg-opacity-10 leftright"
              onClick={() => handleScroll("prev")}
            >
              <FaAngleLeft className="text-2xl text-white" />
            </button>
          </div>
        )}

        {position <= maxScrollWidth && (
          <div className="absolute hidden transform -translate-y-1/2 right-5 top-1/2 md:block">
            <button
              className="flex items-center justify-center p-2 rounded-full bg-opacity-10 leftright"
              onClick={() => handleScroll("next")}
            >
              <FaAngleRight className="text-2xl text-white" />
            </button>
          </div>
        )}

        <div
          ref={carousel}
          id="roomList"
          className="z-0 flex overflow-hidden overflow-x-auto select-none scroll-smooth snap-x snap-mandatory touch-pan-x scrollbar-hide"
        >
          {roomLists.map((room) => {
            return (
              <button
                key={room.id}
                className={roomSelect === room.id ? "room roomselect" : "room"}
                disabled={roomSelect === room.id}
                onClick={() => dispatch(updateRoomSelect(room.id))}
              >
                <img
                  src={room.imageUrl}
                  alt={room.name}
                  className="w-10 h-10 "
                />
                <p className=" text-text-normal">{room.name}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoomList;
