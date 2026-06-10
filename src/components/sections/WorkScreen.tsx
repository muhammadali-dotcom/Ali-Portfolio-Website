"use client";

import React, { useState } from "react";

export const WorkScreen: React.FC = () => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#030504] text-white">
      {!showProjects ? (
        <button
          onClick={() => setShowProjects(true)}
          className="px-6 py-3 bg-emerald-accent hover:bg-emerald-accent/80 text-black font-bold rounded-md shadow-lg transition"
        >
          Go to My Work
        </button>
      ) : (
        <div className="w-full max-w-4xl p-4">
          {/* Placeholder for project showcase */}
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p>This is where your portfolio projects would be displayed.</p>
        </div>
      )}
    </section>
  );
};

export default WorkScreen;
