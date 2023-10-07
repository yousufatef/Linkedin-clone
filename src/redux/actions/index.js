import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";


export const signInAPI =  async () =>  {
  try {
    const res = await signInWithPopup(auth, provider);
    return res.user;
  }
  catch(error){
       alert(error.message);
  }
}

export const signOutAPI =  async () =>  {
  try {
    await auth.signOut();
    return null;
  }
  catch(error){
    alert(error.message);
  }
}


// export const getUserAuth = ()=> {
//   // to change user account which stored in Redux
//   return (dispatch) => {
//     auth.onAuthStateChanged(async (user) => {
//       if (user) {
//         dispatch(actions.setUser(user));
//       }
//     });
//   };
// }



// // export default { signInAPI, getUserAuth, signOutAPI };
