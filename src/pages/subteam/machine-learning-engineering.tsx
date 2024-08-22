import React from "react";
import Layout from "@/components/Layout";

import Subteam from "@/components/Subteam";

const members = [
  {
    title: "Subteam Lead",
    name: "Andy He",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Subteam Lead",
    name: "Mei Lin Hu",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Arnav Agrawal",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Andrew Chang",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Neha Kulshreshtha",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Edward Gu",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Everett Lee",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Vincent Fong",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Andrea Siby",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Takuma Osaka",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Dan Wei Zuo",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Alice Um",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Tanisha Kore",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Kenneth Chiem",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Yunoo Kim",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Benson Zhang",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Peter Favero",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Samantha Vaca",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Tanish Tyagi",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Sabrina Ning",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Minhaj Fahad",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Advisor",
    name: "Prof. Christopher De Sa",
    description: "Sample Text",
    img: "",
  },
];

const MachineLearningEngineeringSubteam: React.FC = () => {
  return (
    <>
      <Layout name="Machine Learning Engineering">
        <Subteam members={members} />
      </Layout>
    </>
  );
};

export default MachineLearningEngineeringSubteam;
