"use client";
import { API_BASE_URL } from "@/api/api";
import withAdminAuth from "@/components/withAdminAuth";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

// Define the type for statistics data
interface Statistics {
  _id: string;
  page: string;
  location?: string; // This is optional
  language?: string; // This is optional
  theme?: string; // This is optional
  createdAt: string;
}

const StatisticsPage: React.FC = () => {
  const [statistics, setStatistics] = useState<Statistics[]>([]);
  const [mostVisitedPages, setMostVisitedPages] = useState<any[]>([]);
  const [languageData, setLanguageData] = useState<any[]>([]);
  const [themeData, setThemeData] = useState<any[]>([]);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/statistics`);
        if (!response) {
          throw new Error("Network response was not ok");
        }

        setStatistics(response.data);
        processStatistics(response.data);
      } catch (error) {
        console.error("Error fetching statistics data:", error);
        toast.error("Failed to fetch statistics. Check internet connection.");
      }
    };

    fetchStatistics();
  }, []);

  const processStatistics = (data: Statistics[]) => {
    // Count visits by page
    const pageCounts = data.reduce((acc: any, stat) => {
      if (stat.page) {
        // Check if page is defined
        acc[stat.page] = (acc[stat.page] || 0) + 1;
      }
      return acc;
    }, {});

    // Create data for most visited pages
    setMostVisitedPages(
      Object.entries(pageCounts).map(([page, count]) => ({ page, count }))
    );

    // Count visits by language
    const languageCounts = data.reduce((acc: any, stat) => {
      if (stat.language) {
        // Check if language is defined
        acc[stat.language] = (acc[stat.language] || 0) + 1;
      }
      return acc;
    }, {});
    setLanguageData(
      Object.entries(languageCounts).map(([lang, count]) => ({
        language: lang,
        count,
      }))
    );

    // Count visits by theme
    const themeCounts = data.reduce((acc: any, stat) => {
      if (stat.theme) {
        // Check if theme is defined
        acc[stat.theme] = (acc[stat.theme] || 0) + 1;
      }
      return acc;
    }, {});
    setThemeData(
      Object.entries(themeCounts).map(([theme, count]) => ({ theme, count }))
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Statistics Dashboard</h1>

      <div className="py-10">
        <h2 className="text-xl font-semibold mb-2">Most Visited Pages</h2>
        <BarChart width={600} height={300} data={mostVisitedPages}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="page" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>

      <div className="py-10">
        <h2 className="text-xl font-semibold mb-2">Language Usage</h2>
        <BarChart width={600} height={300} data={languageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="language" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
      </div>

      <div className="py-10">
        <h2 className="text-xl font-semibold mb-2">Theme Usage</h2>
        <BarChart width={600} height={300} data={themeData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="theme" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#ffc658" />
        </BarChart>
      </div>
    </div>
  );
};

export default withAdminAuth(StatisticsPage);
