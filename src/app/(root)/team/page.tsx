"use client";
import TeamUpdateCreate from '@/components/TeamUpdateCreate';
import { TeamMember } from '@/lib/type';
import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi';
import { FaEdit, FaTrash } from 'react-icons/fa';

const team: TeamMember[] = [
    { name: 'Blog 1', role: 'Manager 1', image: "image.png", linkedInProfile: "www.linkedIn.com", id: 1 },
    { name: 'Blog 2', role: 'Manager 2', image: "image.png", linkedInProfile: "www.linkedIn.com", id: 2 },
    { name: 'Blog 3', role: 'Manager 3', image: "image.png", linkedInProfile: "www.linkedIn.com", id: 3 },
    { name: 'Blog 4', role: 'Manager 4', image: "image.png", linkedInProfile: "www.linkedIn.com", id: 4 }
];

const TeamPage = () => {
    const [showFields, setShowFields] = useState(false);
    const [index, setIndex] = useState(0);

    const teamMember = team.filter((member) => member.id === index)[0];

    const handleEdit = (member: TeamMember) => {
        console.log('Edit member:', member);
    };

    const handleDelete = (member: TeamMember) => {
        console.log('Delete member:', member);
    };


    return (
        <div className="overflow-x-auto">
            <div className='pb-10 flex flex-col space-y-4 md:flex-row w-full justify-between items-center px-20'>
                <p className='text-bold text-3xl'>Team Updates</p>
                <button onClick={() => setShowFields(true)} className='bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer'><BiPlus /> Add New Team</button>
            </div>

            <TeamUpdateCreate teamMember={teamMember} index={index} showFields={showFields} setShowFields={setShowFields} setIndex={setIndex} />

            <table className="min-w-fit overflow-x-auto lg:min-w-[600px] bg-white border border-gray-200 mx-auto">
                <thead>
                    <tr className='bg-[#D9D9D9]'>
                        <th className="px-4 py-2 border-b font-semibold text-left">Name</th>
                        <th className="px-4 py-2 border-b font-semibold text-left">Role</th>
                        <th className="px-4 py-2 border-b font-semibold text-left">Linkedin Profile</th>
                        <th className="px-4 py-2 border-b font-semibold text-left">Edit</th>
                        <th className="px-4 py-2 border-b font-semibold text-left">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {team.map((member, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="px-4 py-2 border-b italic">{member.name}</td>
                            <td className="px-4 py-2 border-b italic">{member.role}</td>
                            <td className="px-4 py-2 border-b italic">{member.linkedInProfile}</td>
                            <td className="px-4 py-2 border-b">
                                <FaEdit
                                    onClick={() => {
                                        handleEdit(member);
                                        setIndex(member.id);
                                        setShowFields(true);
                                    }}
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