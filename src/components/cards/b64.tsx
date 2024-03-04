"use client";
import React, { useState } from "react";
import { FaLock, FaUnlock } from "react-icons/fa";
import Button from "@/components/button/button";
import B64Dialog from "@/components/dialogs/b64";

const Base64: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isEncoded, setIsEncoded] = useState(false);
  const [isValidBase64, setIsValidBase64] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
    setIsEncoded(isBase64(e.target.value));
    setIsValidBase64(true);
  };

  const handleEncrypt = () => {
    const encoded = btoa(inputText);
    setOutputText(encoded);
  };

  const handleDecrypt = () => {
    try {
      const decoded = atob(inputText);
      setOutputText(decoded);
    } catch (error) {
      setIsValidBase64(false);
    }
  };

  const isBase64 = (str: string) => {
    try {
      return btoa(atob(str)) === str;
    } catch (err) {
      return false;
    }
  };

  return (
    <div className="custom-container bg-gray-800 text-white rounded-lg p-6 shadow-md">
      <div className="flex items-center justify-center mb-4">
        <B64Dialog />
      </div>
      <textarea
        className={`w-full md:w-96 h-20 border border-gray-600 rounded-md p-2 text-gray-200 bg-gray-700 focus:outline-none ${
          !isValidBase64 ? "border-red-500" : ""
        }`}
        placeholder="Input text"
        value={inputText}
        style={{ overflow: "auto", backgroundColor: "#2e1a27", resize: "none" }}
        onChange={handleInputChange}
        readOnly={!isValidBase64}
      />
      <div className="flex justify-center space-x-4 mt-4">
        <Button variant="primary" onClick={handleEncrypt} disabled={!inputText}>
          <FaLock className="inline-block mr-1" /> Encrypt
        </Button>
        <Button variant="primary" onClick={handleDecrypt} disabled={!isEncoded}>
          <FaUnlock className="inline-block mr-1" /> Decrypt
        </Button>
      </div>
      {!isValidBase64 && (
        <p className="text-red-500 text-xs mt-2">Invalid Base64 input.</p>
      )}
      <div className="mt-4">
        <p className="font-semibold mb-2 text-pink-400">Output:</p>
        <textarea
          className="w-full md:w-96 h-20 border border-gray-600 rounded-md p-2 text-gray-200 bg-gray-700 focus:outline-none"
          value={outputText}
          style={{
            overflow: "auto",
            backgroundColor: "#2e1a27",
            resize: "none",
          }}
          readOnly
        />
      </div>
    </div>
  );
};

export default Base64;
