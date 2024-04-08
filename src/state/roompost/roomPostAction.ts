import {
  roomPostList,
  HiztLizt,
  foodPost,
  isolatedPost,
  bangrukPost,
  chalermchaiPost,
} from "../../constants/index";

export const random = () => {
  const allaray = [
    ...roomPostList,
    ...HiztLizt,
    ...foodPost,
    ...isolatedPost,
    ...bangrukPost,
    ...chalermchaiPost,
  ];
  const removeDuplicate = new Map(allaray.map((item) => [item.topic_id, item]));
  const uniqueArray = [...removeDuplicate.values()];
  const result = uniqueArray.sort(() => Math.random() - 0.5).slice(8);
  return result;
};
