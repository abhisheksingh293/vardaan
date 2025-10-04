import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from './blogData'; // Import the blog data

const BlogPage = () => {
  const { slug } = useParams(); // The parameter is the slug

  // Find the blog post by its slug
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-red-600">Blog Post Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 mt-20">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-96 object-cover"
        />
        <div className="p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">{post.title}</h1>
          <div 
            className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
