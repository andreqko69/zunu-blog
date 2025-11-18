import { useState, useEffect } from "react";
import PostItem from "./PostItem";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "DELETE",
      });

      await fetchPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="list bg-base-100 rounded-box shadow-sm card-body max-h-[500px]">
      <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Post list</li>

      <input className="input input-bordered w-full max-w-xs" />

      {posts.map((post) => (
        <PostItem key={post.id} id={post.id} title={post.title} body={post.body} onDelete={handleDelete} />
      ))}
    </div>
  );
}
