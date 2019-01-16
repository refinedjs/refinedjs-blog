import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';

import './post.scss';

class Post extends Component {
  constructor(props) {
    super(props);

    const postObj = props.posts.blogPosts.find((post) => {
      return post.id === props.match.params.id; //eslint-disable-line react/prop-types
    });

    this.postColumnClasses = 'col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1';
    this.state = {
      post: postObj || Post.defaultProps.post,
      postBodyClasses: ('post-body ' + this.postColumnClasses)
    };

    this.createPostBody = this.createPostBody.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  componentDidMount() {
    window.addEventListener('onpopstate', this.handleBackButton);
  }

  componentWillUnmount() {
    window.removeEventListener('onpopstate', this.handleBackButton);
  }

  handleBackButton(e) {
    e.preventDefault();
    e.stopPropogation();
    this.props.history.goBack();
  }

  /*componentWillReceiveProps(nextProps) {
    const postObj = nextProps.posts.find((post) => {
      return post.id === nextProps.match.params.id; //eslint-disable-line react/prop-types
    });

    this.setState({ post: postObj });
  }*/

  createPostBody(text) { //eslint-disable-line class-methods-use-this
    return {
      __html: text
    };
  }

  render() {
    return (
      <div className='post-container'>
        <header className='intro-header post'>
          <div className='container-fluid'>
            <div className='row'>
              <div className={this.postColumnClasses}>
                <div className='site-heading'>
                  <h1>{this.state.post.postTitle}</h1>
                  <p className='post-meta-details'>
                    <em>
                      <small>
                        {this.state.post.postAuthor} | {this.state.post.postDate}
                        <br />
                        <i className='fa fa-tags' /> {this.state.post.postTags}
                      </small>
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className='container-fluid post'>
          <div className='row'>
            <div className={this.state.postBodyClasses} dangerouslySetInnerHTML={this.createPostBody(this.state.post.postBody)} />
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({})
};

Post.defaultProps = {
  post: {
    postStatus: '',
    postTitle: '',
    postAuthor: '',
    postDate: null,
    postTags: '',
    postSnippet: '',
    postBody: ''
  }
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
