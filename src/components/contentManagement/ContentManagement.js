import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';

import PostPreview from '../post/PostPreview';

import PostAPI from '../../../framework/api';

import './contentManagement.scss';

class ContentManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bodyClasses: 'col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1',
      posts: []
    };

    this.loadPosts = this.loadPosts.bind(this);
    this.addPost = this.addPost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.updatePostStatus = this.updatePostStatus.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.posts.length > this.state.posts.length) {
      this.setState({ posts: nextProps.posts.length });
    }
  }

  loadPosts() {
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

  addPost() {
    const postPath = '/admin/post/0/edit';

    this.props.history.push({ pathname: postPath });
  }

  editPost(post) { //eslint-disable-line class-methods-use-this
    const postPath = '/admin/post/' + post.id + '/edit';

    this.props.history.push({ pathname: postPath, state: { post } });
  }

  updatePostStatus(post) { //eslint-disable-line class-methods-use-this
    post.postStatus = post.postStatus == 'published' ? 'draft' : 'published';
    const url = '/api/posts/' + post.id;
    const updatePostConfig = { route: url, params: null, headers: null, data: post };

    PostAPI.put(updatePostConfig).then((response) => {
      this.loadPosts();
    }).catch((err) => {
      console.log('Error deleting post: ', id, err);
    });
  }

  deletePost(id) { //eslint-disable-line class-methods-use-this
    const url = '/api/posts/' + id;
    const deletePostConfig = { route: url, headers: null, params: null };
    PostAPI.delete(deletePostConfig).then((response) => {
      this.loadPosts();
    }).catch((err) => {
      console.log('Error deleting post: ', id, err);
    });
  }

  render() {
    return (
      <div className="content-management-container container-fluid">
        <div className="row">
          <div className={this.state.bodyClasses}>
            <button className="btn btn-light" type="button" onClick={this.addPost}>&#43; New Post</button>
          </div>
        </div>
        {this.state.posts.map((post) => {
          /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
          const publishStatusText = (post.postStatus === 'published' ? 'Unpublish' : 'Publish') + ' Post';
          const buttonClasses = 'button-container ' + this.state.bodyClasses;
          return (
            <div key={post.id} className="post-preview-container">
              <PostPreview post={post} onPostClicked={() => {}} onAuthorClicked={() => {}} />
              <div className="row">
                <div className={buttonClasses}>
                  <button className="btn btn-light" type="button" onClick={() => { this.editPost(post); }}>Edit Post</button>
                  <button className="btn btn-light" type="button" onClick={() => { this.updatePostStatus(post); }}>{publishStatusText}</button>
                  <button className="btn btn-light" type="button" onClick={() => { this.deletePost(post.id); }}>Delete Post</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

ContentManagement.propTypes = {
};

ContentManagement.defaultProps = {
};

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentManagement);