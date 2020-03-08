import React from "react";

var Comment = props => {
  return (
    <div class="center">
      <p>{props.number}</p>
      <p>{props.blogs}</p>

      <div class="row">
        <div class="column leftblog">
          <p>{props.commentsSection}</p>
        </div>
        <div class="column rightblog">
          <p>{props.likes}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
