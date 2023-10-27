import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { auth, db, provider, storage } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import * as actions from "./actions";

export const signInAPI = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
    return res.user;
  } catch (error) {
    alert(error.message);
  }
};

export const signOutAPI = async () => {
  try {
    await auth.signOut();
    return null;
  } catch (error) {
    alert(error.message);
  }
};

export function postArticleAPI(payload) {
  return (dispatch) => {
    dispatch(actions.setLoading(true));
    if (payload.image) {
      const storageRef = ref(storage, `images/${payload.image.name}`);
      const uploadRef = uploadBytesResumable(storageRef, payload.image);
      uploadRef.on(
        "state_changed",
        (snapshot) => {
          const progress =
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadRef.snapshot.ref).then((downloadURl) => {
            const collRef = collection(db, "articles");
            addDoc(collRef, {
              actor: {
                description: payload.user.email,
                title: payload.user.displayName,
                date: payload.timestamp,
                image: payload.user.photoURL,
              },
              comments: 0,
              video: payload.video,
              description: payload.description,
              shareImg: downloadURl,
            });
          });
          dispatch(actions.setLoading(false));
        }
      );
    } else if (payload.video) {
      const collRef = collection(db, "articles");
      addDoc(collRef, {
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        comments: 0,
        video: payload.video,
        description: payload.description,
        shareImg: payload.image,
      });
      dispatch(actions.setLoading(false));
    } else {
      const collRef = collection(db, "articles");
      addDoc(collRef, {
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        comments: 0,
        video: payload.video,
        description: payload.description,
        shareImg: payload.image,
      });
      dispatch(actions.setLoading(false));
    }
  };
}
