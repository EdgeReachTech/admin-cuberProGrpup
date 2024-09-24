"use client";
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

const team = [
    { fName: 'Rwigara', lName: 'Rodrigue', post: 'P.Manager', },
    { fName: 'Rwigara', lName: 'Rodrigue', post: 'P.Manager', },
    { fName: 'Rwigara', lName: 'Rodrigue', post: 'P.Manager', },
    { fName: 'Rwigara', lName: 'Rodrigue', post: 'P.Manager', },
    { fName: 'Rwigara', lName: 'Rodrigue', post: 'P.Manager', },
    { fName: 'Rwigara', lName: 'Rodrigue', post: 'P.Manager', },
];

const TeamPage = () => {
    const handleEdit = (member) => {
        console.log('Edit member:', member);
    };

    const handleDelete = (member) => {
        console.log('Delete member:', member);
    };
    return (
        <div className="overflow-x-auto">
            <p className='pb-10 text-bold text-3xl ml-5 lg:ml-[350px]'>
                Team Updates
            </p>
            <table className="min-w-fit lg:min-w-[600px] bg-white border border-gray-200 mx-auto">
                <thead>
                    <tr className='bg-[#D9D9D9]'>
                        <th className="px-4 py-2 border-b font-semibold text-left">F.Name</th>
                        <th className="px-4 py-2 border-b font-semibold text-left">L.Name</th>
                        <th className="px-4 py-2 border-b font-semibold text-left">Post</th>
                        <th className="px-4 py-2 border-b font-semibold text-left">Edit</th>
                        <th className="px-4 py-2 border-b font-semibold text-left">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {team.map((member, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="px-4 py-2 border-b italic">{member.fName}</td>
                            <td className="px-4 py-2 border-b italic">{member.lName}</td>
                            <td className="px-4 py-2 border-b italic">{member.post}</td>
                            <td className="px-4 py-2 border-b">
                                <FaEdit
                                    onClick={() => handleEdit(member)}
                                    className="text-blue-500 cursor-pointer hover:text-blue-700"
                                    aria-label="Edit"
                                />
                            </td>
                            <td className="px-4 py-2 border-b">
                                <FaTrash
                                    onClick={() => handleDelete(member)}
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

export default TeamPage;