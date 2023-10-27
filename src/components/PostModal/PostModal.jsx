import { useDispatch, useSelector } from "react-redux";
import * as SC from "./Styles";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Timestamp } from "firebase/firestore";
import * as actions from "../../redux/actions/index";

const PostModal = (props) => {
  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();

  const [editorText, setEditorText] = useState("");
  const [assetArea, setAssetArea] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`not an image , the file is a ${typeof image}`);
      return;
    } else {
      setShareImage(image);
    }
  };
  const handlePostArticles = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    const payload = {
      image: shareImage,
      video: videoLink,
      user: user,
      description: editorText,
      timestamp: Timestamp.now(),
    };
    dispatch(actions.postArticleAPI(payload));
    reset(e);
  };
  const switchAssetArea = (area) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  };
  const reset = (e) => {
    setEditorText("");
    setShareImage("");
    setVideoLink("");
    setAssetArea("");
    props.handleClick(e);
  };

  return (
    <>
      {props.showModal && (
        <SC.Container>
          <SC.Content>
            <SC.Header>
              <h2>Create a post</h2>
              <button onClick={(e) => reset(e)}>
                <img src="../../../public/assets/close-icon.svg" alt="" />
              </button>
            </SC.Header>
            <SC.ShareContent>
              <SC.UserInfo>
                {user && user.photoURL ? (
                  <img src={user.photoURL} />
                ) : (
                  <img src="../../../public/assets/user.svg" />
                )}
                <h3>{user.displayName}</h3>
              </SC.UserInfo>
              <SC.Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                />
                {assetArea === "image" ? (
                  <SC.UploadImage>
                    <input
                      type="file"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <p>
                      <label
                        htmlFor="file"
                        style={{
                          cursor: "pointer",
                          display: "block",
                          marginBottom: "15px",
                        }}
                      >
                        Select an image to share
                      </label>
                    </p>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} alt="img" />
                    )}
                  </SC.UploadImage>
                ) : (
                  assetArea === "media" && (
                    <>
                      <input
                        type="text"
                        style={{ width: "100%", height: "30px" }}
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                        placeholder="Please input a video link"
                      />
                      {videoLink && (
                        <ReactPlayer width="100%" url={videoLink} />
                      )}
                    </>
                  )
                )}
              </SC.Editor>
            </SC.ShareContent>
            <SC.ShareCreation>
              <SC.AttachAssets>
                <SC.AssetsButton onClick={() => switchAssetArea("image")}>
                  <img src="../../../public/assets/share-image.svg" alt="" />
                </SC.AssetsButton>
                <SC.AssetsButton onClick={() => switchAssetArea("media")}>
                  <img src="../../../public/assets/share-video.svg" alt="" />
                </SC.AssetsButton>
              </SC.AttachAssets>
              <SC.ShareComment>
                <SC.AssetsButton>
                  <img src="../../../public/assets/share-comment.svg" alt="" />
                  Anyone
                </SC.AssetsButton>
              </SC.ShareComment>
              <SC.PostButton
                disabled={!editorText ? true : false}
                onClick={(e) => handlePostArticles(e)}
              >
                Post
              </SC.PostButton>
            </SC.ShareCreation>
          </SC.Content>
        </SC.Container>
      )}
    </>
  );
};

export default PostModal;
