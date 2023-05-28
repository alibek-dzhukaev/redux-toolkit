import React, { FC } from "react";
import { IPost } from "../models/IPost";

interface IProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem: FC<IProps> = ({ post, remove, update }) => {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  const handleUpdate = () => {
    const title = prompt() || "";
    update({ ...post, title });
  };

  return (
    <li className="post" onClick={handleUpdate}>
      {post.id}. {post.title}
      <button onClick={handleRemove}>Delete</button>
    </li>
  );
};

export default PostItem;
