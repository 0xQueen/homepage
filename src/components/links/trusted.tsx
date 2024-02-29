"use client";
import React from "react";

const TrustedLinks: React.FC = () => {
  const trustedLinks = [
    "1337x.to",
    "dodi-repacks.site",
    "fitgirl-repacks.site",
    "gamedrive.org",
    "steamrip.com",
  ];

  return (
    <div className="bg-2e1a27 rounded-lg p-2">
      <ul className="list-disc pl-4 text-left">
        {trustedLinks.map((link, index) => (
          <li key={index} className="text-gray-300">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrustedLinks;
