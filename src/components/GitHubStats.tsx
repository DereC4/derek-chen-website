import React, { useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

// https://grubersjoe.github.io/react-github-calendar/#/?user=derec4
export default function ContritionStats() {
  const [selectedYear, setSelectedYear] = useState(2026);
  const years = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019];
  const username = "DereC4";

  return (
    <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-slate-900 text-white rounded-xl max-w-4xl mx-auto">
      
      <GitHubCalendar 
          username={username} 
          year={selectedYear}
          colorScheme="dark"
          theme={{
            dark: ['#1e293b', '#0e7490', '#06b6d4', '#22d3ee', '#67e8f9'],
          }}
        />

    </div>
  );
}