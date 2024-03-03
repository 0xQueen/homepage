import React from "react";
import Card from "@/components/cards/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "queen's profile",
  description: "queen's website",
};

const Profile: React.FC = () => {
  return (
    <div>
      <Card />
    </div>
  );
};

export default Profile;
