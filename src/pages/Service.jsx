import ServiceBanner from "../components/Service/ServiceBanner";
import logo from "./../assets/image/goc/companies3.png";
import logothree from "./../assets/image/goc/companies2.png";
import AboutBusiness from "../components/Service/AboutBusiness";

import bannerone from "./../assets/image/service/one/bannerOne.png";
import aboutone from "./../assets/image/service/one/aboutOne.png";

import bannerTwo from "./../assets/image/service/two/bannerTwo.png";
import aboutTwo from "./../assets/image/service/two/aboutTwo.png";
import aboutfull from "./../assets/image/service/two/abouttwo.jpg";

import bannerThree from "./../assets/image/service/three/bannerThree.png";
import aboutThree from "./../assets/image/service/three/aboutThree.png";

import bannerFour from "./../assets/image/service/four/bannerFour.png";
import aboutFour from "./../assets/image/service/four/aboutFour.png";

import { useParams } from "react-router-dom";
import GroupOfCompany from "../components/Home/GroupOfCompany";
import ContactSection from "../components/Home/ContactSection";
import ServicePartaner from "../components/Service/ServicePartaner";

const companys = [
  {
    id: 1,
    banner: {
      logo: logo,
      name: "Gold Mine Trading CO.,LTD ",
      image: bannerone,
    },
    about: {
      header: "Established in 2012",
      image: aboutone,
      textone:
        "Founded to explore Myanmar's natural resources and engage in responsible import and export activities. The company operates within government-approved mining zones, with a focus on gold mining and lead ore extraction.",
      texttwo:
        "In addition to its domestic operations, Gold Mine Trading is actively involved in international trade, exporting mineral products in full compliance with national tax laws and regulatory frameworks.",
      textthree:
        "Through lawful and transparent practices, the company contributes to Myanmar's foreign exchange earnings. With a strong commitment to sustainable resource development, Gold Mine Trading continues to support the country's economic growth through ethical trade and responsible mineral exports.",
    },
  },
  {
    id: 2,
    banner: {
      logo: logo,
      name: (
        <span>
          GOLD MINE TRADING STEEL FACTORY <br /> PRODUCTION AND MANUFACTURING
        </span>
      ),
      image: bannerTwo,
    },
    about: {
      header: "Established in 2012",
      image: aboutTwo,
      imagefull: aboutfull,
      textone:
        "Gold Mine Trading Co., LTD.,  operates a modern steel manufacturing facility in Myanmar, reducing reliance on imports by producing high-quality steel products locally.",
      texttwo:
        "By contributing to foreign currency income and tax revenue, we actively support the national economy. Looking ahead, we aim to expand through international technical partnerships, positioning Myanmar as a self-reliant steel producer.",
      textthree:
        "By contributing to foreign currency income and tax revenue, we actively support the national economy. Looking ahead, we aim to expand through international technical partnerships, positioning Myanmar as a self-reliant steel producer.",
    },
  },
  {
    id: 3,
    banner: {
      logo: logothree,
      name: (
        <span>
          GOLD MINE TRAINING CENTER <br /> (Myanmar - Hongkong)
        </span>
      ),
      image: bannerThree,
    },
    about: {
      header: "Established in 2006",
      image: aboutThree,
      textone:
        "Gold Mine Training Center (Myanmar-Hong Kong), was created to strengthen the professional capabilities of workers preparing for overseas employment. The center offers structured training programs focused on language skills and job-specific competencies, helping workers adapt effectively and communicate confidently in international work environments.",
      texttwo:
        "Only candidates who meet the required proficiency standards through these programs are deployed abroad. The center continues to operate in full compliance with national policies and regulations, ensuring quality and integrity in every stage of the training and deployment process.",
    },
  },
  {
    id: 4,
    banner: {
      logo: logothree,
      name: (
        <span>
          GOLD MINE INTERNATIONAL CO.,LTD <br /> (Employment Agency)
        </span>
      ),
      image: bannerFour,
    },
    about: {
      header: "Established in 2006",
      image: aboutFour,
      textone:
        "Gold Mine Company Limited is a prominent overseas employment agency operating under the umbrella of OK Group of Companies. The company has been firmly committed to contributing to Myanmar's economic development by enhancing the country's foreign currency earnings through the legal and systematic deployment of skilled workers to international markets.",
      texttwo:
        "The core mission of Gold Mine Company Limited is to identify, train, and deploy high-quality Myanmar workers through fully legal and ethical channels. The company adheres strictly to the regulations and policies set by the Government of the Republic of the Union of Myanmar, ensuring all operations are carried out in full compliance with labor and migration laws.",
    },
  },
];

export default function Service() {
  const { id } = useParams();
  const company = companys[id];
  console.log(company);

  return (
    <div>
      <ServiceBanner banner={company.banner} />
      <AboutBusiness about={company.about} />
      {company.id === 4 ? <ServicePartaner /> : null}
      <GroupOfCompany />
      <ContactSection />
    </div>
  );
}
