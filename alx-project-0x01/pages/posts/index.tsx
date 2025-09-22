import React from "react";
import PostCard from "../../components/common/PostCard";

const Posts: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Posts</h1>
      <PostCard title="First Post" description="This is my first post!" />
    </div>
  );
};

export default Posts;
