import React from "react";

export default class BlogSection extends React.Component {
  state = {
    // uid: null,
    // id: null,
    // title: null,
    // body: null,
    loading: true,
    blogarr: []
  };

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      // uid: data[0].uid,
      // id: data[0].id,
      // title: data[0].title,
      // body: data[0].body,
      loading: false,
      blogarr: data
    });
    console.log(data);
  }

  render() {
    if (this.state.loading === true) {
      return <div>loading...</div>;
    }
    if (!this.state.blogarr.length) {
      return <div>No array received</div>;
    }

    return (
      // <div>
      //   <div>UserId: {this.state.uid}</div>
      //   <div>ID: {this.state.id}</div>
      //   <div>Title: {this.state.title}</div>
      //   <div>Body: {this.state.body}</div>
      // </div>
      ////////////////////////////////////////////////////////

      <div>
        {this.state.blogarr.map((blogs, i) => (
          <div key={`blogNumber:${i}`}>
            <div class="container">
              <div class="center">
                <p>UserId: {blogs.userId}</p>
                <p>ID: {blogs.id}</p>
                <br />
                <div class="main">
                  <p>Title:</p>
                  <p> {blogs.title}</p>
                  <br />
                  <p>Body:</p>
                  <p> {blogs.body}</p>
                </div>
                <br />

                <div class="row">
                  <div class="column leftblog">
                    <p>Comments:</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi gravida, nisl quis.
                    </p>
                  </div>
                  <div class="column rightblog">
                    <p>Likes #</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      ////////////////////////////////////////////////

      //////////////////////////////////////////////////////////
    );
  }
}
