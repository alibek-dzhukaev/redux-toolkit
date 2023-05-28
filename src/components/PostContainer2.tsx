import { postAPI } from "../serices/PostService";
import { FC } from "react";
import PostItem from "./PostItem";

const PostContainer2: FC = () => {
  const { data: posts } = postAPI.useFetchAllPostsQuery(5);
  return (
    <div>
      <ul>{posts && posts.map((it) => <PostItem key={it.id} post={it} />)}</ul>
    </div>
  );
};

export default PostContainer2;
