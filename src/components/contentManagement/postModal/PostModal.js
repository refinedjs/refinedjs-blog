import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

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
      dateFocused: false,
      authorOptions: ['Yakira Bristol', 'Josh Gonzalez'],
      statusOptions: ['draft', 'published']
    };

    this.updateDate = this.updateDate.bind(this);
    this.updateFocus = this.updateFocus.bind(this);
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

  updateDate(date) { //eslint-disable-line class-methods-use-this
    this.setState({ postDate: date });
  }

  updateFocus(value) {
    this.setState({ dateFocused: value.focused });
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
            <div className="post-item">
              <span>Title</span>
              <input className="form-control" type="text" value={this.state.post.postTitle} onChange={(e) => { this.updatePostField(e.target.value, 'postTitle'); }} />
            </div>
            <div className="post-item">
              <span>Author</span>
              <select className="form-control" value={this.state.post.postAuthor} onChange={(e) => { this.updatePostField(e.target.value, 'postAuthor'); }}>
                {this.state.authorOptions.map((author) => {
                  return (
                    <option key={author} value={author}>{author}</option>
                  );
                })}
              </select>
            </div>
            <div className="post-item">
              {/*<span>Date</span>
              <input type="text" className="form-control" value={this.state.post.postDate} onChange={(e) => { this.updatePostField(e.target.value, 'postDate'); }} />*/}
              <SingleDatePicker
                id='postDate'
                placeholder='Select Date'
                onDateChange={this.updateDate}
                onFocusChange={this.updateFocus}
                focused={this.state.dateFocused}
                date={this.state.postDate}
                numberOfMonths={1}
                showClearDate
                showDefaultInputIcon
                isOutsideRange={() => { return false; }}
              />
            </div>
            <div className="post-item">
              <span>Tags (separated by commas)</span>
              <input type="text" className="form-control" value={this.state.post.postTags} onChange={(e) => { this.updatePostField(e.target.value, 'postTags'); }} />
            </div>
            <div className="post-item">
              <span>Post Snippet</span>
              <textarea type="text" className="form-control" rows="5" value={this.state.post.postSnippet} onChange={(e) => { this.updatePostField(e.target.value, 'postSnippet'); }} />
            </div>
            <div className="post-item">
              <span>Post Body</span>
              <textarea type="text" className="form-control" rows="5" value={this.state.post.postBody} onChange={(e) => { this.updatePostField(e.target.value, 'postBody'); }} />
            </div>
            <div className="post-item">
              <span>Status</span>
              <select className="form-control" value={this.state.post.postStatus} onChange={(e) => { this.updatePostField(e.target.value, 'postStatus'); }}>
                {this.state.statusOptions.map((status) => {
                  return (
                    <option key={status} value={status}>{status}</option>
                  );
                })}
              </select>
            </div>
            <div className="save-post-container">
              <button className='btn btn-light'>Save Post</button>
              <button className='btn btn-light' onClick={this.props.toggleModal}>Cancel</button>
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
    postBody: '',
  },
  savePost: () => {}
};