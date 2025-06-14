import React from "react";
import aboutone from "../../assets/image/service/one/aboutOne.png";

function AboutBusiness({ about }) {
  return (
    <div className="sections">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[45%] flex justify-center items-center">
          <div>
            <h1 className="header-text">{about.header}</h1>
            <p className="body-text mt-5">{about.textone}</p>
          </div>
        </div>
        <div className="w-full md:w-[55%] mt-5 md:mt-0 md:ml-20">
          <img src={about.image} alt="aboutone" className="rounded-lg" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-3">
        <div className={`${about.textthree ? "w-full md:w-[45%]" : "w-full"}`}>
          <p className="body-text mt-5">{about.texttwo}</p>
        </div>
        {about.textthree && (
          <div className="w-full md:w-[55%]  md:ml-20">
            <p className="body-text mt-5">{about.textthree}</p>
          </div>
        )}
      </div>
      {about.imagefull && (
        <div
          className={`mt-10 ${
            about.imagefull2
              ? "grid grid-cols-1 md:grid-cols-2 gap-5"
              : "w-full"
          }`}
        >
          <img
            src={about.imagefull}
            alt="aboutone"
            className="w-full rounded-lg"
          />
          {about.imagefull2 && (
            <img
              src={about.imagefull2}
              alt="aboutone"
              className="w-full rounded-lg"
            />
          )}
        </div>
      )}
      {about.textfour && (
        <div className="flex flex-col md:flex-row mt-3">
          <div
            className={`${about.textfive ? "w-full md:w-[45%] " : "w-full"}`}
          >
            <div className="">
              <p className="body-text mt-5">{about.textfour}</p>
            </div>
          </div>
          {about.textfive && (
            <div className="w-full md:w-[55%] md:ml-20">
              <p className="body-text mt-5">{about.textfive}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AboutBusiness;
