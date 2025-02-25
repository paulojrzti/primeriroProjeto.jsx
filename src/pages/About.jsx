import Header from "../componets/Header/Header";
import Footer from "../componets/footer/footer";
import Banner from "../componets/Banner/banner";
import AboutText from "../componets/AboutText/aboutText";

function About() {
  return (
    <>
      <Header />
      <Banner title="About" image="about.svg"></Banner>
      <div className="container">
        <AboutText/>
      </div>
      <Footer />
    </>
  );
}
export default About;
