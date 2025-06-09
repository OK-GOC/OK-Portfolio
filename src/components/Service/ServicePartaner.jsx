import partaner from "../../assets/image/service/four/partaner.png";
import partanerOne from "../../assets/image/service/four/partanerOne.png";

export default function ServicePartaner() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#FBD95A] h-[700px] flex items-center justify-center">
          <div className="text-primary max-w-lg">
            <h1 className="header-text mb-5">
              <span className="text-primary">Our Partnership in Malaysia</span>
            </h1>
            <div className="flex flex-col gap-2">
              <span>1. Seng Kong Shutter Industries Sdn Bhd</span>
              <span>2. Euro Done Sdn Bhd </span>
              <span>3. Macro Dimension Concrete Sdn Bhd </span>
              <span>4. Benithem Sdn Bhd </span>
              <span>5. Zhoufan Sdn Bhd </span>
              <span>6. Southern Legend Sdn Bhd </span>
              <span>7. SDKM Technologies Sdn Bhd </span>
              <span>8. Concorde. Furniture Industries Sdn Bhd </span>
              <span>9. Citagobal Industries Sdn Bhd </span>
              <span>10. Sunries Enterprise Sdn Bhd </span>
            </div>
          </div>
        </div>
        <div className="bg-[#2D2AA1] h-[700px] flex items-center justify-center">
          <div className="text-white max-w-lg mb-6">
            <h1 className="header-text mb-5">
              <span className="text-white">Our Partnership in Thailand</span>
            </h1>
            <div className="flex flex-col gap-2">
              <span>1. Phuket Built Co.,Ltd</span>
              <span>2. NC Asia Construction Co.,Ltd</span>
              <span>3. MNsS Construction @Service Co.,Ltd</span>
              <span>4. Phuketvisate Engineering Co.,Ltd</span>
              <span>5. TNB Intertrade (Thailand )Co.,Ltd</span>
              <span>6. Rungrueng Nam Co.,Ltd</span>
              <span>7. Grandpart Packaging Co.,Ltd</span>
              <span>8. Srisuda Bakery Co.,Ltd</span>
              <span>9. Alpha Electric Engineering Co.,Ltd</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sections">
        <div className="flex">
          <div className="w-[55%] mr-20">
            <img src={partaner} alt="aboutone" className=" rounded-lg" />
          </div>
          <div className="w-[45%] flex justify-center items-center">
            <div>
              <h1 className="header-text">Gold Mine Company Limited</h1>
              <p className="body-text mt-5">
                has earned a reputation for excellence and trustworthiness among
                both local communities and foreign employers. The company
                maintains close relationships with licensed foreign employment
                agencies and employers to secure reputable and well-paying jobs
                for Myanmar workers.
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-3">
          <div className={`w-[100%]`}>
            <div className="">
              <p className="body-text mt-5">
                It also offers continuous support and monitoring for deployed
                workers to safeguard their rights and well-being throughout
                their contracts abroad. Driven by the values of integrity,
                responsibility, and systematic development, Gold Mine Company
                Limited remains at the forefront of Myanmar's overseas
                employment sector. The company continues to play a vital role in
                empowering Myanmar citizens with meaningful job opportunities
                while strengthening international labor relations and
                contributing to the nations economic progress.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <img src={partanerOne} alt="aboutone" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}
