import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostList from './components/PostList/PostList';
import Post from './components/Post/Post';
import About from './components/Post/About';
import CreatePost from './components/Post/CreatePost';
import Links from './components/Post/Links';
import EditPost from './components/Post/EditPost';
import './App.css';

class App extends React.Component {
  state = {
    posts: [],
    post: null
}

componentDidMount() {
  axios.get('http://localhost:5000/api/posts')
  .then((response) => {
    this.setState({
      posts: response.data
    })
})
  .catch((error) => {
    console.error(`Error fetching data: ${error}`);
  })
}

viewPost = (post) => {
  console.log(`view ${post.title}`);
  this.setState({
    post: post
  });
}


deletePost = post => {
  axios
  .delete(`http://localhost:5000/api/posts/${post.id}`)
  .then(response => {
    const newPosts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({
      posts: [...newPosts]
    });
  })
  .catch(error => {
    console.error(`Error deleting post: ${error}`)
  });
};

editPost = post => {
  this.setState({
    post: post
  });
};

onPostCreated = post => {
  const newPosts = [...this.state.posts, post];

  this.setState({
    posts: newPosts
  });
};

onPostUpdated = post => {
  console.log('updated post: ', post);
  const newPosts  = [...this.state.posts];
  const index = newPosts.findIndex(p => p.id === post.id);

  newPosts[index] = post;

  this.setState({
    post: newPosts
  });
};

  render(){
    const { posts, post } = this.state;

    return (
    <Router>
      <div className="App">
        <header className="App-header">Dogs for Sale</header>
        <nav>
          <a href="/">Home</a>
          <a href="/new-post">New Puppy Listing</a>
          <a href="Links">Links</a>
          <a href ="About">About</a>
        </nav>
        <span>You can click on a posting to view the complete text, you may edit a post, delete one, or you can create a new listing</span>
        <main className="App-content">
          <Switch>
            <Route exact path="/">
              <PostList
              posts={posts}
              clickPost={this.viewPost}
              deletePost={this.deletePost}
              editPost={this.editPost}
              />
            </Route>
            <Route path="/posts/:postId">
              <Post post={post} />
            </Route>
            <Route path="/new-post">
              <CreatePost onPostCreated={this.onPostCreated} />
            </Route>
              <Route path="/Links">
                <Links onPostCreated={this.onPostCreated} />
              </Route>
              <Route path="/About">
                <About onPostCreated={this.onPostCreated} />
              </Route>
            <Route path="/edit-post/:postId">
              <EditPost post={post} onPostUpdated={this.onPostUpdated} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
    );
  }
}

export default App;