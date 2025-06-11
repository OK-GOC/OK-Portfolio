import ServiceBanner from "../components/Service/ServiceBanner";
import logo from "./../assets/image/goc/companies3.png";
import logothree from "./../assets/image/goc/companies2.png";
import logofive from "./../assets/image/goc/companies5.png";
import logosix from "./../assets/image/goc/companies6.png";
import logoseven from "./../assets/image/goc/companies7.png";
import logoeight from "./../assets/image/goc/companies8.png";
import logonine from "./../assets/image/goc/companies9.png";
import logoTen from "./../assets/image/goc/companies10.png";
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

import bannerFive from "./../assets/image/service/five/bannerFive.png";
import aboutFive from "./../assets/image/service/five/aboutFive.png";
import aboutFiveFull from "./../assets/image/service/five/about5Full.png";

import bannerSix from "./../assets/image/service/six/bannersix.png";
import aboutSix from "./../assets/image/service/six/aboutsix.png";

import bannerSeven from "./../assets/image/service/seven/bannerseven.png";
import aboutSeven from "./../assets/image/service/seven/aboutseven.png";
import seven1 from "./../assets/image/service/seven/seven1.png";
import seven2 from "./../assets/image/service/seven/seven2.png";

import bannerEight from "./../assets/image/service/eight/bannereight.png";
import aboutEight from "./../assets/image/service/eight/abouteight.png";

import bannerNine from "./../assets/image/service/nine/bannernine.png";
import aboutNine from "./../assets/image/service/nine/aboutnine.png";
import nine1 from "./../assets/image/service/nine/nine1.png";
import nine2 from "./../assets/image/service/nine/nine2.png";

