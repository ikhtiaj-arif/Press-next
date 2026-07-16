import { cacheLife } from "next/cache";

export const getBlogs = async () => {
  "use cache";
  cacheLife("hours");
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postData = await posts.json();
  console.log(postData);
  return postData;
};
