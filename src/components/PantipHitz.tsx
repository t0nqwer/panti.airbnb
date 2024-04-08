import Card from "./Card";
import { HiztLizt } from "../constants";

const PantipHitz = () => {
  return (
    <div className="relative mt-10 divpadding ">
      <h1 className="text-3xl font-bold text-center text-text-highlight sm:text-left">
        Pantip Hitz
      </h1>
      <p className="mt-1 text-xs text-center text-text-normal sm:text-left">
        กระทู้ฮิตติดเทรนด์ทุก 10 นาที
      </p>
      <div className="flex flex-wrap w-full mt-3">
        {HiztLizt.map((roomPost, index) => {
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

export default PantipHitz;
