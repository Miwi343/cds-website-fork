import React from "react";
import Layout from "@/components/Layout";
import Subteam from "@/components/Subteam";

import SkylerImg from "../../assets/img/members/SkylerShapiro.jpg";
import MericelImg from "../../assets/img/members/MericelTao.jpg";
import SamuelImg from "../../assets/img/members/SamuelMeisner.jpg";
import EmeraldImg from "../../assets/img/members/default.jpg";
import TravisImg from "../../assets/img/members/TravisZhang.jpg";
import VarunImg from "../../assets/img/members/default.jpg";
import LauraImg from "../../assets/img/members/LauraGong.jpg";
import ImaniImg from "../../assets/img/members/ImaniFinkley.jpg";
import MichaelImg from "../../assets/img/members/MichaelNgo.jpg";
import KatieImg from "../../assets/img/members/KatieZelvin.jpg";
import EricGuoImg from "../../assets/img/members/EricGuo.jpg";
import EricChenImg from "../../assets/img/members/default.jpg";
import VivianImg from "../../assets/img/members/default.jpg";
import DarrenImg from "../../assets/img/members/DarrenKey.jpg";
import MahithaImg from "../../assets/img/members/MahithaPenmetsa.jpg";
import AudreyImg from "../../assets/img/members/AudreyWang.jpg";
import JasonImg from "../../assets/img/members/JasonZheng.jpg";
import DenizImg from "../../assets/img/members/DenizBoloni-Turgut.jpg";
import JakobImg from "../../assets/img/members/JakobSilver.jpg";
import CadeImg from "../../assets/img/members/CadeJin.jpg";
import AnyaImg from "../../assets/img/members/AnyaYerramilli.jpg";
import TheodoreImg from "../../assets/img/members/TheodoreJeliazkov.jpg";
import TamaraImg from "../../assets/img/members/TamaraKasikovic.jpg";
import AmrithImg from "../../assets/img/members/AmrithKumaar.jpg";
import KaylaImg from "../../assets/img/members/KaylaShan.jpg";
import SrivatsaImg from "../../assets/img/members/SrivatsaKundurthy.jpg";
import JoyceImg from "../../assets/img/members/default.jpg";
import TemiImg from "../../assets/img/members/default.jpg";
import EricDoImg from "../../assets/img/members/EricDo.jpg";
import MinhImg from "../../assets/img/members/default.jpg";
import ProfWeinbergerImg from "../../assets/img/members/default.jpg";
import BossImg from "../../assets/img/members/BossLerdamnrongwong.jpg";
import JerryImg from "../../assets/img/members/JerryWang.jpg";
import MihirKulshreshtha from "../../assets/img/members/MihirKulshreshtha.jpg";
import LetitiaSoare from "../../assets/img/members/LetitiaSoare.jpg";
import LeoQian from "../../assets/img/members/LeoQian.jpg"
import MichelleZhou from "../../assets/img/members/MichelleZhou.jpg"

