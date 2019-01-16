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
      postDate: modalPost.postDate ? moment(modalPost.postDate, 'M.D.YYYY') : null,
      dateFocused: false,
      authorOptions: ['Yakira Bristol', 'Josh Gonzalez'],
      statusOptions: ['draft', 'published']
    };

    this.updatePostField = this.updatePostField.bind(this);    
    this.updateDate = this.updateDate.bind(this);
    this.updateFocus = this.updateFocus.bind(this);
    this.savePost = this.savePost.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const post = nextProps.post ? Object.assign({}, nextProps.post) : PostModal.defaultProps.post;
    const postDate = nextProps.post.postDate ? moment(nextProps.post.postDate, 'M.D.YYYY') : null;
    this.setState({ post, postDate });
  }

  updatePostField(e) {
    const { post } = this.state;
    const fieldType = e.target.name;
    post[fieldType] = e.target.value;

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

    const formattedTags = post.split(',').map((tag) => { return tag.trim(); }).join(', ');
    post.postTags = formattedTags;

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
              <input className="form-control" type="text" name="postTitle" value={this.state.post.postTitle} onChange={this.updatePostField} />
            </div>
            <div className="post-item">
              <span>Author</span>
              <select className="form-control" name="postAuthor" value={this.state.post.postAuthor} onChange={this.updatePostField}>
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
                displayFormat="M.D.YYYY"
              />
            </div>
            <div className="post-item">
              <span>Tags (separated by commas)</span>
              <input type="text" className="form-control" name="postTags" value={this.state.post.postTags} onChange={this.updatePostField} />
            </div>
            <div className="post-item">
              <span>Post Snippet</span>
              <textarea type="text" className="form-control" name="postSnippet" rows="5" value={this.state.post.postSnippet} onChange={this.updatePostField} />
            </div>
            <div className="post-item">
              <span>Post Body</span>
              <textarea type="text" className="form-control" name="postBody" rows="5" value={this.state.post.postBody} onChange={this.updatePostField} />
            </div>
            <div className="post-item">
              <span>Status</span>
              <select className="form-control" name="postStatus" value={this.state.post.postStatus} onChange={this.updatePostField}>
                {this.state.statusOptions.map((status) => {
                  return (
                    <option key={status} value={status}>{status}</option>
                  );
                })}
              </select>
            </div>
            <div className="save-post-container">
              <button className='btn btn-light' onClick={this.savePost}>Save Post</button>
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