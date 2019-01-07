import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';

import validatorsPostBody from './post_data/angular_validators';
import bindPostBody from './post_data/bind_to_controller';
import deepPostBody from './post_data/deep_copy_objects';
import sourcePostBody from './post_data/read_the_source_code';

import './post.scss';

const posts = [
  {
    id: '009wer9wer8akscvt',
    postTitle: 'Read the source code',
    postAuthor: 'Yakira Bristol',
    postDate: '4.11.2017',
    postTags: 'AngularJS | React | Coding | Javascript',
    postSnippet: 'A lot of people use open source libraries without understanding the nuts and bolts. On the surface this may seem fine. \
      You read its description, it says it will do what you need so you give integrating it into your project a shot. It does not work. \
      Read the source code...',
    postBody: sourcePostBody
  },
  {
    id: '009wer9wer8akjhssd',
    postTitle: 'In too deep? - Deep copying objects in Angular',
    postAuthor: 'Yakira Bristol',
    postDate: '6.4.2016',
    postTags: 'AngularJS | Objects | Functions | Javascript',
    postSnippet: 'With jQuery, we learned to copy objects using <code>jQuery.extend()</code>. What if we want to do this in Angular, \
      in which using jQuery should be avoided? Angular has a function that can be used, like <code>jQuery.extend()</code>, \
      called <code>angular.extend()</code>. But that just scratches the surface...',
    postBody: deepPostBody
  },
  {
    id: '009wer9wer8akjhsdf',
    postTitle: 'BindToController - Why is this so damn useful?',
    postAuthor: 'Josh Gonzalez',
    postDate: '5.20.2016',
    postTags: 'AngularJS | Components | Directives | Javascript',
    postSnippet: '<code>BindToController</code> allows you to bind the components properties directly to <code>Controller</code> \
      rather than the <code>isolated $scope</code> of the component. This is a huge win for component development! The controller \
      of the component now has the ability to be decoupled...',
    postBody: bindPostBody
  },
  {
    id: '009wer9wer8akjhsda',
    postTitle: 'Using NgModelController $validators and $asyncValidators to validate form fields',
    postAuthor: 'Yakira Bristol',
    postDate: '4.30.2016',
    postTags: 'AngularJS | Validation | Javascript',
    postSnippet: 'The most common way to validate form fields in angular is to look at <code>$valid</code> and <code>$invalid</code> \
      on the fields. But what if that is not enough and you want to create special validation for your fields (i.e. validating an email \
      against a regex or make a call to the server to validate a value)? <code>NgModelController</code> has collection of validators called \
      <code>$validators</code> and <code>$asyncValidators</code> that can be used to create your custom field validations...',
    postBody: validatorsPostBody
  }
];

class Post extends Component {
  constructor(props) {
    super(props);

    const postObj = posts.find((post) => {
      return post.id === props.match.params.id; //eslint-disable-line react/prop-types
    });

    this.postColumnClasses = 'col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1';
    this.state = {
      post: postObj || {},
      postBodyClasses: ('post-body ' + this.postColumnClasses)
    };

    this.createPostBody = this.createPostBody.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const postObj = posts.find((post) => {
      return post.id === nextProps.match.params.id; //eslint-disable-line react/prop-types
    });

    this.setState({ post: postObj });
  }

  createPostBody(text) { //eslint-disable-line class-methods-use-this
    return {
      __html: text()
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
            <div className={this.state.postBodyClasses}>{this.state.post.postBody()}</div>
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
  post: {}
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
