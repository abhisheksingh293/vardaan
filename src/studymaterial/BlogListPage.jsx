import React from "react";
import { useNavigate } from "react-router-dom";

const BlogListPage = () => {
  const navigate = useNavigate();
  // Dummy blog data (should match StudyMaterial)
  const blogPosts = [
    {
      id: 1,
      title: "How to Study Effectively",
      thumbnail:
        "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      title: "Top 10 Science Tips",
      thumbnail:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      title: "Exam Stress? Try These Tricks!",
      thumbnail:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fff7ed] p-6 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg border border-orange-200 p-8">
        <h1 className="text-4xl font-bold text-orange-600 mb-8 text-center">Vardaan Blog & Study Tips</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((blog) => (
            <div key={blog.id} className="rounded-xl border shadow p-4 hover:shadow-lg transition bg-[#fff7ed]">
              <img src={blog.thumbnail} alt={blog.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-2xl font-semibold text-orange-600 mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-2">A short description about "{blog.title}" goes here. You can update this with real summaries later.</p>
              <button
                className="mt-2 px-4 py-2 bg-orange-500 text-white rounded font-bold hover:bg-orange-600 transition"
                onClick={() => navigate(`/studymaterial/blog/${encodeURIComponent(blog.title)}`)}
              >
                Read Blog
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
