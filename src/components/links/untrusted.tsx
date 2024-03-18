"use client";
import React, { useState, useEffect } from "react";

const untrustedLinks: React.FC = () => {
  const [untrustedLinks, setuntrustedLinks] = useState<string[]>([
    "1377x.to",
    "IGG-Games.com",
    "steamunlocked.com",
    "anjogames.com",
    "oceanofgames.com",
    "skidrowreloaded.com",
    "skidrowempress.com",
    "skidrowcodex.net",
  ]);

  const [newlyAddedSources, setNewlyAddedSources] = useState<string[]>([]);
  const newSources = [
    "1337x.to",
    "thepiratebay.org",
    "kickasstorrents.com",
    "oceanofgames.com",
    "*EVERY* RARBG",
    "getintopc.com",
    "yasdl.com",
    "torrentlite.com",
    "crackedfully.com",
  ];

  useEffect(() => {
    const updatedLinks = [...untrustedLinks];
    const updatedNewSources = [...newlyAddedSources];

    newSources.forEach((source) => {
      if (
        !updatedLinks.includes(source) &&
        !updatedNewSources.includes(source)
      ) {
        updatedLinks.push(source);
        updatedNewSources.push(source);
      }
    });

    setuntrustedLinks(updatedLinks);
    setNewlyAddedSources(updatedNewSources);
  }, [untrustedLinks]);

  return (
    <div className="bg-2e1a27 rounded-lg p-2">
      <ul className="list-disc pl-4 text-left">
        {untrustedLinks.map((link, index) => (
          <li key={index} className="text-gray-300">
            {link}{" "}
            {newlyAddedSources.includes(link) && (
              <span className="new bg-purple-600 text-white text-xs ml-0.2 px-2 py-0.9 rounded-full">
                NEW!
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default untrustedLinks;
