import "../ProjectsList/projectsList.css";

//ASSETS
import like from "../../assets/like.svg";
import likeFiled from "../../assets/like-filled.svg";

function ProjectsList(props) {
  return (
    <div className="projects-section">
      <div className="projects-hero">
        <h2>Follow Our Projects</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <div className="projects-grid">
        <div className="project-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>joa silva</h3>
          <p>br, brasil</p>
          <img src={like} height="20px" />
        </div>
        <div className="project-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>joa silva</h3>
          <p>br, brasil</p>
          <img src={like} height="20px" />
        </div>
        <div className="project-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>joa silva</h3>
          <p>br, brasil</p>
          <img src={like} height="20px" />
        </div>
        <div className="project-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>joa silva</h3>
          <p>br, brasil</p>
          <img src={like} height="20px" />
        </div>
        <div className="project-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>joa silva</h3>
          <p>br, brasil</p>
          <img src={like} height="20px" />
        </div>
        <div className="project-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>joa silva</h3>
          <p>br, brasil</p>
          <img src={like} height="20px" />
        </div>
        <div className="project-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>joa silva</h3>
          <p>br, brasil</p>
          <img src={like} height="20px" />
        </div>
        <div className="project-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>joa silva</h3>
          <p>br, brasil</p>
          <img src={like} height="20px" />
        </div>
      </div>
    </div>
  );
}
export default ProjectsList;
