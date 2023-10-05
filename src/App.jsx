import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import {getUserAuth} from "./redux/actions/index";
import { connect, useDispatch, useSelector } from "react-redux";
import { SET_USER } from "./redux/actions/actionTypes";

function App(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    state.userState.user;
    console.log(state);
  });

  useEffect(() => {
    getUserAuth();
    dispatch({ type: SET_USER, payload: "youssef" });
    console.log(user);
  });

  return (
    <div>
      <Outlet />
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {};
// };
// const mapDispatchToProps = (disptach) => {
//   return {
//     getUserAuth: () => disptach(getUserAuth()),
//   };
// };
export default App;
