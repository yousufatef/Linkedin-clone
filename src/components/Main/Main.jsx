import { useSelector } from "react-redux";
import * as SC from "./Styles";
import { useState } from "react";
import PostModal from "../PostModal/PostModal";

const Main = () => {
  const user = useSelector((state) => state.userState.user);
  console.log(user);
  const loading = useSelector((state) => state.articlesState.loading);

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };
  return (
    <SC.Container>
      <SC.ShareBox>
        <div>
          {user && user.photoURL ? (
            <img src={user.photoURL} alt="" />
          ) : (
            <img src="../../../public/assets/user.svg" alt="" />
          )}
          <button onClick={handleClick} disabled={loading ? true : false}>
            Start a post
          </button>
        </div>
      </SC.ShareBox>
      <SC.Content>
        <PostModal showModal={showModal} handleClick={handleClick} />
      </SC.Content>
    </SC.Container>
  );
};

export default Main;
