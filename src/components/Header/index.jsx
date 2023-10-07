/* eslint-disable react-refresh/only-export-components */
import * as SC from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import {signOutAPI} from "../../redux/actions";
import * as actions from "../../redux/actions/actions"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userState.user);

  const handleSignOut = async () => {
    const result = await signOutAPI();
    dispatch(actions.setUser(result));
  }

  useEffect(() => {
    if(!user) {
      navigate("/")
    }
  }, [navigate, user])

  return (
    <SC.Container>
      <SC.Content>
        <SC.Logo>
          <a href="/home">
            <img src="/assets/home-logo.svg" alt="" />
          </a>
        </SC.Logo>
        <SC.Search>
          <div>
            <input type="text" placeholder="Search" />
            <SC.SearchIcon>
              <img src="/assets/search-icon.svg" alt="" />
            </SC.SearchIcon>
          </div>
        </SC.Search>
        <SC.Nav>
          <SC.NavListWrap>
            <SC.NavList className="active">
              <a>
                <img src="/assets/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </SC.NavList>
            <SC.NavList>
              <a>
                <img src="/assets/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </SC.NavList>
            <SC.NavList>
              <a>
                <img src="/assets/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </SC.NavList>
            <SC.NavList>
              <a>
                <img src="/assets/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </SC.NavList>
            <SC.NavList>
              <a>
                <img src="/assets/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </SC.NavList>
            <SC.User>
              <a>
                {user && user.photoURL ? (
                  <img src={user.photoURL} />
                ) : (
                  <img src="public\assets\user.svg" alt="" />
                )}

                <span>
                  Me
                  <img src="/assets/down-icon.svg" alt="" />
                </span>
              </a>
              <SC.SignOut onClick={handleSignOut}>
                <a>Sign Out</a>
              </SC.SignOut>
            </SC.User>
            <SC.Work>
              <a>
                <img src="/assets/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/assets/down-icon.svg" alt="" />
                </span>
              </a>
            </SC.Work>
          </SC.NavListWrap>
        </SC.Nav>
      </SC.Content>
    </SC.Container>
  );
};
export default Header;