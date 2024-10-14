"use client";
import {  TestimonyObj } from "@/lib/type"; // Adjusted to use ProjectObj
import React, { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import { API_BASE_URL } from "@/api/api";
import withAdminAuth from "@/components/withAdminAuth";
import TestimonyUpdateCreate from "@/components/testimonyUpdateCreate";
import { toast } from "react-toastify";

const ProjectPage = () => {
  const [testimony, setTestimony] = useState<TestimonyObj[]>([]);
  const [showFields, setShowFields] = useState(false);
  const [selectedTestimony, setSelectedTestimony] = useState<TestimonyObj | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchtestimony = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/testimony`); // Adjusted API endpoint
        setTestimony(response.data);
      } catch (error) {
        console.error("Error fetching testimony:", error);
      }
    };
    fetchtestimony();
  }, []);

  const handleEdit = (project: TestimonyObj) => {
    setSelectedTestimony(project);
    setShowFields(true);
  };

  const handleDelete = async (project: TestimonyObj) => {
    try {
      await axios.delete(`${API_BASE_URL}/testimony/${project._id}`); // Adjusted API endpoint
      setTestimony(testimony.filter((p) => p._id !== project._id));
      toast.success('testimony deleted')
    } catch (error) {
      toast.error("failed to  delete testomony");
      console.error("Error deleting project:", error);
    }
  };

  const filteredProjects = testimony.filter((testimony) =>
    testimony.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Testimony Management</h1>
        <button
          onClick={() => {
            setSelectedTestimony(null);
            setShowFields(true);
          }}
          className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <BiPlus /> Add New Testimony
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by Name..."
        className="mb-5 p-2 border border-gray-300 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <TestimonyUpdateCreate
        testimony={selectedTestimony}
        showFields={showFields}
        setShowFields={setShowFields}
        //@ts-expect-error error
        setIndex={setSelectedTestimony}
        index={0}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((test) => (
          <div
            key={test._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={test.image}
              alt={test.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h1 className="font-bold text-xl text-teal-500 ">{test.name}</h1>
              <h2 className="font-bold text-lg text-blue-600">{test.company}</h2>
              <h2 className="font-bold text-sm">{test.role}</h2>
              <p  className="text-gray-700 h-64 overflow-y-auto">{test.content}</p>
              <div className="flex justify-between mt-3">
                <FaEdit
                  onClick={() => handleEdit(test)}
                  className="text-blue-500 cursor-pointer hover:text-blue-700"
                  aria-label="Edit"
                />
                <FaTrash
                  onClick={() => handleDelete(test)}
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
