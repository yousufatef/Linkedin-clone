import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import * as actions from "./actions";

export const signInAPI = ()=> {
    signInWithPopup(auth, provider)
      .then((payload) => {
        // dispatch(actions.setUser(payload.user));
        console.log(payload)
      })
      .catch((error) => alert(error.message));
  }


export const getUserAuth = ()=> {
  // to change user account which stored in Redux
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(actions.setUser(user));
      }
    });
  };
}

export const signOutAPI = ()=> {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(actions.setUser(null));
      })
      .catch((error) => alert(error.message));
  };
}

// export default { signInAPI, getUserAuth, signOutAPI };
