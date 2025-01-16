import React from "react";
import Layout from "@/components/Layout";
import Subteam from "@/components/Subteam";

import JerryChenImg from "../../assets/img/members/JerryChen.jpg";
import ElizabethSongImg from "../../assets/img/members/ElizabethSong.jpg";
import TanviKapoorImg from "../../assets/img/members/default.jpg";
import RohanShahImg from "../../assets/img/members/RohanShah.jpg";
import JacobMayourianImg from "../../assets/img/members/JacobMayourian.jpg";
import NoahPlantImg from "../../assets/img/members/NoahPlant.jpg";
import AlkiviadesBoukasImg from "../../assets/img/members/default.jpg";
import AdonaAntenehImg from "../../assets/img/members/default.jpg";
import SamaraSilvermanImg from "../../assets/img/members/SamaraSilverman.jpg";
import AlyssaSerebrenikImg from "../../assets/img/members/default.jpg";
import AndrewChenImg from "../../assets/img/members/default.jpg";
import AryaPatelImg from "../../assets/img/members/default.jpg";
import CodyTorogovnikImg from "../../assets/img/members/default.jpg";
import JerryWangImg from "../../assets/img/members/JerryWang.jpg";
import IramLiuImg from "../../assets/img/members/IramLiu.jpg";
import CoreyWangImg from "../../assets/img/members/CoreyWang.jpg";
import PeterHaImg from "../../assets/img/members/PeterHa.jpg";
import NancyChenImg from "../../assets/img/members/NancyChen.jpg";
import SantiagoPalaciosImg from "../../assets/img/members/SantiagoPalacios.jpg";
import PeterZhengImg from "../../assets/img/members/default.jpg";
import EileenWuImg from "../../assets/img/members/default.jpg";
import AarshaJoshiImg from "../../assets/img/members/default.jpg";
import AaravKhannaImg from "../../assets/img/members/default.jpg";
import JohnsonLinImg from "../../assets/img/members/default.jpg";
import ProfHaymHirshImg from "../../assets/img/members/default.jpg";

const members = [
  {
    title: "Subteam Lead",
    name: "Jerry Chen",
    description: "Sample Text",
    img: JerryChenImg.src,
  },
  {
    title: "Subteam Lead",
    name: "Elizabeth Song",
    description: "Sample Text",
    img: ElizabethSongImg.src,
  },
  {
    title: "Member",
    name: "Tanvi Kapoor",
    description: "Sample Text",
    img: TanviKapoorImg.src,
  },
  {
    title: "Member",
    name: "Rohan Shah",
    description: "Sample Text",
    img: RohanShahImg.src,
  },
  {
    title: "Member",
    name: "Jacob Mayourian",
    description: "Sample Text",
    img: JacobMayourianImg.src,
  },
  {
    title: "Member",
    name: "Noah Plant",
    description: "Sample Text",
    img: NoahPlantImg.src,
  },
  {
    title: "Member",
    name: "Alkiviades Boukas",
    description: "Sample Text",
    img: AlkiviadesBoukasImg.src,
  },
  {
    title: "Member",
    name: "Adona Anteneh",
    description: "Sample Text",
    img: AdonaAntenehImg.src,
  },
  {
    title: "Member",
    name: "Samara Silverman",
    description: "Sample Text",
    img: SamaraSilvermanImg.src,
  },
  {
    title: "Member",
    name: "Alyssa Serebrenik",
    description: "Sample Text",
    img: AlyssaSerebrenikImg.src,
  },
  {
    title: "Member",
    name: "Andrew Chen",
    description: "Sample Text",
    img: AndrewChenImg.src,
  },
  {
    title: "Member",
    name: "Arya Patel",
    description: "Sample Text",
    img: AryaPatelImg.src,
  },
  {
    title: "Member",
    name: "Cody Torogovnik",
    description: "Sample Text",
    img: CodyTorogovnikImg.src,
  },
  {
    title: "Member",
    name: "Jerry Wang",
    description: "Sample Text",
    img: JerryWangImg.src,
  },
  {
    title: "Member",
    name: "Iram Liu",
    description: "Sample Text",
    img: IramLiuImg.src,
  },
  {
    title: "Member",
    name: "Corey Wang",
    description: "Sample Text",
    img: CoreyWangImg.src,
  },
  {
    title: "Member",
    name: "Peter Ha",
    description: "Sample Text",
    img: PeterHaImg.src,
  },
  {
    title: "Member",
    name: "Nancy Chen",
    description: "Sample Text",
    img: NancyChenImg.src,
  },
  {
    title: "Member",
    name: "Santiago Palacios",
    description: "Sample Text",
    img: SantiagoPalaciosImg.src,
  },
  {
    title: "Member",
    name: "Peter Zheng",
    description: "Sample Text",
    img: PeterZhengImg.src,
  },
  {
    title: "Member",
    name: "Eileen Wu",
    description: "Sample Text",
    img: EileenWuImg.src,
  },
  {
    title: "Member",
    name: "Aarsha Joshi",
    description: "Sample Text",
    img: AarshaJoshiImg.src,
  },
  {
    title: "Member",
    name: "Aarav Khanna",
    description: "Sample Text",
    img: AaravKhannaImg.src,
  },
  {
    title: "Member",
    name: "Johnson Lin",
    description: "Sample Text",
    img: JohnsonLinImg.src,
  },
  {
    title: "Advisor",
    name: "Prof. Haym Hirsh",
    description: "Sample Text",
    img: ProfHaymHirshImg.src,
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
