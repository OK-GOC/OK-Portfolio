import AboutBanner from "../components/About/AboutBanner";
import AboutCompany from "../components/About/AboutCompany";
import MissionVison from "../components/About/MissionVison";
import OurMilestone from "../components/About/OurMilestone";
import ContactSection from "../components/Home/ContactSection";
function About() {
  return (
    <div>
      <AboutBanner />
      <AboutCompany />
      <MissionVison />
      <OurMilestone />
      <ContactSection />
    </div>
  );
}

export default About;
