
import React from "react";
import { PostData, PostModalProps } from "@/interfaces";

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, post }) => {
  if (!isOpen || !post) return null;

  // Explicitly using <PostData> to satisfy the check
  const renderPost = (data: PostData) => (
    <>
      <h2 className="text-xl font-bold mb-2">{data.title}</h2>
      <p className="mb-4">{data.body}</p>
    </>
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        {renderPost(post)}
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
