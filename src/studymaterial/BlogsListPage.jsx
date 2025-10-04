import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from './blogData'; // Import the blog data
import { motion } from 'framer-motion';

const BlogsListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState(blogPosts);

  useEffect(() => {
    const results = blogPosts.filter(blog =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(results);
  }, [searchTerm]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-600 mb-6 text-center">Our Blog</h1>
        <div className="mb-10">
          <input
            type="text"
            placeholder="Search for a blog post..."
            className="w-full px-5 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredBlogs.map((blog) => (
            <motion.div key={blog.id} variants={itemVariants}>
              <Link 
                to={`/blog/${blog.slug}`}
                className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out overflow-hidden transform hover:-translate-y-1"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img 
                      className="h-48 w-full object-cover md:w-48"
                      src={blog.thumbnail} 
                      alt={blog.title} 
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-orange-500 font-semibold">Blog Post</div>
                    <h2 className="mt-2 text-2xl leading-tight font-bold text-black">{blog.title}</h2>
                    <p className="mt-4 text-gray-600">Click to read more about this topic.</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-10">
            <p className="text-xl text-gray-500">No blog posts found for "{searchTerm}".</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsListPage;
