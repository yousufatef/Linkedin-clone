import LeftSide from "../LeftSide/LeftSide";
import Main from "../Main/Main";
import RiteSide from "../RightSide/RiteSide";
import * as SC from "./Styles";

const Home = () => {
  return (
    <SC.Container>
      <SC.Section>
        <h5>
          <a href="#">Hiring in hurry?</a>
        </h5>
        <p>Find talented pros in record time with Upwork and keep businees</p>
      </SC.Section>
      <SC.Layout>
        <LeftSide />
        <Main />
        <RiteSide />
      </SC.Layout>
    </SC.Container>
  );
};

export default Home;
