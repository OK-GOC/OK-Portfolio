import React from "react";
import aboutone from "../../assets/image/service/one/aboutOne.png";

function AboutBusiness({ about }) {
  return (
    <div className="sections">
      <div className="flex">
        <div className="w-[45%] flex justify-center items-center">
          <div>
            <h1 className="header-text">{about.header}</h1>
            <p className="body-text mt-5">{about.textone}</p>
          </div>
        </div>
        <div className="w-[55%] ml-20">
          <img src={about.image} alt="aboutone" className=" rounded-lg" />
        </div>
      </div>
      <div className="flex mt-3">
        <div className={`w-[${about.textthree ? "45%" : "100%"}]`}>
          <div className="">
            <p className="body-text mt-5">{about.texttwo}</p>
          </div>
        </div>
        {about.textthree && (
          <div className="w-[55%] ml-20">
            <p className="body-text mt-5">{about.textthree}</p>
          </div>
        )}
      </div>
      {about.imagefull && (
        <div className="mt-10">
          <img
            src={about.imagefull}
            alt="aboutone"
            className="w-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

export default AboutBusiness;
