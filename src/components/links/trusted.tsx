"use client";
import React, { useState, useEffect } from "react";

const TrustedLinks: React.FC = () => {
  const [trustedLinks, setTrustedLinks] = useState<string[]>([
    /* "1337x.to", BYE BYE!*/
    /* "thepiratebay.org", BYE BYE!*/
    "dodi-repacks.site",
    "fitgirl-repacks.site",
    "gamedrive.org",
    "steamrip.com",
    "repack-mechanics.com",
    "gog-games.to",
  ]);

  const [newlyAddedSources, setNewlyAddedSources] = useState<string[]>([]);
  const newSources = [
    "gamebounty.world",
    "dodi-repacks.download",
    "elamigos.site",
    "kaoskrew.org",
    "cs.rin.ru",
    "rutracker.org",
    "online-fix.me",
    "torrentgalaxy.to",
    "torrentleech.com",
    "rlsbb.ru",
    "dlfox.com",
    "ovagames.com",
    "rihnogames.com",
    "campucalitv.com",
    "fmoviesz.to",
    "hurawatch.bz",
  ];

  useEffect(() => {
    const updatedLinks = [...trustedLinks];
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

    setTrustedLinks(updatedLinks);
    setNewlyAddedSources(updatedNewSources);
  }, []);

  return (
    <div className="bg-2e1a27 rounded-lg p-2">
      <ul className="list-disc pl-4 text-left">
        {trustedLinks.map((link, index) => (
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

export default TrustedLinks;
