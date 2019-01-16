import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';

import { Editor, EditorState, RichUtils, convertFromHTML, convertToRaw, getDefaultKeyBinding } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

import 'draft-js/dist/Draft.css';
import './textEditor.scss';

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

export default class TextEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: props.editorContent || EditorState.createEmpty(),
      editorContent: props.editorContent ? props.editorContent : TextEditor.defaultProps.editorContent
    };

    this.onEditorChange = this.onEditorChange.bind(this);
    this.handleEditorKeyCommand = this.handleEditorKeyCommand.bind(this);
    this.mapKeyToEditorCommand = this.mapKeyToEditorCommand.bind(this);
    this.toggleBlockType = this.toggleBlockType.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
  }

  onEditorChange(editorState) {
    this.setState({ editorState });

    this.props.onEditorChange(editorState, this.props.editorName);
  }

  handleEditorKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onEditorChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  mapKeyToEditorCommand(e) {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        this.state.editorState,
        4, /* maxDepth */
      );
      if (newEditorState !== this.state.editorState) {
        this.onEditorChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }

  toggleBlockType(blockType) {
    this.onEditorChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  toggleInlineStyle(inlineStyle) {
    this.onEditorChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  getBlockStyle(block) {
    switch (block.getType()) {
      case 'blockquote': return 'text-editor-blockquote';
      default: return null;
    }
  }

  render() {
    let classes = 'text-editor';
    const contentState = this.state.editorState.getCurrentContent();
    if(!contentState.hasText()) {
      if(contentState.getBlockMap().first().getType() !== 'unstyled') {
        classes += ' hide-placeholder';
      }
    }

    return (
     <div className={classes}>
        <BlockStyleControls editorState={this.state.editorState} onToggle={this.toggleBlockType} />
        <InlineStyleControls editorState={this.state.editorState} onToggle={this.toggleInlineStyle} />
        <Editor
          blockStyleFn={this.getBlockStyle}
          customStyleMap={styleMap}
          editorState={this.state.editorState}
          handleKeyCommand={this.handleEditorKeyCommand}
          keyBindingFn={this.mapKeyToEditorCommand}
          onChange={this.onEditorChange}
          placeholder={this.props.placeholder}
          spellCheck
        />
      </div>
    );
  }
}

TextEditor.propTypes = {
  editorName: PropTypes.string.isRequired,
  onEditorChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  editorContent: PropTypes.string
};

TextEditor.defaultProps = {
  placeholder: '',
  editorContent: ''
};