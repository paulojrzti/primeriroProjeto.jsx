import Button from "../componets/Button/button";
import Header from "../componets/Header/Header";
import Footer from "../componets/footer/footer";
import Banner from "../componets/Banner/banner";
import Hero from "../componets/Hero/hero";

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
      </div>
      <Footer />
    </>
  );
}
export default Home;