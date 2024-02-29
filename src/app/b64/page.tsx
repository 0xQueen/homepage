import React from "react";
import Base64 from "@/components/cards/b64";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "queen's b64",
};

const B64: React.FC = () => {
  return <Base64 />;
};

export default B64;
