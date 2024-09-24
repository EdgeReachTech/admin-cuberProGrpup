"use client";
import BlogUpdateCreate from '@/components/BlogUpdateCreate';
import { BlogsObj } from '@/lib/type';
import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi';
import { FaEdit, FaTrash } from 'react-icons/fa';

const blogs: BlogsObj[] = [
    { title: "Title 1", content: "content 1", image: "image1.png", media: "media 1", id: 1 },
    { title: "Title 2", content: "content 2", image: "image2.png", media: "media 2", id: 2 },
    { title: "Title 3", content: "content 3", image: "image3.png", media: "media 3", id: 3 },
    { title: "Title 4", content: "content 4", image: "image4.png", media: "media 4", id: 4 },
    { title: "Title 5", content: "content 5", image: "image5.png", media: "media 5", id: 5 },
    { title: "Title 6", content: "content 6", image: "image6.png", media: "media 6", id: 6 }
];

const OurBlogPage = () => {
    const [showFields, setShowFields] = useState(false);
    const [index, setIndex] = useState(0);

    const blog = blogs.filter((blog) => blog.id === index)[0];

    const handleEdit = (blog: BlogsObj) => {
        console.log('Edit blog:', blog);
    };

    const handleDelete = (blog: BlogsObj) => {
        console.log('Delete blog:', blog);
    };
    return (
        <div className="overflow-x-auto">
            <div className='pb-10 flex flex-col space-y-4 md:flex-row w-full justify-between items-center px-20'>
                <p className='text-bold text-3xl'>Blog Post Submission Form</p>
                <button onClick={() => setShowFields(true)} className='bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer'><BiPlus /> Add New Blog</button>
            </div>

            <BlogUpdateCreate blog={blog} index={index} showFields={showFields} setShowFields={setShowFields} setIndex={setIndex} />

            <table className="min-w-fit overflow-x-auto lg:min-w-[600px] bg-white border border-gray-200 mx-auto">
                <thead>
                    <tr className='bg-[#D9D9D9]'>
                        <th className="px-4 py-2 border-b font-semibold text-left">Name</th>
                        <th className="px-4 py-2 border-b font-semibold text-left">Content</th>
                        <th className="px-4 py-2 border-b font-semibold text-left">Edit</th>
                        <th className="px-4 py-2 border-b font-semibold text-left">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="px-4 py-2 border-b italic text-nowrap">{blog.title}</td>
                            <td className="px-4 py-2 border-b italic text-nowrap">{blog.content}</td>
                            <td className="px-4 py-2 border-b">
                                <FaEdit
                                    onClick={() => {
                                        handleEdit(blog);
                                        setIndex(blog.id);
                                        setShowFields(true);
                                    }}
                                    className="text-blue-500 cursor-pointer hover:text-blue-700"
                                    aria-label="Edit"
                                />
                            </td>
                            <td className="px-4 py-2 border-b">
                                <FaTrash
                                    onClick={() => handleDelete(blog)}
                                    className="text-red-500 cursor-pointer hover:text-red-700"
                                    aria-label="Delete"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OurBlogPage;