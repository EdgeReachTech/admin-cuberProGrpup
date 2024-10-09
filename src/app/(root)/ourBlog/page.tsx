"use client";
import BlogUpdateCreate from "@/components/BlogUpdateCreate";
import { BlogsObj } from "@/lib/type";
import React, { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import { API_BASE_URL } from "@/api/api";
import withAdminAuth from "@/components/withAdminAuth";

const OurBlogPage = () => {
  const [blogs, setBlogs] = useState<BlogsObj[]>([]);
  const [showFields, setShowFields] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogsObj | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/blog`);
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const handleEdit = (blog: BlogsObj) => {
    setSelectedBlog(blog);
    setShowFields(true);
  };

  const handleDelete = async (blog: BlogsObj) => {
    try {
      await axios.delete(`${API_BASE_URL}/blog/${blog._id}`);
      setBlogs(blogs.filter((b) => b._id !== blog._id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Blog Post Submission Form</h1>
        <button
          onClick={() => {
            setSelectedBlog(null);
            setShowFields(true);
          }}
          className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <BiPlus /> Add New Blog
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by title..."
        className="mb-5 p-2 border border-gray-300 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <BlogUpdateCreate
        //@ts-expect-error erro
        blog={selectedBlog}
        showFields={showFields}
        setShowFields={setShowFields}
        //@ts-expect-error erro
        setIndex={setSelectedBlog}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredBlogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="font-bold text-xl">{blog.title}</h2>
              <p className="text-gray-700">{blog.content}</p>
              <div className="flex justify-between mt-3">
                <FaEdit
                  onClick={() => handleEdit(blog)}
                  className="text-blue-500 cursor-pointer hover:text-blue-700"
                  aria-label="Edit"
                />
                <FaTrash
                  onClick={() => handleDelete(blog)}
                  className="text-red-500 cursor-pointer hover:text-red-700"
                  aria-label="Delete"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withAdminAuth( OurBlogPage);
