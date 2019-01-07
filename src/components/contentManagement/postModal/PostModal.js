import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

//import 'react-dates/initialize';
//import 'react-dates/lib/css/_datepicker.css';

//import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

import ModalComponent from '../../shared/modal/ModalComponent';
import ModalBodyComponent from '../../shared/modal/ModalBodyComponent';

import './postModal.scss';

export default class PostModal extends Component {
  constructor(props) {
    super(props);

    const modalPost = props.post ? Object.assign({}, props.post) : PostModal.defaultProps.post;

    this.state = {
      post: modalPost,
      postDate: modalPost.postDate ? moment(modalPost.postDate) : null,
      authorOptions: ['Yakira Bristol', 'Josh Gonzalez'],
      statusOptions: ['draft', 'published']
    };

    this.savePost = this.savePost.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const post = nextProps.post ? Object.assign({}, nextProps.post) : PostModal.defaultProps.post;
    this.setState({ post });
  }

  updatePostField(value, fieldType) {
    const { post } = this.state;
    post[fieldType] = value;

    this.setState({ post });
  }

  savePost() {
    const { post } = this.state;
    post.postDate = this.state.postDate.format('M.D.YYYY');

    this.props.savePost(post);

    this.props.toggleModal();
  }

  render() {
    return (
      <div className="post-modal">
        <ModalComponent closeModal={this.props.toggleModal}>
          <ModalBodyComponent closeModal={this.props.toggleModal}>
            <span>Title</span>
            <input type="text" value={this.state.post.postTitle} onChange={(e) => { this.updatePostField(e.target.value, 'postTitle'); }} />
            <span>Author</span>
            <select value={this.state.post.postAuthor} onChange={(e) => { this.updatePostField(e.target.value, 'postAuthor'); }}>
              {this.state.authorOptions.map((author) => {
                return (
                  <option key={author} value={author}>{author}</option>
                );
              })}
            </select>
            <span>Date</span>
            <input type="text" value={this.state.post.postDate} onChange={(e) => { this.updatePostField(e.target.value, 'postDate'); }} />
            <span>Tags (separated by commas)</span>
            <input type="text" value={this.state.post.postTags} onChange={(e) => { this.updatePostField(e.target.value, 'postTags'); }} />
            <span>Post Snippet</span>
            <textarea type="text" value={this.state.post.postSnippet} onChange={(e) => { this.updatePostField(e.target.value, 'postSnippet'); }} />
            <span>Post Body</span>
            <textarea type="text" value={this.state.post.postBody} onChange={(e) => { this.updatePostField(e.target.value, 'postBody'); }} />
            <span>Status</span>
            <select value={this.state.post.postStatus} onChange={(e) => { this.updatePostField(e.target.value, 'postStatus'); }}>
              {this.state.statusOptions.map((status) => {
                return (
                  <option key={status} value={status}>{status}</option>
                );
              })}
            </select>
            <div className="save-post-container">
              <button>Save Post</button>
              <button onClick={this.props.toggleModal}>Cancel</button>
            </div>
          </ModalBodyComponent>
        </ModalComponent>
      </div>
    );
  }
}

PostModal.propTypes = {
  post: PropTypes.shape({}),
  toggleModal: PropTypes.func.isRequired,
  savePost: PropTypes.func
};

PostModal.defaultProps = {
  post: {
    postStatus: '',
    postTitle: '',
    postAuthor: '',
    postDate: null,
    postTags: '',
    postSnippet: '',
    postBody: 0,
  },
  savePost: () => {}
};