import React, { useState } from "react";
import { PostData } from "@/interfaces";
import PostModal from "@/components/common/PostModal";

const posts: PostData[] = [
  { id: 1, title: "First Post", body: "This is the first post." },
  { id: 2, title: "Second Post", body: "This is the second post." },
];

const PostsPage: React.FC = () => {
  const [post, setPost] = useState<PostData | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (post: PostData) => {
    setPost(post);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setPost(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="space-y-3">
        {posts.map((p) => (
          <li
            key={p.id}
            className="p-4 border rounded-md cursor-pointer hover:bg-gray-100"
            onClick={() => openModal(p)}
          >
            {p.title}
          </li>
        ))}
      </ul>

      <PostModal isOpen={isOpen} onClose={closeModal} post={post} />
    </div>
  );
};

export default PostsPage;
