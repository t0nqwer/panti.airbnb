import {
  roomPostList,
  HiztLizt,
  foodPost,
  isolatedPost,
  bangrukPost,
  chalermchaiPost,
} from "../../constants/index";
export const searchFilter = (searchText: string) => {
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
  const result = uniqueArray.filter((post) => {
    return post.title.toLowerCase().includes(searchText.toLowerCase());
  });
  return result;
};
