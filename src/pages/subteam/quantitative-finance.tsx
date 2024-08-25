import React from "react";
import Layout from "@/components/Layout";
import Subteam from "@/components/Subteam";

const members = [
  {
    title: "Subteam Lead",
    name: "Jerry Chen",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Subteam Lead",
    name: "Elizabeth Song",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Tanvi Kapoor",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Rohan Shah",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Jacob Mayourian",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Noah Plant",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Alkiviades Boukas",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Adona Anteneh",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Samara Silverman",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Alyssa Serebrenik",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Andrew Chen",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Arya Patel",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Cody Torogovnik",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Jerry Wang",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Iram Liu",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Corey Wang",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Claudiu Illoi",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Peter Ha",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Nancy Chen",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Santiago Palacios",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Peter Zheng",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Eileen Wu",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Aarsha Joshi",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Aarav Khanna",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Johnson Lin",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Advisor",
    name: "Prof. Haym Hirsh",
    description: "Sample Text",
    img: "",
  },
];

const QuantitativeFinanceSubteam: React.FC = () => {
  return (
    <>
      <Layout name="Quantitative Finance">
        <Subteam members={members} />
      </Layout>
    </>
  );
};

export default QuantitativeFinanceSubteam;
