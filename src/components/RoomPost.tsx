import { foodPost } from "../constants";
import { RootState } from "../state/store";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateRoomPost } from "../state/roompost/roompostSlice";

const RoomPost = () => {
  const dispatch = useDispatch();
  const roomPost = useSelector((state: RootState) => state.roomPost.value);
  const roomSelect = useSelector((state: RootState) => state.roomSelect.value);
  useEffect(() => {
    dispatch(updateRoomPost());
  }, [roomSelect]);

  return (
    <div className="flex flex-wrap w-full divpadding ">
      {roomPost.map((roomPost, index) => {
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
