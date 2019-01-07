import React, { Component } from 'react';

import PostPreview from '../post/PostPreview';
import PostModal from './postModal/PostModal';

import './contentManagement.scss';

export default class ContentManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bodyClasses: 'col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1',
      posts: [
        {
          id: '009wer9wer8akscvt',
          postStatus: "published",
          postTitle: 'Read the source code',
          postAuthor: 'Yakira Bristol',
          postDate: '4.11.2017',
          postTags: 'AngularJS | React | Coding | Javascript',
          postSnippet: 'A lot of people use open source libraries without understanding the nuts and bolts. On the surface this may seem fine. \
            You read its description, it says it will do what you need so you give integrating it into your project a shot. It does not work. \
            Read the source code...',
          postBody: ''
        },
        {
          id: '009wer9wer8akjhssd',
          postStatus: "published",
          postTitle: 'In too deep? - Deep copying objects in Angular',
          postAuthor: 'Yakira Bristol',
          postDate: '6.4.2016',
          postTags: 'AngularJS | Objects | Functions | Javascript',
          postSnippet: 'With jQuery, we learned to copy objects using <code>jQuery.extend()</code>. What if we want to do this in Angular, \
            in which using jQuery should be avoided? Angular has a function that can be used, like <code>jQuery.extend()</code>, \
            called <code>angular.extend()</code>. But that just scratches the surface...',
          postBody: ''
        },
        {
          id: '009wer9wer8akjhsdf',
          postStatus: "published",
          postTitle: 'Using BindToController - Why is this so damn useful?',
          postAuthor: 'Josh Gonzalez',
          postDate: '5.20.2016',
          postTags: 'AngularJS | Components | Directives | Javascript',
          postSnippet: '<code>BindToController</code> allows you to bind the components properties directly to <code>Controller</code> \
            rather than the <code>isolated $scope</code> of the component. This is a huge win for component development! The controller \
            of the component now has the ability to be decoupled...',
          postBody: ''
        },
        {
          id: '009wer9wer8akjhsda',
          postStatus: "published",
          postTitle: 'Using NgModelController $validators and $asyncValidators to validate form fields',
          postAuthor: 'Yakira Bristol',
          postDate: '4.30.2016',
          postTags: 'AngularJS | Validation | Javascript',
          postSnippet: 'The most common way to validate form fields in angular is to look at <code>$valid</code> and <code>$invalid</code> \
            on the fields. But what if that is not enough and you want to create special validation for your fields (i.e. validating an email \
            against a regex or make a call to the server to validate a value)? <code>NgModelController</code> has collection of validators called \
            <code>$validators</code> and <code>$asyncValidators</code> that can be used to create your custom field validations...',
          postBody: ''
        }
      ],
      selectedPost: {},
      isModalVisible: false
    };

    this.editPost = this.editPost.bind(this);
    this.savePost = this.savePost.bind(this);
    this.unpublishPost = this.unpublishPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  editPost(post) { //eslint-disable-line class-methods-use-this
    //editing post here
    this.setState({ isModalVisible: true, selectedPost: post });
  }

  savePost(post) { //eslint-disable-line class-methods-use-this
    // save post here
    /*const saveType = post.id ? 'put' : 'post';
    // const savePostConfig = { route: '/api/posts', params: null, headers: null, data: post };
    API[saveType](savePostConfig).then((response) => {
      console.log('Save response: ', response);
    }).catch((err) => {
      console.log('Error saving post: ', post, err);
    });*/
  }

  unpublishPost(post) { //eslint-disable-line class-methods-use-this
    //unpublishing post here
    post.status = 'draft';
  }

  deletePost(id) { //eslint-disable-line class-methods-use-this
    //deleting post here
    // const deletePostConfig = { route: '/api/posts', params: { id } };
    /*API.delete(deletePostConfig).then((response) => {
      console.log('Deletion response: ', response);
    }).catch((err) => {
      console.log('Error deleting post: ', id, err);
    });*/
  }

  toggleModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  render() {
    return (
      <div className='content-management-container container-fluid'>
        {this.state.posts.map((post) => {
          /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
          const publishStatusText = (post.postStatus === 'published' ? 'Unpublish' : 'Publish') + ' Post';
          const buttonClasses = 'button-container ' + this.state.bodyClasses;
          return (
            <div key={post.id}>
              <PostPreview post={post} onTitleClicked={() => {}} onAuthorClicked={() => {}} />
              <div className='row'>
                <div className={buttonClasses}>
                  <button className='btn btn-light' type='button' onClick={() => { this.editPost(post); }}>Edit Post</button>
                  <button className='btn btn-light' type='button' onClick={() => { this.unpublishPost(post); }}>{publishStatusText}</button>
                  <button className='btn btn-light' type='button' onClick={() => { this.deletePost(post.id); }}>Delete Post</button>
                </div>
              </div>
            </div>
          );
        })}
        {this.state.isModalVisible &&
          <PostModal post={this.state.selectedPost} toggleModal={this.toggleModal} savePost={this.savePost} />
        }
      </div>
    );
  }
}

ContentManagement.propTypes = {
};

ContentManagement.defaultProps = {
};