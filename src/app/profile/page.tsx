import React from "react";
import Card from "@/components/cards/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "queen's profile",
};

const Profile: React.FC = () => {
  return (
    <div>
      <Card />
    </div>
  );
};

export default Profile;
