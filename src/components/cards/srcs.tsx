"use client";
import React, { useState } from "react";
import TipDialog from "../dialogs/srcs";
import Trusted from "../links/trusted";
import Untrusted from "../links/untrusted";

const Card: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="custom-container text-center bg-gray-700 rounded-lg shadow-md p-4 mt-4 w-3/4 md:w-1/2 lg:w-1/3">
        <div>
          <div className="flex items-center justify-center">
            <div className="ml-1">
              <TipDialog />
            </div>
          </div>
        </div>
        <span className="text-gray-300 font-semibold px-4 py-2 block">
          Trusted
        </span>
        <div
          className="bg-2e1a27 bg-opacity-70 rounded-lg p-2 p-3 rounded-lg ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
          style={{ backgroundColor: "#2e1a27", border: "none" }}
        >
          <div className={`toggle-section`}>
            <div
              style={{
                maxHeight: "8rem",
                overflowY: "auto",
                cursor: "default",
                scrollBehavior: "smooth",
              }}
            >
              <Trusted />
            </div>
          </div>
        </div>

        <span className="text-gray-300 font-semibold px-4 py-2 block">
          Not Trusted
        </span>
        <div
          className="bg-2e1a27 bg-opacity-70 rounded-lg p-2 p-3 rounded-lg ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
          style={{ backgroundColor: "#2e1a27", border: "none" }}
        >
          <div className={`toggle-section`}>
            <div
              style={{
                maxHeight: "8rem",
                overflowY: "auto",
                cursor: "default",
                scrollBehavior: "smooth",
              }}
            >
              <Untrusted />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
