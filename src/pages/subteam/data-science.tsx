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
import EricDoImg from "../../assets/img/members/default.jpg";
import MinhImg from "../../assets/img/members/default.jpg";
import ProfWeinbergerImg from "../../assets/img/members/default.jpg";

const members = [
  {
    title: "Subteam Lead",
    name: "Skyler Shapiro",
    description: "Sample Text",
    img: SkylerImg.src,
  },
  {
    title: "Subteam Lead",
    name: "Mericel Tao",
    description: "Sample Text",
    img: MericelImg.src,
  },
  {
    title: "Member",
    name: "Samuel Meisner",
    description: "Sample Text",
    img: SamuelImg.src,
  },
  {
    title: "Member",
    name: "Emerald Liu",
    description: "Sample Text",
    img: EmeraldImg.src,
  },
  {
    title: "Member",
    name: "Travis Zhang",
    description: "Sample Text",
    img: TravisImg.src,
  },
  {
    title: "Member",
    name: "Varun Gande",
    description: "Sample Text",
    img: VarunImg.src,
  },
  {
    title: "Member",
    name: "Laura Gong",
    description: "Sample Text",
    img: LauraImg.src,
  },
  {
    title: "Member",
    name: "Imani Finkley",
    description: "Sample Text",
    img: ImaniImg.src,
  },
  {
    title: "Member",
    name: "Michael Ngo",
    description: "Sample Text",
    img: MichaelImg.src,
  },
  {
    title: "Member",
    name: "Katie Zelvin",
    description: "Sample Text",
    img: KatieImg.src,
  },
  {
    title: "Member",
    name: "Eric Guo",
    description: "Sample Text",
    img: EricGuoImg.src,
  },
  {
    title: "Member",
    name: "Eric Chen",
    description: "Sample Text",
    img: EricChenImg.src,
  },
  {
    title: "Member",
    name: "Vivian Chen",
    description: "Sample Text",
    img: VivianImg.src,
  },
  {
    title: "Member",
    name: "Darren Key",
    description: "Sample Text",
    img: DarrenImg.src,
  },
  {
    title: "Member",
    name: "Mahitha Penmetsa",
    description: "Sample Text",
    img: MahithaImg.src,
  },
  {
    title: "Member",
    name: "Audrey Wang",
    description: "Sample Text",
    img: AudreyImg.src,
  },
  {
    title: "Member",
    name: "Jason Zheng",
    description: "Sample Text",
    img: JasonImg.src,
  },
  {
    title: "Member",
    name: "Deniz Boloni-Turgut",
    description: "Sample Text",
    img: DenizImg.src,
  },
  {
    title: "Member",
    name: "Jakob Silver",
    description: "Sample Text",
    img: JakobImg.src,
  },
  {
    title: "Member",
    name: "Cade Jin",
    description: "Sample Text",
    img: CadeImg.src,
  },
  {
    title: "Member",
    name: "Anya Yerramilli",
    description: "Sample Text",
    img: AnyaImg.src,
  },
  {
    title: "Member",
    name: "Theodore Jeliazkov",
    description: "Sample Text",
    img: TheodoreImg.src,
  },
  {
    title: "Member",
    name: "Tamara Kasikovic",
    description: "Sample Text",
    img: TamaraImg.src,
  },
  {
    title: "Member",
    name: "Amrith Kumaar",
    description: "Sample Text",
    img: AmrithImg.src,
  },
  {
    title: "Member",
    name: "Kayla Shan",
    description: "Sample Text",
    img: KaylaImg.src,
  },
  {
    title: "Member",
    name: "Srivatsa Kundurthy",
    description: "Sample Text",
    img: SrivatsaImg.src,
  },
  {
    title: "Member",
    name: "Joyce Yang",
    description: "Sample Text",
    img: JoyceImg.src,
  },
  {
    title: "Member",
    name: "Temi Adebowale",
    description: "Sample Text",
    img: TemiImg.src,
  },
  {
    title: "Member",
    name: "Eric Do",
    description: "Sample Text",
    img: EricDoImg.src,
  },
  {
    title: "Member",
    name: "Minh Pham",
    description: "Sample Text",
    img: MinhImg.src,
  },
  {
    title: "Advisor",
    name: "Prof. Kilian Weinberger",
    description: "Sample Text",
    img: ProfWeinbergerImg.src,
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
