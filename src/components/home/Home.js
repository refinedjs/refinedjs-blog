import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';

import PostPreview from '../post/PostPreview';
import PageHeader from '../pageHeader/PageHeader';

import PostAPI from '../../../framework/api';

import './home.scss';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

    this.onPostClick = this.onPostClick.bind(this);
    this.onAuthorClicked = this.onAuthorClicked.bind(this);
  }

  componentDidMount() {
    const postConfig = {
      route: '/api/posts',
      headers: null,
      params: null
    };

    PostAPI.get(postConfig).then((results) => {
      this.props.setPosts(results.posts);
      this.setState({ posts: results.posts });
    }).catch((err) => {
      console.log('Error retrieving posts...', err);
    });
  }

  onPostClick(post) { //eslint-disable-line class-methods-use-this
    const postPath = '/post/' + post.id;

    this.props.history.push({ pathname: postPath });
  }

  onAuthorClicked() {
    const authorPath = '/contributors';

    this.history.push({ pathname: authorPath });
  }

  render() {
    return (
      <div className='home container-fluid'>
        <PageHeader heading='Refined Js' subHeading='The Pursuit To Refined Javascript' />
        {this.state.posts.map((post) => {
          /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
          if(post.postStatus == 'published') {
            return (
              <PostPreview key={post.id} post={post} onPostClicked={this.onPostClick} onAuthorClicked={this.onAuthorClicked} />
            );
          }
          return;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
