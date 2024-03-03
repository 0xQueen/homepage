"use client";
import React from "react";

const UntrustedLinks: React.FC = () => {
  const untrustedLinks = [
    "1377x.to",
    "IGG-Games.com",
    "steamunlocked.com",
    "anjogames.com",
    "oceanofgames.com",
    "skidrowreloaded.com",
    "skidrowempress.com",
    "skidrowcodex.net",
  ];

  return (
    <div className="bg-2e1a27 rounded-lg p-2">
      <ul className="list-disc pl-4 text-left">
        {untrustedLinks.map((link, index) => (
          <li key={index} className="text-gray-300">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UntrustedLinks;
