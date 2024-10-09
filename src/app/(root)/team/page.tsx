"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiPlus, BiLeftArrow } from "react-icons/bi";
import { FaEdit, FaTrash } from "react-icons/fa";
import { API_BASE_URL } from "@/api/api";
import withAdminAuth from "@/components/withAdminAuth";



// Type definitions
interface SocialMedia {
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  facebook?: string;
}

interface Education {
  school: string;
  degree: string;
  course: string;
  completion: string;
}

interface Experience {
  institution: string;
  role: string;
  time: string;
}

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image: string;
  socialMedia: SocialMedia;
  education: Education[];
  experience: Experience[];
}

// TeamUpdateCreate component
const TeamUpdateCreate: React.FC<{
  teamMember: TeamMember | null;
  onClose: () => void;
  onSave: () => void;
}> = ({ teamMember, onClose, onSave }) => {
  const [input, setInput] = useState<Omit<TeamMember, "_id">>({
    name: "",
    role: "",
    image: "",
    socialMedia: { instagram: "", twitter: "", linkedin: "", facebook: "" },
    education: [{ school: "", degree: "", course: "", completion: "" }],
    experience: [{ institution: "", role: "", time: "" }],
  });

  useEffect(() => {
    if (teamMember) {
      setInput(teamMember);
    }
  }, [teamMember]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSocialMediaChange = (
    platform: keyof SocialMedia,
    value: string
  ) => {
    setInput((prev) => ({
      ...prev,
      socialMedia: { ...prev.socialMedia, [platform]: value },
    }));
  };

  const handleEducationChange = (
    index: number,
    field: keyof Education,
    value: string
  ) => {
    setInput((prev) => ({
      ...prev,
      education: prev.education.map((edu, i) =>
        i === index ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const handleExperienceChange = (
    index: number,
    field: keyof Experience,
    value: string
  ) => {
    setInput((prev) => ({
      ...prev,
      experience: prev.experience.map((exp, i) =>
        i === index ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const addEducation = () => {
    setInput((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { school: "", degree: "", course: "", completion: "" },
      ],
    }));
  };

  const addExperience = () => {
    setInput((prev) => ({
      ...prev,
      experience: [...prev.experience, { institution: "", role: "", time: "" }],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (teamMember) {
        await axios.put(`${API_BASE_URL}/team/${teamMember._id}`, input);
      } else {
        await axios.post(`${API_BASE_URL}/team`, input);
      }
      onSave();
      onClose();
    } catch (error) {
      console.error("Error saving team member:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <BiLeftArrow size={24} />
          </button>
          <h2 className="text-2xl font-bold">
            {teamMember ? "Update Member" : "Add New Member"}
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <input
              type="text"
              name="role"
              value={input.role}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              value={input.image}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Social Media
            </h3>
            {(Object.keys(input.socialMedia) as Array<keyof SocialMedia>).map(
              (platform) => (
                <div key={platform} className="mb-2">
                  <label className="block text-sm font-medium text-gray-700 capitalize">
                    {platform}
                  </label>
                  <input
                    type="url"
                    value={input.socialMedia[platform]}
                    onChange={(e) =>
                      handleSocialMediaChange(platform, e.target.value)
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              )
            )}
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Education
            </h3>
            {input.education.map((edu, index) => (
              <div
                key={index}
                className="mb-4 p-4 border border-gray-200 rounded-md"
              >
                {Object.keys(edu).map((field) => (
                  <div key={field} className="mb-2">
                    <label className="block text-sm font-medium text-gray-700 capitalize">
                      {field}
                    </label>
                    <input
                      type="text"
                      value={edu[field as keyof Education]}
                      onChange={(e) =>
                        handleEducationChange(
                          index,
                          field as keyof Education,
                          e.target.value
                        )
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                ))}
              </div>
            ))}
            <button
              type="button"
              onClick={addEducation}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Education
            </button>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Experience
            </h3>
            {input.experience.map((exp, index) => (
              <div
                key={index}
                className="mb-4 p-4 border border-gray-200 rounded-md"
              >
                {Object.keys(exp).map((field) => (
                  <div key={field} className="mb-2">
                    <label className="block text-sm font-medium text-gray-700 capitalize">
                      {field}
                    </label>
                    <input
                      type="text"
                      value={exp[field as keyof Experience]}
                      onChange={(e) =>
                        handleExperienceChange(
                          index,
                          field as keyof Experience,
                          e.target.value
                        )
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                ))}
              </div>
            ))}
            <button
              type="button"
              onClick={addExperience}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Experience
            </button>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {teamMember ? "Update Member" : "Add Member"}
          </button>
        </form>
      </div>
    </div>
  );
};

// Main TeamPage component
const TeamPage: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [showUpdateCreate, setShowUpdateCreate] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const response = await axios.get<TeamMember[]>(`${API_BASE_URL}/team`);
      setTeam(response.data);
    } catch (error) {
      console.error("Error fetching team:", error);
    }
  };

  const handleEdit = (member: TeamMember) => {
    setSelectedMember(member);
    setShowUpdateCreate(true);
  };

  const handleDelete = async (member: TeamMember) => {
   
      try {
        await axios.delete(`${API_BASE_URL}/team/${member._id}`);
        setTeam(team.filter((m) => m._id !== member._id));
      } catch (error) {
        console.error("Error deleting team member:", error);
      }
    
  };

  const filteredTeam = team.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Team Management</h1>
        <button
          onClick={() => {
            setSelectedMember(null);
            setShowUpdateCreate(true);
          }}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <BiPlus className="inline-block mr-2" /> Add New Member
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by name..."
        className="w-full p-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeam.map((member) => (
          <div
            key={member._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h2>
              <p className="text-gray-600">{member.role}</p>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-700">Education</h3>
                <ul className="list-disc list-inside">
                  {member.education.map((edu, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      {edu.degree} in {edu.course}, {edu.school} (
                      {edu.completion})
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-700">Experience</h3>
                <ul className="list-disc list-inside">
                  {member.experience.map((exp, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      {exp.role} at {exp.institution} ({exp.time})
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleEdit(member)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaEdit className="inline-block mr-1" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(member)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrash className="inline-block mr-1" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showUpdateCreate && (
        <TeamUpdateCreate
          teamMember={selectedMember}
          onClose={() => setShowUpdateCreate(false)}
          onSave={fetchTeam}
        />
      )}
    </div>
  );
};

export default withAdminAuth(TeamPage);
