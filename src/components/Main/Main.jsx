import { useSelector } from "react-redux";
import * as SC from "./Styles";
import { useState } from "react";
import PostModal from "../PostModal/PostModal";
import ReactPlayer from "react-player";

const Main = () => {
  const user = useSelector((state) => state.userState.user);
  const articles = useSelector((state) => state.articlesState.articles);
  // console.log(user);
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
        <div>
          <button>
            <img src="../../../public/assets/plus-icon.svg" alt="" />
            <span>Photo</span>
          </button>
          <button>
            <img src="../../../public/assets/video-icon.svg" alt="" />
            <span>Video</span>
          </button>
          <button>
            <img src="../../../public/assets/event-icon.svg" alt="" />
            <span>Event</span>
          </button>
          <button>
            <img src="../../../public/assets/article-icon.svg" alt="" />
            <span>Write article</span>
          </button>
        </div>
      </SC.ShareBox>

      {articles.length === 0 ? (
        <p>There are no articles</p>
      ) : (
        <SC.Content>
          {loading && <img src="../../../public/assets/loader.svg" />}
          {articles.length > 0 &&
            articles.map((article, index) => (
              <SC.Article key={index}>
                <SC.SharedActor>
                  <a href="">
                    <img src={article.actor.image} alt="" />
                    <div>
                      <span>{article.actor.title}</span>
                      <span>{article.actor.description}</span>
                      <span>
                        {article.actor.date.toDate().toLocaleDateString()}
                      </span>
                    </div>
                  </a>
                  <button>
                    <img src="../../../public/assets/ellipsis.svg" />
                  </button>
                </SC.SharedActor>
                <SC.Description>{article.Description}</SC.Description>
                <SC.SharedImg>
                  <a href="">
                    {!article.sharedImg && article.video ? (
                      <ReactPlayer width="100%" url={article.video} />
                    ) : (
                      article.sharedImg && <img src={article.sharedImg} />
                    )}
                  </a>
                </SC.SharedImg>
                <SC.SocialCounts>
                  <li>
                    <button>
                      <img
                        src="https://static-exp1.licdn.com/sc/h/2uxqgankkcxm505qn812vqyss"
                        alt=""
                      />
                      <img
                        src="https://static-exp1.licdn.com/sc/h/f58e354mjsjpdd67eq51cuh49"
                        alt=""
                      />
                      <span>75</span>
                    </button>
                  </li>
                  <li>
                    <a>{article.comments} comments</a>
                  </li>
                  <li>
                    <a>1 share</a>
                  </li>
                </SC.SocialCounts>
                <SC.SocialActions>
                  <button>
                    <img src="../../../public/assets/like-icon.svg" alt="" />
                    <span>Like</span>
                  </button>
                  <button>
                    <img src="../../../public/assets/comment-icon.svg" alt="" />
                    <span>Comment</span>
                  </button>
                  <button>
                    <img src="../../../public/assets/share-icon.svg" alt="" />
                    <span>Share</span>
                  </button>
                  <button>
                    <img src="../../../public/assets/send-icon.svg" alt="" />
                    <span>Send</span>
                  </button>
                </SC.SocialActions>
              </SC.Article>
            ))}
        </SC.Content>
      )}
      <PostModal showModal={showModal} handleClick={handleClick} />
    </SC.Container>
  );
};

export default Main;
