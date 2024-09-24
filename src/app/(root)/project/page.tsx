"use client";
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

const projects = [
    { name: 'Project 1' },
    { name: 'Project 2' },
    { name: 'Project 3' },
    { name: 'Project 4' },
    { name: 'Project 5' },
    { name: 'Project 6' },
];

const Project = () => {
    const handleEdit = (project) => {
        console.log('Edit project:', project);
    };

    const handleDelete = (project) => {
        console.log('Delete project:', project);
    };
    return (
        <div className="overflow-x-auto">
            <p className='pb-10 text-bold text-3xl ml-5 lg:ml-[350px]'>
                Project Submission Form
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
                    {projects.map((project, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="px-4 py-2 border-b italic">{project.name}</td>
                            <td className="px-4 py-2 border-b">
                                <FaEdit
                                    onClick={() => handleEdit(project)}
                                    className="text-blue-500 cursor-pointer hover:text-blue-700"
                                    aria-label="Edit"
                                />
                            </td>
                            <td className="px-4 py-2 border-b">
                                <FaTrash
                                    onClick={() => handleDelete(project)}
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

export default Project;