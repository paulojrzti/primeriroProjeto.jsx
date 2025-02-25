import Button from "../componets/Button/button";
import Header from "../componets/Header/Header";
import Footer from "../componets/footer/footer";
import Banner from "../componets/Banner/banner";
import Hero from "../componets/Hero/hero";
import Projectlist from "../componets/ProjectsList/projectsList"

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        <Projectlist></Projectlist>
      </div>
      <Footer />
    </>
  );
}
export default Home;