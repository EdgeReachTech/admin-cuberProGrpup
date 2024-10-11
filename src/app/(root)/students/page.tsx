"use client";
import { API_BASE_URL } from "@/api/api";
import withAdminAuth from "@/components/withAdminAuth";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

// Define the type for the student data
interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: string;
  address: string;
  photo: string;
  diploma: string;
  nid: string;
  status: string; // New field for status
  createdAt: string; // New field for registration date
}

const StudentRegistrationPage: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [filter, setFilter] = useState<string>("all"); // For filtering by status

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/students`);
        if (!response) {
          throw new Error("Network response was not ok");
        }

        setStudents(response.data);
        setFilteredStudents(response.data); // Initialize with all students
      } catch (error) {
        console.error("Error fetching student data:", error);
        toast.error("Failed to fetch students. Check internet connection.");
      }
    };

    fetchStudents();
  }, []);

  // Filter students based on status
  useEffect(() => {
    if (filter === "all") {
      setFilteredStudents(students);
    } else {
      setFilteredStudents(
        students.filter((student) => student.status === filter)
      );
    }
  }, [filter, students]);

  // Group students by registration date
  const groupedStudents = filteredStudents.reduce((acc, student) => {
    const date = new Date(student.createdAt).toLocaleDateString(); // Format date
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(student);
    return acc;
  }, {} as Record<string, Student[]>);

  return (
    <div>
      <div className="py-4">
        <label className="mr-2">Filter by status:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded"
        >
          <option value="all">All</option>
          <option value="accepted">Accepted</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div className="overflow-x-auto py-10">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border-b border-gray-300 p-4">Photo</th>
              <th className="border-b border-gray-300 p-4">Full Name</th>
              <th className="border-b border-gray-300 p-4">Email</th>
              <th className="border-b border-gray-300 p-4">Phone Number</th>
              <th className="border-b border-gray-300 p-4">Gender</th>
              <th className="border-b border-gray-300 p-4">Address</th>
              <th className="border-b border-gray-300 p-4">Status</th>
              <th className="border-b border-gray-300 p-4">Documents</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(groupedStudents).map(([date, students]) => (
              <React.Fragment key={date}>
                <tr>
                  <td colSpan={8} className="font-bold text-left p-2">
                    {date}
                  </td>
                </tr>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td className="border-b border-gray-300 p-4">
                      <Image
                        src={student.photo}
                        alt={student.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </td>
                    <td className="border-b border-gray-300 p-4">
                      {student.name}
                    </td>
                    <td className="border-b border-gray-300 p-4">
                      {student.email}
                    </td>
                    <td className="border-b border-gray-300 p-4">
                      {student.phone}
                    </td>
                    <td className="border-b border-gray-300 p-4">
                      {student.gender}
                    </td>
                    <td className="border-b border-gray-300 p-4">
                      {student.address}
                    </td>
                    <td className="border-b border-gray-300 p-4">
                      {student.status}
                    </td>
                    <td className="border-b border-gray-300 p-4">
                      <div>
                        <a
                          href={student.diploma}
                          className="text-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Diploma
                        </a>
                      </div>
                      <div>
                        <a
                          href={student.nid}
                          className="text-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ID
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default withAdminAuth(StudentRegistrationPage);
