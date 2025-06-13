import company11 from "./../../assets/image/goc/company11.png";
import company1 from "./../../assets/image/goc/companies1.png";
import company2 from "./../../assets/image/goc/companies2.png";
import company3 from "./../../assets/image/goc/companies3.png";
import company4 from "./../../assets/image/goc/companies4.png";
import company5 from "./../../assets/image/goc/companies5.png";
import company6 from "./../../assets/image/goc/companies6.png";
import company7 from "./../../assets/image/goc/companies7.png";
import company8 from "./../../assets/image/goc/companies8.png";
import company9 from "./../../assets/image/goc/companies9.png";
import company10 from "./../../assets/image/goc/companies10.png";

const gocs = [
  {
    id: 1,
    image: company11,
    name: (
      <span>
        OK Group of <br /> Companies
      </span>
    ),
  },
  {
    id: 2,
    image: company1,
    name: <span>Gold Mine International CO.LTD</span>,
  },
  {
    id: 3,
    image: company2,
    name: <span>Gold Mine Training Center</span>,
  },
  {
    id: 4,
    image: company3,
    name: (
      <span>
        Gold Mine Trading
        <br />
        Companies Limited
      </span>
    ),
  },
  {
    id: 5,
    image: company4,
    name: (
      <span>
        GOLD MINE TRADING STEEL <br /> FACTORY PRODUCTION AND <br />{" "}
        MANUFACTURING
      </span>
    ),
  },
  {
    id: 6,
    image: company5,
    name: <span>OK Travels & Tours</span>,
  },
  {
    id: 7,
    image: company6,
    name: <span>Ruber Sinar Global CO.LTD</span>,
  },
  {
    id: 8,
    image: company7,
    name: <span>Avenue 101</span>,
  },
  {
    id: 9,
    image: company8,
    name: <span>168 Success Real Estate Agency</span>,
  },
  {
    id: 10,
    image: company9,
    name: <span>Altas Builders</span>,
  },
  {
    id: 11,
    image: company10,
    name: <span>Liquor Pro</span>,
  },
];

const GroupOfCompany = () => {
  return (
    <div>
      <div className="sections">
        <h1 className="header-text text-center">Our Group Of Companies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gocs.map((go) => (
            <div
              key={go.id}
              className="flex flex-col items-center justify-center mt-20"
            >
              <img src={go.image} alt={go.name} width={150} height={150} />
              <p className="mt-2 text-center text-primary font-semibold text-[12px]">
                {go.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupOfCompany;
