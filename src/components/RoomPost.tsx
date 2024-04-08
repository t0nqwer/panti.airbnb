import React from "react";
import { roomPostList } from "../constants";
import { multiFormatDateString } from "../utils/time";

const RoomPost = () => {
  return (
    <div className="flex flex-wrap w-full px-20 ">
      {roomPostList.map((roomPost, index) => {
        if (index > 8) return null;
        return (
          <div
            key={roomPost.topic_id}
            className="relative w-1/3 h-40 p-3 bg-center bg-no-repeat bg-cover shrink-0 "
          >
            <div className="w-full h-full p-5 border shadow-xl border-boxborder rounded-2xl">
              <div className="flex space-x-3">
                {roomPost.thumbnail_url && (
                  <img
                    src={roomPost.thumbnail_url}
                    className="object-cover h-20 rounded-lg w-28 "
                  />
                )}
                <h1 className="text-xl text-text-normal line-clamp-3 ">
                  {roomPost.title}
                </h1>
              </div>
              <div className="absolute flex text-xs bottom-5 text-text-light text-text-normal text-opacity-65 ">
                <p>{roomPost.author.name}</p>
                <p className="ml-3">
                  {multiFormatDateString(roomPost.created_time)}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex justify-center w-full ">
        <a
          href="#"
          className="px-5 py-2 mt-5 text-sm rounded-lg text-text-normal bg-background-harder "
        >
          ดูทั้งหมด
        </a>
      </div>
    </div>
  );
};

export default RoomPost;
