import React from "react";

type PostCardProps = {
  title: string;
  description: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, description }) => {
  return (
    <div className="border rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default PostCard;
