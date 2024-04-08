import { multiFormatDateString } from "../utils/time";

const Card = ({
  topic_id,
  thumbnail_url,
  title,
  authorName,
  created_time,
}: {
  topic_id: number;
  thumbnail_url: string | undefined;
  title: string;
  authorName: string;
  created_time: string;
}) => {
  return (
    <div
      key={topic_id}
      className="relative w-full h-40 p-3 bg-center bg-no-repeat bg-cover sm:w-1/2 xl:w-1/3 shrink-0 "
    >
      <div className="w-full h-full p-5 border shadow-lg border-boxborder rounded-2xl bg-background-primary">
        <div className="flex space-x-3">
          {thumbnail_url && (
            <img
              src={thumbnail_url}
              className="object-cover h-20 rounded-lg w-28 "
            />
          )}
          <p className="text-lg text-text-normal line-clamp-2 ">{title}</p>
        </div>
        <div className="absolute flex text-xs bottom-5 text-text-light text-text-normal text-opacity-65 ">
          <p>{authorName}</p>
          <p className="ml-3">{multiFormatDateString(created_time)}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
