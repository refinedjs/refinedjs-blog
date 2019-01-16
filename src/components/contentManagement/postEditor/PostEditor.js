import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import { ActionCreators } from '../../../actions';

import PostAPI from '../../../../framework/api';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { Editor, EditorState, ContentState, RichUtils, convertFromHTML } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

import TextEditor from './textEditor/TextEditor';

import 'draft-js/dist/Draft.css';
import './postEditor.scss';

class PostEditor extends Component {
  constructor(props) {
    super(props);

    const editorPost = props.location.state && props.location.state.post ? Object.assign({}, props.location.state.post) : PostEditor.defaultProps.post;

    this.state = {
      bodyClasses: 'col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1',
      post: editorPost,
      postDate: editorPost.postDate ? moment(editorPost.postDate, 'M.D.YYYY') : null,
      dateFocused: false,
      authorOptions: ['Yakira Bristol', 'Josh Gonzalez'],
      statusOptions: ['draft', 'published'],
      snippetEditorState: EditorState.createEmpty(),
      bodyEditorState: EditorState.createEmpty()
    };

    this.setDomEditorRef = ref => this.domEditor = ref;

    this.updatePostField = this.updatePostField.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.updateFocus = this.updateFocus.bind(this);
    this.onEditorChange = this.onEditorChange.bind(this);
    this.savePost = this.savePost.bind(this);
    this.cancelPostUpdate = this.cancelPostUpdate.bind(this);
  }

  componentDidMount() {
    const newState = Object.assign({}, this.state);
    console.log('The post', newState.post);
    if(newState.post.postSnippet !== '') {
      const convertedSnippet = convertFromHTML(newState.post.postSnippet);
      console.log('The converted snippet: ', convertedSnippet);
      const contentState = ContentState.createFromBlockArray(convertedSnippet.contentBlocks, convertedSnippet.entityMap);
      newState.snippetEditorState = EditorState.createWithContent(contentState);
    }

    if(newState.post.postBody !== '') {
      const convertedBody = convertFromHTML(newState.post.postBody);
      const contentState = ContentState.createFromBlockArray(convertedBody.contentBlocks, convertedBody.entityMap);
      newState.bodyEditorState = EditorState.createWithContent(contentState);
    }

    this.setState(newState);
  }

  componentWillReceiveProps(nextProps) {
    const post = nextProps.location.state && nextProps.location.state.post ?
      Object.assign({}, nextProps.location.state.post) : 
      PostEditor.defaultProps.post;
    const postDate = post.postDate ? moment(post.postDate, 'M.D.YYYY') : null;
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

  onEditorChange(editorState, editorType) {
    this.setState({ [editorType]: editorState });
  }

  handleEditorKeyCommand(command, editorState, editorType) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onEditorChange(newState, editorType);
      return 'handled';
    }
    return 'not-handled';
  }

  savePost() { //eslint-disable-line class-methods-use-this
    const { post, snippetEditorState, bodyEditorState } = this.state;
    const saveType = post.id ? 'put' : 'post';
    const formattedTags = post.postTags.split(',').map((tag) => { return tag.trim(); }).join(', ');

    if(post.postAuthor == '') {
      post.postAuthor = this.state.authorOptions[0];
    }
    post.postDate = this.state.postDate.format('M.D.YYYY');
    post.postTags = formattedTags;
    post.postSnippet = stateToHTML(snippetEditorState.getCurrentContent());
    post.postBody = stateToHTML(bodyEditorState.getCurrentContent());

    if(post.postStatus == '') {
      post.postStatus = this.state.statusOptions[0];
    }

    if(!post.id) {
      post.id = '009wer9wer8akjhsd' + this.props.posts.blogPosts.length;
    }

    this.props.savePost(post);

    const savePostConfig = { route: '/api/posts', params: null, headers: null, data: post };
    console.log(saveType, savePostConfig);
    
    PostAPI[saveType](savePostConfig).then((response) => {
      this.props.history.goBack();
    }).catch((err) => {
      console.log('Error saving post: ', post, err);
    });
  }

  cancelPostUpdate() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="post-container container-fluid">
        <div className="row">
          <div className={this.state.bodyClasses}>
            <div className="post-item">
              <div className="field-title">Title</div>
              <input className="form-control" type="text" name="postTitle" value={this.state.post.postTitle} onChange={this.updatePostField} />
            </div>
            <div className="post-item">
              <div className="field-title">Author</div>
              <select className="form-control" name="postAuthor" value={this.state.post.postAuthor} onChange={this.updatePostField}>
                {this.state.authorOptions.map((author) => {
                  return (
                    <option key={author} value={author}>{author}</option>
                  );
                })}
              </select>
            </div>
            <div className="post-item">
              <div className="field-title">Date</div>
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
              <div className="field-title">Tags (separated by commas)</div>
              <input type="text" className="form-control" name="postTags" value={this.state.post.postTags} onChange={this.updatePostField} />
            </div>
            <div className="post-item">
              <div className="field-title">Post Snippet</div>
              <TextEditor editorName='snippetEditorState' onEditorChange={this.onEditorChange} placeholder='Enter a post snippet' />
            </div>
            <div className="post-item">
              <div className="field-title">Post Body</div>
              <TextEditor editorName='bodyEditorState' onEditorChange={this.onEditorChange} placeholder='Say something' />
            </div>
            <div className="post-item">
              <div className="field-title">Status</div>
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
              <button className='btn btn-light' onClick={this.cancelPostUpdate}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostEditor.propTypes = {
  post: PropTypes.shape({})
};

PostEditor.defaultProps = {
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
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEditor);