import React from "react";
import { PostData } from "@/interfaces";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: PostData | null;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, post }) => {
  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="mb-4">{post.body}</p>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PostModal;
