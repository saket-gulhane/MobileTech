import React from "react";

import "./App.css";
import Component from "./Component.js";
// import Comment from "./comment.js";
import BlogSection from "./blog.js";

function App() {
  return (
    <div className="App">
      <div class="row">
        <div class="column sideLayout container">
          <Component name={"Name of User "} age={"20"} address={"Nagpur"} />
        </div>

        <div class="column middle container">
          <p class="thick" align="center">
            Blogs
          </p>

          <BlogSection />
        </div>
      </div>

      <br />
      <br />
    </div>
  );
}

export default App;
