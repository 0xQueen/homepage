"use client";
import React, { useState } from "react";
import Button from "@/components/button/button";
import B64Dialog from "@/components/dialogs/b64";

const Base64: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isEncoded, setIsEncoded] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
    setIsEncoded(isBase64(e.target.value));
  };

  const handleEncrypt = () => {
    const encoded = btoa(inputText);
    setOutputText(encoded);
  };

  const handleDecrypt = () => {
    const decoded = atob(inputText);
    setOutputText(decoded);
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
        className="w-full md:w-96 h-12 md:h-20 border border-gray-600 rounded-md p-2 text-gray-200 bg-gray-700 focus:outline-none"
        placeholder="Input text"
        value={inputText}
        style={{ backgroundColor: "#2e1a27" }}
        onChange={handleInputChange}
      />
      <div className="flex justify-center space-x-4 mt-4">
        <Button variant="primary" onClick={handleEncrypt}>
          Encrypt
        </Button>
        <Button variant="primary" onClick={handleDecrypt}>
          Decrypt
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            setInputText("");
            setOutputText("");
          }}
        >
          Clear
        </Button>
      </div>
      <div className="mt-4">
        <p className="font-semibold mb-2 text-pink-400">Output:</p>
        <textarea
          className="w-full md:w-96 h-12 md:h-20 border border-gray-600 rounded-md p-2 text-gray-200 bg-gray-700 focus:outline-none"
          value={outputText}
          style={{ backgroundColor: "#2e1a27" }}
          readOnly
        />
      </div>
    </div>
  );
};

export default Base64;
