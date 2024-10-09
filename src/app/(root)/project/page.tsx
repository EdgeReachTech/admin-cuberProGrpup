"use client";
import ProjectUpdateCreate from "@/components/ProjectUpdateCreate";
import { ProjectObj } from "@/lib/type"; // Adjusted to use ProjectObj
import React, { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import { API_BASE_URL } from "@/api/api";
import withAdminAuth from "@/components/withAdminAuth";

const ProjectPage = () => {
  const [projects, setProjects] = useState<ProjectObj[]>([]);
  const [showFields, setShowFields] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectObj | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/project`); // Adjusted API endpoint
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const handleEdit = (project: ProjectObj) => {
    setSelectedProject(project);
    setShowFields(true);
  };

  const handleDelete = async (project: ProjectObj) => {
    try {
      await axios.delete(`${API_BASE_URL}/project/${project._id}`); // Adjusted API endpoint
      setProjects(projects.filter((p) => p._id !== project._id));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Project Management</h1>
        <button
          onClick={() => {
            setSelectedProject(null);
            setShowFields(true);
          }}
          className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <BiPlus /> Add New Project
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by title..."
        className="mb-5 p-2 border border-gray-300 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ProjectUpdateCreate
      //@ts-expect-error eror
        project={selectedProject}
        showFields={showFields}
        setShowFields={setShowFields}
        //@ts-expect-error error
        setIndex={setSelectedProject} 
        index={0} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <div
            key={project._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="font-bold text-xl">{project.title}</h2>
              <p className="text-gray-700">{project.content}</p>
              <div className="flex justify-between mt-3">
                <FaEdit
                  onClick={() => handleEdit(project)}
                  className="text-blue-500 cursor-pointer hover:text-blue-700"
                  aria-label="Edit"
                />
                <FaTrash
                  onClick={() => handleDelete(project)}
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

export default withAdminAuth(ProjectPage);
