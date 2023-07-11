import ContentImg from "../images/image-hero-desktop.png";
import Audio from "../images/client-audiophile.svg";
import Data from "../images/client-databiz.svg";
import Maker from "../images/client-maker.svg";
import Meet from "../images/client-meet.svg";

const Content = () => {
  return (
    <div className="main-content">
      <div className="main-content-right">
        <h1>
          Make <br /> remote work
        </h1>
        <p>
          Get your team in sync, no matter your location. <br />
          Streamline processes, create team rituals, and <br />
          watch productivity soar
        </p>
        <button>Learn more</button>
        <div className="right-div">
          <img src={Data} />
          <img src={Audio} />
          <img src={Meet} />
          <img src={Maker} />
        </div>
      </div>
      <div>
        <img src={ContentImg} className="content-image" />
      </div>
    </div>
  );
};

export default Content;
