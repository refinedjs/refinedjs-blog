import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';

import singlePostBody from './post_data/bind_to_controller.html';

import './post.scss';

class Post extends Component {
  constructor(props) {
    super(props);

    /*this.state = {
      id: '009wer9wer8akjhsdf',
      postHeader: 'Using BindToController - Why is this so damn useful?',
      postAuthor: 'Josh Gonzalez',
      postDate: '5.20.2016',
      postTags: 'AngularJS | Components | Directives | Javascript',
      postSnippet: '<p><code>BindToController</code> allows you to bind the components properties directly to <code>Controller</code> rather than the <code>isolated $scope</code> of the component. This is a huge win for component development!</p>'
      postBody: singlePostBody
    };*/
    this.state = {
      post: props.post
    };

    this.createPostBody = this.createPostBody.bind(this);
  }

  createPostBody(text) {
    return {
      __html: text
    };
  }

  render() {
    return (
      <div className='post'>
        <h1 className='post-header'>{this.state.post.postHeader}</h1>
        <div className='post-author-date'>
          <div className='post-author'>{this.state.post.postAuthor}</div> | <div className='post-date'>{this.state.post.postDate}</div>
        </div>
        <div className='post-tags'>{this.state.post.postTags}</div>
        <div className='post-body' dangerouslySetInnerHTML={this.props.snippet ? this.createPostBody(this.state.post.postSnippet) : this.createPostBody(this.state.post.postBody)} />
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({}).isRequired,
  snippet: PropTypes.bool
};

Post.defaultProps = {
  snippet: false
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
