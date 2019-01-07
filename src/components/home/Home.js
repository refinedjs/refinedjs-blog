import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';

import PostPreview from '../post/PostPreview';
import PageHeader from '../pageHeader/PageHeader';

import './home.scss';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          id: '009wer9wer8akscvt',
          postTitle: 'Read the source code',
          postAuthor: 'Yakira Bristol',
          postDate: '4.11.2017',
          postTags: 'AngularJS | React | Coding | Javascript',
          postSnippet: 'A lot of people use open source libraries without understanding the nuts and bolts. On the surface this may seem fine. \
            You read its description, it says it will do what you need so you give integrating it into your project a shot. It does not work. \
            Read the source code...'
        },
        {
          id: '009wer9wer8akjhssd',
          postTitle: 'In too deep? - Deep copying objects in Angular',
          postAuthor: 'Yakira Bristol',
          postDate: '6.4.2016',
          postTags: 'AngularJS | Objects | Functions | Javascript',
          postSnippet: 'With jQuery, we learned to copy objects using <code>jQuery.extend()</code>. What if we want to do this in Angular, \
            in which using jQuery should be avoided? Angular has a function that can be used, like <code>jQuery.extend()</code>, \
            called <code>angular.extend()</code>. But that just scratches the surface...'
        },
        {
          id: '009wer9wer8akjhsdf',
          postTitle: 'Using BindToController - Why is this so damn useful?',
          postAuthor: 'Josh Gonzalez',
          postDate: '5.20.2016',
          postTags: 'AngularJS | Components | Directives | Javascript',
          postSnippet: '<code>BindToController</code> allows you to bind the components properties directly to <code>Controller</code> \
            rather than the <code>isolated $scope</code> of the component. This is a huge win for component development! The controller \
            of the component now has the ability to be decoupled...'
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
            <code>$validators</code> and <code>$asyncValidators</code> that can be used to create your custom field validations...'
        }
      ]
    };

    this.onPostClick = this.onPostClick.bind(this);
    this.onAuthorClicked = this.onAuthorClicked.bind(this);
  }

  onPostClick(post) { //eslint-disable-line class-methods-use-this
    const postPath = '/post/' + post.id;

    this.history.push({ pathname: postPath });
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
          return (
            <Route
              key={post.id}
              render={({ history }) => {
                this.history = history;
                return (
                  <PostPreview post={post} onTitleClicked={this.onPostClick} onAuthorClicked={this.onAuthorClicked}/>
                );
              }}
            />
          );
        })}
      </div>
    );
  }
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
