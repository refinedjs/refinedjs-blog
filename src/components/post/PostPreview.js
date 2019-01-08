import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';

import './post.scss';

class PostPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: props.post,
      postPreviewClasses: 'col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'
    };

    this.createPostPreview = this.createPostPreview.bind(this);
  }

  createPostPreview(text) { //eslint-disable-line class-methods-use-this
    return {
      __html: text
    };
  }

  render() {
    return (
      <div className='row'>
        <div className={this.state.postPreviewClasses}>
          <div className='post-preview'>
            <a href='' onClick={() => { this.props.onTitleClicked(this.state.post); }}><h2>{this.state.post.postTitle}</h2></a>
            <p className='post-meta'>By <a href='' onClick={this.props.onAuthorClicked}>{this.state.post.postAuthor}</a> || {this.state.post.postDate}</p>
            <hr />
            <h3 className='post-subtitle' dangerouslySetInnerHTML={this.createPostPreview(this.state.post.postSnippet)} />
            <p className='post-meta-details'>
              <i className='fa fa-tags' /> {this.state.post.postTags}
            </p>
            <p className='post-meta-details'>
              {/*<i className='fa fa-comments' /> | <a href='http://refinedjs.io/posts/4-11-2017/read-the-source-code#disqus_thread'>Comments</a>*/}
              <a href=''><span>Read more...</span></a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

PostPreview.propTypes = {
  post: PropTypes.shape({}).isRequired,
  onTitleClicked: PropTypes.func.isRequired,
  onAuthorClicked: PropTypes.func.isRequired
};

PostPreview.defaultProps = {};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPreview);
