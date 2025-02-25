import Header from "../componets/Header/Header";
import Footer from "../componets/footer/footer";
import Banner from "../componets/Banner/banner";
import Projectlist from "../componets/ProjectsList/projectsList";
function projects() {
  return (
    <>
      <Header />
      <Banner title="Projects" image="projects.svg"></Banner>
      <div className="container">
        <Projectlist></Projectlist>
      </div>
      <Footer />
    
    </>
  );
}
export default projects;
