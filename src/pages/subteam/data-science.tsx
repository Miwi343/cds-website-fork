import React from "react";
import Layout from "@/components/Layout";
import Subteam from "@/components/Subteam";

const members = [
  {
    title: "Subteam Lead",
    name: "Skyler Shapiro",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Subteam Lead",
    name: "Mericel Tao",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Samuel Meisner",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Emerald Liu",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Travis Zhang",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Varun Gande",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Laura Gong",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Imani Finkley",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Michael Ngo",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Katie Zelvin",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Eric Guo",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Eric Chen",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Vivian Chen",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Darren Key",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Mahitha Penmetsa",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Audrey Wang",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Jason Zheng",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Deniz Boloni-Turgut",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Jakob Silver",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Cade Jin",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Anya Yerramilli",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Theodore Jeliazkov",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Tamara Kasikovic",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Amrith Kumaar",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Kayla Shan",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Srivatsa Kundurthy",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Joyce Yang",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Temi Adebowale",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Eric Do",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Member",
    name: "Minh Pham",
    description: "Sample Text",
    img: "",
  },
  {
    title: "Advisor",
    name: "Prof. Kilian Weinberger",
    description: "Sample Text",
    img: "",
  },
];

const DataScienceSubteam: React.FC = () => {
  return (
    <>
      <Layout name="Data Science">
        <Subteam members={members} />
      </Layout>
    </>
  );
};

export default DataScienceSubteam;
