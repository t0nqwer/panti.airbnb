import React from "react";
import Card from "./Card";
import { roomPostList } from "../constants";

const PantipRealtime = () => {
  return (
    <div className="relative px-20 mt-10 ">
      <h1 className="text-3xl font-bold text-text-highlight ">
        Pantip Realtime
      </h1>
      <p className="mt-1 text-xs text-text-normal">
        กระทู้ที่มีคนเปิดอ่านมากในขณะนี้ อัปเดตทุกนาที
      </p>
      <div className="flex flex-wrap w-full mt-3">
        {roomPostList.map((roomPost, index) => {
          if (index > 8) return null;
          return (
            <Card
              key={roomPost.topic_id}
              topic_id={roomPost.topic_id}
              thumbnail_url={roomPost.thumbnail_url}
              title={roomPost.title}
              authorName={roomPost.author.name}
              created_time={roomPost.created_time}
            />
          );
        })}
      </div>
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

export default PantipRealtime;
