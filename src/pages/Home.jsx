import HeroBanner from "../components/Home/HeroBanner";
import GroupOfCompany from "../components/Home/GroupOfCompany";
import ContactSection from "../components/Home/ContactSection";
import MissionVison from "../components/About/MissionVison";
import OurMilestone from "../components/About/OurMilestone";
import Message from "../components/Home/Message";
function Home() {
  return (
    <div className=" mx-auto">
      <HeroBanner />

      <Message />
      <MissionVison />
      <OurMilestone />
      <GroupOfCompany />
      <ContactSection />
    </div>
  );
}

export default Home;
