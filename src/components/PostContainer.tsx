import { postAPI } from "../serices/PostService";
import { FC, useState } from "react";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";

const PostContainer: FC = () => {
  const [limit, setLimit] = useState(100);
  const { data: posts } = postAPI.useFetchAllPostsQuery(limit);
  const [createPost] = postAPI.useCreatePostMutation();
  const [updatePost] = postAPI.useUpdatePostMutation();
  const [deletePost] = postAPI.useDeletePostMutation();

  const handleCreate = async () => {
    const title = prompt("Enter post title");
    await createPost({ title, body: title } as IPost);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };
  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  return (
    <div>
      <div>
        <button onClick={handleCreate}>Add new post</button>
      </div>
      <ul className="post_list">
        {posts &&
          posts.map((it) => (
            <PostItem
              remove={handleRemove}
              update={handleUpdate}
              key={it.id}
              post={it}
            />
          ))}
      </ul>
    </div>
  );
};

export default PostContainer;
