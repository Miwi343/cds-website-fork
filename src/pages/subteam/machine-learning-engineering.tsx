import React from "react";
import Layout from "@/components/Layout";

import Subteam from "@/components/Subteam";

import ArnavImg from "../../assets/img/members/ArnavAgrawal.jpg";
import EverettImg from "../../assets/img/members/EverettLee.jpg";
import AndyImg from "../../assets/img/members/AndyHe.jpg";
import AndrewImg from "../../assets/img/members/default.jpg";
import NehaImg from "../../assets/img/members/NehaKulshreshtha.jpg";
import EdwardImg from "../../assets/img/members/default.jpg";
import MeiLinImg from "../../assets/img/members/MeiLinHu.jpg";
import VincentImg from "../../assets/img/members/default.jpg";
import AndreaImg from "../../assets/img/members/AndreaSiby.jpg";
import TakumaImg from "../../assets/img/members/TakumaOsaka.jpg";
import DanWeiImg from "../../assets/img/members/DanWeiZuo.jpg";
import AliceImg from "../../assets/img/members/AliceUm.jpg";
import TanishaImg from "../../assets/img/members/default.jpg";
import KennethImg from "../../assets/img/members/KennethChiem.jpg";
import YunooImg from "../../assets/img/members/YunooKim.jpg";
import BensonImg from "../../assets/img/members/BensonZhang.jpg";
import PeterImg from "../../assets/img/members/PeterFavero.jpg";
import SamanthaImg from "../../assets/img/members/SamanthaVaca.jpg";
import TanishImg from "../../assets/img/members/TanishTyagi.jpg";
import SabrinaImg from "../../assets/img/members/default.jpg";
import MinhajImg from "../../assets/img/members/default.jpg";
import ProfDeSaImg from "../../assets/img/members/default.jpg";

const members = [
  {
    title: "Subteam Lead",
    name: "Arnav Agrawal",
    description: "Sample Text",
    img: ArnavImg.src,
  },
  {
    title: "Subteam Lead",
    name: "Everett Lee",
    description: "Sample Text",
    img: EverettImg.src,
  },
  {
    title: "Member",
    name: "Andy He",
    description: "Sample Text",
    img: AndyImg.src,
  },
  {
    title: "Member",
    name: "Andrew Chang",
    description: "Sample Text",
    img: AndrewImg.src,
  },
  {
    title: "Member",
    name: "Neha Kulshreshtha",
    description: "Sample Text",
    img: NehaImg.src,
  },
  {
    title: "Member",
    name: "Edward Gu",
    description: "Sample Text",
    img: EdwardImg.src,
  },
  {
    title: "Member",
    name: "Mei Lin Hu",
    description: "Sample Text",
    img: MeiLinImg.src,
  },
  {
    title: "Member",
    name: "Vincent Fong",
    description: "Sample Text",
    img: VincentImg.src,
  },
  {
    title: "Member",
    name: "Andrea Siby",
    description: "Sample Text",
    img: AndreaImg.src,
  },
  {
    title: "Member",
    name: "Takuma Osaka",
    description: "Sample Text",
    img: TakumaImg.src,
  },
  {
    title: "Member",
    name: "Dan Wei Zuo",
    description: "Sample Text",
    img: DanWeiImg.src,
  },
  {
    title: "Member",
    name: "Alice Um",
    description: "Sample Text",
    img: AliceImg.src,
  },
  {
    title: "Member",
    name: "Tanisha Kore",
    description: "Sample Text",
    img: TanishaImg.src,
  },
  {
    title: "Member",
    name: "Kenneth Chiem",
    description: "Sample Text",
    img: KennethImg.src,
  },
  {
    title: "Member",
    name: "Yunoo Kim",
    description: "Sample Text",
    img: YunooImg.src,
  },
  {
    title: "Member",
    name: "Benson Zhang",
    description: "Sample Text",
    img: BensonImg.src,
  },
  {
    title: "Member",
    name: "Peter Favero",
    description: "Sample Text",
    img: PeterImg.src,
  },
  {
    title: "Member",
    name: "Samantha Vaca",
    description: "Sample Text",
    img: SamanthaImg.src,
  },
  {
    title: "Member",
    name: "Tanish Tyagi",
    description: "Sample Text",
    img: TanishImg.src,
  },
  {
    title: "Member",
    name: "Sabrina Ning",
    description: "Sample Text",
    img: SabrinaImg.src,
  },
  {
    title: "Member",
    name: "Minhaj Fahad",
    description: "Sample Text",
    img: MinhajImg.src,
  },
  {
    title: "Advisor",
    name: "Prof. Christopher De Sa",
    description: "Sample Text",
    img: ProfDeSaImg.src,
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
