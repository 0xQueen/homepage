import React from "react";
import Card from "@/components/cards/srcs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "queen's sources",
};

const srcs: React.FC = () => {
  return <Card />;
};

export default srcs;
