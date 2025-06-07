import { TiEye } from "react-icons/ti";
import { TbTargetArrow } from "react-icons/tb";
const MissionVison = () => {
  return (
    <div className="sections">
      <div className="flex gap-20 max-w-5xl mx-auto">
        <div className="w-1/2">
          <h1 className="flex items-center gap-2 header-text">
            <TiEye /> <span>Our Vision</span>
          </h1>
          <p className="body-text mt-5">
            Our vision is to be a leading organization recognized for excellence
            in customer satisfaction, innovation, and operational efficiency. We
            aim to provide the highest quality services that offer genuine
            convenience and fulfillment to our clients and partnership. By
            embracing continuous improvement and leveraging advanced
            technologies, we strive to anticipate customer needs, exceed
            expectations, and foster long-term loyalty. Through a commitment to
            integrity, collaboration, and sustainable practices, we envision
            building a future where our company plays a vital role in enhancing
            the lives of those we serve.
          </p>
        </div>
        <div className="w-1/2">
          <h1 className="flex items-center gap-2 header-text">
            <TbTargetArrow /> <span>Our Mission</span>
          </h1>
          <p className="body-text mt-5">
            To drive sustainable growth and innovation across diverse industries
            by delivering exceptional value to our stakeholders. We are
            committed to fostering excellence, integrity, and collaboration in
            every business we operate, while empowering communities, supporting
            our people, and shaping a better future through responsible
            enterprise.Values and nurtures long-term relationships with
            suppliers.Achieves strong and sustainable financial performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVison;
