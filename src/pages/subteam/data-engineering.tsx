import React from "react";
import Layout from "@/components/Layout";

import Subteam from "@/components/Subteam";

const members = [
  {
    title: "Subteam Lead",
    name: "Srisha Gaur",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Subteam Lead",
    name: "Bryant Park",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "David Han",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Mason Bulling",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "James Zhang",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Ryan Lee",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Lisa Li",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Chris Xu",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Pun Chaixanien",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Ryan Ho",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Abigail Kim",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Max Wang",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Skai Nzeuton",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Cindy Li",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Ella Schneyer",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Daniel Wang",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Tanvi Bhave",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Nathan Chu",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Leon Jiao",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Advisor",
    name: "Prof. Trummer",
    description: "Sample Text",
    img: "",
  },
];

const DataEngineeringSubteam: React.FC = () => {
  return (
    <>
      <Layout name="Data Engineering">
        <Subteam members={members} />
      </Layout>
    </>
  );
};

export default DataEngineeringSubteam;
