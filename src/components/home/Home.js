import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';

import Post from '../post/Post';
import singlePostBody from '../post/post_data/bind_to_controller.html';

import './home.scss';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          id: '009wer9wer8akjhsdf',
          postHeader: 'Using BindToController - Why is this so damn useful?',
          postAuthor: 'Josh Gonzalez',
          postDate: '5.20.2016',
          postTags: 'AngularJS | Components | Directives | Javascript',
          postSnippet: '<p><code>BindToController</code> allows you to \
            bind the components properties directly to <code>Controller</code> rather than \
            the <code>isolated $scope</code> of the component. This is a huge win for component development!</p>',
          postBody: singlePostBody
        }
      ]
    };

    this.onPostClick = this.onPostClick.bind(this);
  }

  onPostClick(post, history) { //eslint-disable-line class-methods-use-this
    const postPath = '/post/' + post.id;

    history.push({ pathname: postPath });
  }

  render() {
    return (
      <div className="home">
        <Post post={this.state.posts[0]} snippet />
      </div>
    );
  }

  /*render() {
    return (
      <div className="post-list">
        {this.props.posts.map((post, idx) => {
          eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
          return (
            <Route
              key={post.id}
              render={({ history }) => {
                return (
                  <div className="post-snippet" onClick={() => { this.onPostClick(post, history); }}>
                    <Post snippet />
                  </div>
                );
              }}
            />
          );
        })}
      </div>
    );
  }*/
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