const members = [
  {
    title: "Subteam Lead",
    name: "Skyler Shapiro",
    description: "Sample Text",
    img: SkylerImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Subteam Lead",
    name: "Mericel Tao",
    description: "Sample Text",
    img: MericelImg.src,
    linkedin: "https://www.linkedin.com/in/mericel-tao/", // LinkedIn URL from the data
  },
  {
    title: "Member",
    name: "Samuel Meisner",
    description: "Sample Text",
    img: SamuelImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Emerald Liu",
    description: "Sample Text",
    img: EmeraldImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Travis Zhang",
    description: "Sample Text",
    img: TravisImg.src,
    linkedin: "https://www.linkedin.com/in/travis-zhang/", // LinkedIn URL from the data
  },
  {
    title: "Member",
    name: "Varun Gande",
    description: "Sample Text",
    img: VarunImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Laura Gong",
    description: "Sample Text",
    img: LauraImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Imani Finkley",
    description: "Sample Text",
    img: ImaniImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Michael Ngo",
    description: "Sample Text",
    img: MichaelImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Katie Zelvin",
    description: "Sample Text",
    img: KatieImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Eric Guo",
    description: "Sample Text",
    img: EricGuoImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Eric Chen",
    description: "Sample Text",
    img: EricChenImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Vivian Chen",
    description: "Sample Text",
    img: VivianImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Darren Key",
    description: "Sample Text",
    img: DarrenImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Mahitha Penmetsa",
    description: "Sample Text",
    img: MahithaImg.src,
    linkedin: "https://www.linkedin.com/in/mahitha-penmetsa/", // LinkedIn URL from the data
  },
  {
    title: "Member",
    name: "Audrey Wang",
    description: "Sample Text",
    img: AudreyImg.src,
    linkedin: "www.linkedin.com/in/audreywang12",
  },
  {
    title: "Member",
    name: "Jason Zheng",
    description: "Sample Text",
    img: JasonImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Deniz Boloni-Turgut",
    description: "Sample Text",
    img: DenizImg.src,
    linkedin: "https://www.linkedin.com/in/deniz-bt/", // LinkedIn URL from the data
  },
  {
    title: "Member",
    name: "Jakob Silver",
    description: "Sample Text",
    img: JakobImg.src,
    linkedin: 'https://www.linkedin.com/in/jakob-w-silver/',
  },
  {
    title: "Member",
    name: "Cade Jin",
    description: "Sample Text",
    img: CadeImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Anya Yerramilli",
    description: "Sample Text",
    img: AnyaImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Theodore Jeliazkov",
    description: "Sample Text",
    img: TheodoreImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Tamara Kasikovic",
    description: "Sample Text",
    img: TamaraImg.src,
    linkedin: "www.linkedin.com/in/tamara-kasikovic-7076921b8",
  },
  {
    title: "Member",
    name: "Boss Lerdamnrongwong",
    description: "Sample Text",
    img: BossImg.src,
    linkedin: "www.linkedin.com/in/riert",
  },
  {
    title: "Member",
    name: "Jerry Wang",
    description: "Sample Text",
    img: JerryImg.src,
    linkedin: "https://www.linkedin.com/in/jerry-wang2352/",
  },
  {
    title: "Member",
    name: "Amrith Kumaar",
    description: "Sample Text",
    img: AmrithImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Kayla Shan",
    description: "Sample Text",
    img: KaylaImg.src,
    linkedin: 'www.linkedin.com/in/kayla-shan',
  },
  {
    title: "Member",
    name: "Srivatsa Kundurthy",
    description: "Sample Text",
    img: SrivatsaImg.src,
    linkedin: "https://www.linkedin.com/in/riert", // LinkedIn URL from the data
  },
  {
    title: "Member",
    name: "Joyce Yang",
    description: "Sample Text",
    img: JoyceImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Temi Adebowale",
    description: "Sample Text",
    img: TemiImg.src,
    linkedin: null, // No LinkedIn URL found in the data
  },
  {
    title: "Member",
    name: "Eric Do",
    description: "Sample Text",
    img: EricDoImg.src,
    linkedin: 'https://www.linkedin.com/in/eric-do-424331261',
  },
  {
    title: "Member",
    name: "Minh Pham",
    description: "Sample Text",
    img: MinhImg.src,
    linkedin: null,
  },
  {
    title: "Member",
    name: "Leo Qian",
    description: "Sample Text",
    img: LeoQian.src,
    linkedin: "https://www.linkedin.com/in/leojqian/"
  },
  {
    title: "Member",
    name: "Letitia Soare",
    description: "Sample Text",
    img: LetitiaSoare.src,
    linkedin: "https://www.linkedin.com/in/letitiasoare"
  },
  {
    title: "Member",
    name: "Mihir Kulshreshtha",
    description: "Sample Text",
    img: MihirKulshreshtha.src,
    linkedin: "https://www.linkedin.com/in/mihirkulsh"
  },
  {
    title: "Member",
    name: "Michelle Zhou",
    description: "Sample Text",
    img: MichelleZhou.src,
    linkedin: "https://www.linkedin.com/in/michelle-zhou-ai/"
  },
  {
    title: "Advisor",
    name: "Prof. Kilian Weinberger",
    description: "Sample Text",
    img: ProfWeinbergerImg.src,
    linkedin: null, // No LinkedIn URL found in the data
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
