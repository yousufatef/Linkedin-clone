import { useSelector } from "react-redux";
import * as SC from "./Styles";
const LeftSide = () => {
    const user = useSelector((state) => state.userState.user);
  return (
    <SC.Container>
      <SC.ArtCard>
        <SC.UserInfo>
          <SC.CardBackground />
          <a>
            <SC.Photo />
            <SC.Link>Welcome, {user ? user.displayName : "there!"}</SC.Link>
          </a>
        </SC.UserInfo>
        <SC.Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="../../../public/assets/widget-icon.svg" alt="" />
          </a>
        </SC.Widget>
        <SC.Item>
          <span>
            <img src="../../../public/assets/item-icon.svg" alt="" />
            My Item
          </span>
        </SC.Item>
      </SC.ArtCard>
      <SC.CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="../../../public/assets/plus-icon.svg" alt="" />
          </span>
        </a>
        <a>
          <span>Follows Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </SC.CommunityCard>
    </SC.Container>
  );
}

export default LeftSide
