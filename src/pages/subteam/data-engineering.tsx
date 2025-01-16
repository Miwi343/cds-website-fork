import React from "react";
import Layout from "@/components/Layout";

import Subteam from "@/components/Subteam";

import SrishaImg from "../../assets/img/members/SrishaGaur.jpg";
import BryantImg from "../../assets/img/members/BryantPark.jpg";
import DavidImg from "../../assets/img/members/DavidHan.jpg";
import MasonImg from "../../assets/img/members/MasonBulling.jpg";
import JamesImg from "../../assets/img/members/default.jpg";
import RyanLeeImg from "../../assets/img/members/RyanLee.jpg";
import LisaImg from "../../assets/img/members/default.jpg";
import ChrisImg from "../../assets/img/members/ChrisXu.jpg";
import PunImg from "../../assets/img/members/default.jpg";
import RyanHoImg from "../../assets/img/members/default.jpg";
import AbigailImg from "../../assets/img/members/AbigailKim.jpg";
import MaxImg from "../../assets/img/members/MaxWang.jpg";
import BensonImg from "../../assets/img/members/BensonZhang.jpg";
import SkaiImg from "../../assets/img/members/SkaiNzeuton.jpg";
import CindyImg from "../../assets/img/members/CindyLi.jpg";
import EllaImg from "../../assets/img/members/EllaSchneyer.jpg";
import DanielImg from "../../assets/img/members/DanielWang.jpg";
import TanviImg from "../../assets/img/members/default.jpg";
import NathanImg from "../../assets/img/members/default.jpg";
import ClaudiuIlloiImg from "../../assets/img/members/ClaudiuIllioi.jpg";
import SabrinaImg from "../../assets/img/members/default.jpg";
import LeonImg from "../../assets/img/members/default.jpg";
import ProfTrummerImg from "../../assets/img/members/default.jpg";

const members = [
  {
    title: "Subteam Lead",
    name: "Srisha Gaur",
    description: "Sample Text",
    img: SrishaImg.src,
  },
  {
    title: "Subteam Lead",
    name: "Bryant Park",
    description: "Sample Text",
    img: BryantImg.src,
  },
  {
    title: "Member",
    name: "David Han",
    description: "Sample Text",
    img: DavidImg.src,
  },
  {
    title: "Member",
    name: "Mason Bulling",
    description: "Sample Text",
    img: MasonImg.src,
  },
  {
    title: "Member",
    name: "James Zhang",
    description: "Sample Text",
    img: JamesImg.src,
  },
  {
    title: "Member",
    name: "Ryan Lee",
    description: "Sample Text",
    img: RyanLeeImg.src,
  },
  {
    title: "Member",
    name: "Lisa Li",
    description: "Sample Text",
    img: LisaImg.src,
  },
  {
    title: "Member",
    name: "Chris Xu",
    description: "Sample Text",
    img: ChrisImg.src,
  },
  {
    title: "Member",
    name: "Pun Chaixanien",
    description: "Sample Text",
    img: PunImg.src,
  },
  {
    title: "Member",
    name: "Ryan Ho",
    description: "Sample Text",
    img: RyanHoImg.src,
  },
  {
    title: "Member",
    name: "Abigail Kim",
    description: "Sample Text",
    img: AbigailImg.src,
  },
  {
    title: "Member",
    name: "Max Wang",
    description: "Sample Text",
    img: MaxImg.src,
  },
  {
    title: "Member",
    name: "Benson Zhang",
    description: "Sample Text",
    img: BensonImg.src,
  },
  {
    title: "Member",
    name: "Skai Nzeuton",
    description: "Sample Text",
    img: SkaiImg.src,
  },
  {
    title: "Member",
    name: "Cindy Li",
    description: "Sample Text",
    img: CindyImg.src,
  },
  {
    title: "Member",
    name: "Ella Schneyer",
    description: "Sample Text",
    img: EllaImg.src,
  },
  {
    title: "Member",
    name: "Daniel Wang",
    description: "Sample Text",
    img: DanielImg.src,
  },
  {
    title: "Member",
    name: "Tanvi Bhave",
    description: "Sample Text",
    img: TanviImg.src,
  },
  {
    title: "Member",
    name: "Nathan Chu",
    description: "Sample Text",
    img: NathanImg.src,
  },
  {
    title: "Member",
    name: "Claudiu Illoi",
    description: "Sample Text",
    img: ClaudiuIlloiImg.src,
  },
  {
    title: "Member",
    name: "Sabrina Ning",
    description: "Sample Text",
    img: SabrinaImg.src,
  },
  {
    title: "Member",
    name: "Leon Jiao",
    description: "Sample Text",
    img: LeonImg.src,
  },
  {
    title: "Advisor",
    name: "Prof. Trummer",
    description: "Sample Text",
    img: ProfTrummerImg.src,
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
