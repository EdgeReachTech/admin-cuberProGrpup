"use client";
import { ProjectUpdateCreateProps } from "@/lib/type"; // Adjusted import
import { useEffect, useState } from "react";
import { BiLeftArrow } from "react-icons/bi";
import axios from "axios";
import { API_BASE_URL } from "@/api/api";

const ProjectUpdateCreate = ({
  project,
  showFields,
  setShowFields,
  setIndex,
}: ProjectUpdateCreateProps) => {
  const [input, setInput] = useState({
    title: "",
    content: "",
    image: "",
  });

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (project) {
       
        await axios.put(`${API_BASE_URL}/project/${project._id}`, input); 
      } else {
        await axios.post(`${API_BASE_URL}/project`, input); 
      }
      setShowFields(false);
      setIndex(null); 
    } catch (error) {
      console.error("Error saving project:", error);
    }
  };

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (project) {
      setInput({
        title: project.title || "",
        content: project.content || "",
        image: project.image || "",
      });
    } else {
      setInput({
        title: "",
        content: "",
        image: "",
      });
    }
  }, [project]);

  return (
    <>
      {showFields && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
          <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex items-center justify-between mb-5">
              <button
                onClick={() => setShowFields(false)}
                className="text-gray-700"
              >
                <BiLeftArrow /> Back
              </button>
              <h1 className="font-bold text-xl">
                {project ? "Update Project" : "Create Project"}
              </h1>
            </div>
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="block font-bold mb-1">Project Title</label>
                <input
                  type="text"
                  name="title"
                  value={input.title}
                  required
                  onChange={handleOnChange}
                  className="block w-full px-3 py-2 bg-gray-200 rounded"
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Content</label>
                <textarea
                  name="content"
                  value={input.content}
                  required
                  onChange={handleOnChange}
                  className="block w-full px-3 py-2 bg-gray-200 rounded"
                  rows={4}
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={input.image}
                  required
                  onChange={handleOnChange}
                  className="block w-full px-3 py-2 bg-gray-200 rounded"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-800 text-white py-2 rounded"
              >
                {project ? "Update" : "Create"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectUpdateCreate;
