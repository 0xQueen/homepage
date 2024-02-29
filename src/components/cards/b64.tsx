"use client";
import React, { useState } from "react";
import Button from "@/components/button/button";

const Base64: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [encodedText, setEncodedText] = useState("");
  const [decodedText, setDecodedText] = useState("");

  const handleEncode = () => {
    const encoded = btoa(inputText);
    setEncodedText(encoded);
  };

  const handleDecode = () => {
    const decoded = atob(inputText);
    setDecodedText(decoded);
  };

  return (
    <div className="custom-container bg-gray-800 text-white rounded-lg p-6 shadow-md">
      <h1 className="text-2xl font-semibold mb-4 text-center">Base64</h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <textarea
          className="flex-1 border border-gray-600 rounded-md p-2 text-gray-200"
          placeholder="Enter text to encode or decode"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          style={{ backgroundColor: "#2e1a27" }}
        />

        <div className="flex flex-col space-y-4">
          <Button variant="primary" onClick={handleEncode}>
            Encode
          </Button>
          <Button variant="primary" onClick={handleDecode}>
            Decode
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
        <div className="flex-1">
          <p className="font-semibold mb-2 text-pink-400">Encoded:</p>
          <textarea
            className="border border-gray-600 rounded-md p-2 w-full bg-gray-700 text-gray-200"
            value={encodedText}
            style={{ backgroundColor: "#2e1a27" }}
            readOnly
          />
        </div>
        <div className="flex-1">
          <p className="font-semibold mb-2 text-pink-400">Decoded:</p>
          <textarea
            className="border border-gray-600 rounded-md p-2 w-full bg-gray-700 text-gray-200"
            value={decodedText}
            style={{ backgroundColor: "#2e1a27" }}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Base64;
