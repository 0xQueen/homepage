import React from "react";
import { Metadata } from "next";
import Container from "@/components/cards/home";

export const metadata: Metadata = {
  title: "queen's <3",
};

const Home: React.FC = () => {
  return <Container />;
};

export default Home;
