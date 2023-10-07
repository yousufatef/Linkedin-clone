import styled from "styled-components";
import { signInAPI } from "../redux/actions";
import * as actions from "../redux/actions/actions"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);

  const handleSignIn = async () => {
    const result = await signInAPI();
    dispatch(actions.setUser(result));
  }

  return (
    <Container>
      {user && navigate("/home")}
      <Nav>
        <a href="/index.html">
          <img src="public\assets\login-logo.svg" alt="Linkedin icon" />
        </a>
        <div>
          <Join>Join Now</Join>
          <Signin>Signin</Signin>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcom to your professional community</h1>
          <img src="public\assets\login-hero.svg" alt="login hero" />
        </Hero>
        <Form>
          <Googel onClick={handleSignIn}>
            <img src="public\assets\google.svg" alt="google" />
            Sign in with Google
          </Googel>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.nav`
  max-width: 1128px;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: reletive;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;
const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const Signin = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;
const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 130px;
  padding-top: 40px;
  padding: 40px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;
const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 22px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;
export const Form = styled.div`
  margin-top: 100px;
  width: 400px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
const Googel = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 /0%),
    inset 0 0 0 1px rgb(0 0 0 / 0%);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

// const mapStateToProps = (state) => {
//   return {
//     user: state.userState.user,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     signIn: () => dispatch(signInAPI()),
//   };
// };

// eslint-disable-next-line react-refresh/only-export-components
export default Login;
