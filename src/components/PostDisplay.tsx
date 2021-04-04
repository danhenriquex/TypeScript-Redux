import React, { useRef } from "react";
import { AppState } from "../store/AppState";
import { useSelector } from "react-redux";

const PostDisplay = React.memo(() => {
  const renderCount = useRef(0);
  console.log("renders PostDisplay", renderCount.current++);
  const post = useSelector((state: AppState) => state.post);

  if (post) {
    return (
      <>
        <div>
          <label>title</label>
          &nbsp;{post.title}
        </div>
        <div>
          <label>body:</label>
          &nbsp;{post.body}
        </div>
      </>
    );
  } else {
    return null;
  }
});

export default PostDisplay;
