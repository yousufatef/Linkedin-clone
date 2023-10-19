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