import bannerTen from "./../assets/image/service/ten/banner10.png";
import aboutTen from "./../assets/image/service/ten/about10.png";

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
  {
    id: 5,
    banner: {
      logo: logofive,
      name: <span>OK TRAVELS & TOURS CO.,LTD</span>,
      image: bannerFive,
    },
    about: {
      header: "Established in 2008",
      image: aboutFive,
      imagefull: aboutFiveFull,
      textone:
        "OK Travels & Tours is a proud subsidiary of the OK Group of Companies. As an International Air Transport Association (IATA)-accredited travel agency (Certification No. 05300012), we have grown to become one of Myanmar's leading travel service providers. ",
      texttwo: `Recognized as an official Global Sales Agent (GSA) for numerous international airlines, we specialize in delivering comprehensive travel solutions for both leisure and business travelers. In recognition of our outstanding performance and service excellence, OK Travels & Tours was honored with the "Best Agent Award" by Myanmar Airways International (MAI) for two consecutive years—2009 and 2010.`,
      textthree:
        "With over a decade of experience in the travel and tourism industry, our agency is known for its professional integrity, customer-oriented service, and an unwavering commitment to excellence. Whether you're planning a relaxing vacation, a corporate trip, or a pilgrimage, OK Travels & Tours ensures your journey is smooth, seamless, and stress-free from start to finish.",
      textfour:
        "As part of Myanmar's growing travel industry, OK Travels & Tours plays a vital role in promoting tourism, supporting business mobility, and enhancing global connectivity for individuals and organizations alike. We continuously innovate to stay ahead of the evolving travel landscape, leveraging technology and global partnerships to bring world-class service to our customers.",
      textfive:
        "We are committed to being not just a service provider, but a dependable partner in your traveljourney whether it's for business, leisure, education, or adventure. From your first inquiry to your final destination, we're with you every step of the way. Discover the difference of traveling with a team that puts your comfort, convenience, and safety above all else. Contact us today to start planning your next journey with confidence.",
    },
  },
  {
    id: 6,
    banner: {
      logo: logosix,
      name: "RUBER SINER Global  CO.,LTD ",
      image: bannerSix,
    },
    about: {
      header: "Founded in 2023",
      image: aboutSix,
      textone:
        "Ruber Sinar Global Co.,Ltd. is a trusted importer and distributor of pharmaceutical and healthcare products in Myanmar. We specialize in bringing in high-quality machines from international manufacturers, ensuring compliance with WHO and FDA standards.",
      texttwo:
        "Our goal is to make premium medicines and healthcare supplies accessible at fair prices and to become a leading pharmaceutical distributor in Myanmar. In addition to distribution, we actively promote public health education by encouraging proper medication use and raising wellness awareness.",
      textthree:
        "With a strong commitment to ethical practices and a reliable supply chain, we aim to support the nation's healthcare sector and position ourselves as one of Myanmar's top-tier pharmaceutical distributors.",
    },
  },
  {
    id: 7,
    banner: {
      logo: logoseven,
      name: (
        <span>
          AVENUE MYANMAR HOLDING <br /> CO.,LTD (Entertainment Group)
        </span>
      ),
      image: bannerSeven,
    },
    about: {
      header: "Established in 2022",
      image: aboutSeven,
      imagefull: seven1,
      imagefull2: seven2,
      textone:
        "Avenue Myanmar Holding Co., Ltd. is a forward-thinking company , dedicated to elevating the standards of hospitality and entertainment in Myanmar. The company proudly operates AVENUE 101 (Bar & Entertainment), a contemporary and stylish venue that offers a premium selection of food, beverages, and tailored event-hosting services.",
      texttwo: `Located in a spacious and thoughtfully designed setting, AVENUE 101 stands out for its modern ambiance, professional staff, and state-of-the-art sound systems. Whether you're planning a private celebration, corporate gathering, birthday party, or simply a night out with friends, AVENUE 101 provides the perfect environment for memorable moments. The venue seamlessly blends comfort and elegance, making it ideal for both casual enjoyment and special occasions.`,
      textthree:
        "At the heart of Avenue Myanmar Holding Co., Ltd. is a commitment to service excellence and customer satisfaction. Every aspect of the guest experience is carefully crafted to ensure enjoyment, from the welcoming atmosphere and attentive service to the exceptional quality of food and drink.",
      textfour:
        "The company believes that every guest deserves not just a service, but an experience-and AVENUE 101 delivers just that. With a focus on innovation, hospitality, and customer delight, AVENUE 101 continues to redefine nightlife and event entertainment in Myanmar. Avenue Myanmar Holding Co., Ltd. is proud to offer a destination where guests can relax, celebrate, and enjoy the best that modern dining and entertainment have to offer.",
    },
  },
  {
    id: 8,
    banner: {
      logo: logoeight,
      name: (
        <span>
          168 SUCCESS REAL ESTATE <br /> (Myanmar Co., LTD)
        </span>
      ),
      image: bannerEight,
    },
    about: {
      header: "Founded in 2023",
      image: aboutEight,
      textone:
        "168 Success Real Estate Co., Ltd. is a dynamic and forward-thinking Real Estate company dedicated to unlocking property potential across Myanmar and into key regional markets such as Thailand. We provide a comprehensive suite of real estate services - including buying, selling, leasing, and investment consulting - all underpinned by a commitment to transparency, fair pricing, and professional excellence.",
      texttwo:
        "Rooted in ethical business practices and strengthened by solid industry relationships, we strive to deliver long-term value for our clients and partners. Whether you're looking to invest, expand, or find your ideal property, 168 Success is your trusted gateway to the growing real estate landscape of Myanmar and the region.",
    },
  },
  {
    id: 9,
    banner: {
      logo: logonine,
      name: (
        <span>
          ATLAS BUILDERS BUILDING & <br /> DECORATION CO.,LTD
        </span>
      ),
      image: bannerNine,
    },
    about: {
      header: "Established in 2024",
      image: aboutNine,
      imagefull: nine1,
      imagefull2: nine2,
      textone:
        "Atlas Builders Building & Decoration Group is a trusted construction and interior design firm specializing in hotel and commercial projects across Myanmar. We deliver end-to-end construction services, from new builds to renovations, complemented by modern architectural design and luxury interior finishes.",
      texttwo:
        "Currently, we are renovating and redesigning a hotel at Chaungtha Beach, providing structural upgrades alongside high-quality decorative solutions. By blending technical expertise with contemporary design, we bring lasting visions to life.",
    },
  },
  {
    id: 10,
    banner: {
      logo: logoTen,
      name: "LIQUOR PRO (LIQUOR WHOLESALE)",
      image: bannerTen,
    },
    about: {
      header: "Operating since 2020",
      image: aboutTen,
      textone:
        "Liquor Pro is a business that takes responsibility for the distribution of various types of liquor throughout Myanmar. The company distributes a wide range of liquor categories, from premium international brands to locally produced liquor brands, supplying to hotels, bars, restaurants, and retail shops.",
      texttwo:
        "Within Myanmar's Alcohol Market, Liquor Pro aims to become a reliable liquor supplier for both the general public and business owners. Additionally, the company provides services such as B2B liquor distribution, retailer supply, and partnership opportunities.",
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
