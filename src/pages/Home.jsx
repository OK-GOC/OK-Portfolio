import AboutUs from "../components/Home/AboutUs";
import HeroBanner from "../components/Home/HeroBanner";
import Message from "../components/Home/Message";
import GroupOfCompany from "../components/Home/GroupOfCompany";
import ContactSection from "../components/Home/ContactSection";
function Home() {
  return (
    <div className=" mx-auto">
      <HeroBanner />
      <AboutUs />
      <Message />
      <GroupOfCompany />
      <ContactSection />
    </div>
  );
}

export default Home;
