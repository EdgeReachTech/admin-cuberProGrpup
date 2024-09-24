"use client";
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

const blogs = [
    { name: 'Blog 1' },
    { name: 'Blog 2' },
    { name: 'Blog 3' },
    { name: 'Blog 4' },
    { name: 'Blog 5' },
    { name: 'Blog 6' },
];

const OurBlogPage = () => {
    const handleEdit = (blog) => {
        console.log('Edit blog:', blog);
    };

    const handleDelete = (blog) => {
        console.log('Delete blog:', blog);
    };
    return (
        <div className="overflow-x-auto">
            <p className='pb-10 text-bold text-3xl ml-5 lg:ml-[350px]'>
                Blog Post Submission Form
            </p>
            <table className="min-w-full lg:min-w-[600px] bg-white border border-gray-200 mx-auto">
                <thead>
                    <tr className='bg-[#D9D9D9]'>
                        <th className="px-4 py-2 border-b font-semibold text-left">Name</th>
                        <th className="px-4 py-2 border-b font-semibold text-left">Edit</th>
                        <th className="px-4 py-2 border-b font-semibold text-left">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="px-4 py-2 border-b italic">{blog.name}</td>
                            <td className="px-4 py-2 border-b">
                                <FaEdit
                                    onClick={() => handleEdit(blog)}
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