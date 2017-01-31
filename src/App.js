import React, { Component } from 'react';
//import ReactQuill from 'react-quill';

import './App.css';

import Blocks from './Components/Blocks';

class App extends Component {

  constructor() {
    super();

    this.state = {
      blocks: [],
      title: '',
      subtitle: '',
      content: '',
      value: ''
    };
  }

  handleTextChange(value) {
    this.setState({
      value: value
    })
  }

  handleSubmit(event) {
    Object.keys(this.refs).forEach(function(key) {
      console.log('banana')
      event.preventDefault();
    });

    Object.keys(this.refs).forEach(function(key) {
      const ref = this.refs[key].state;

      console.log(ref);
    });

    let requestBody = {
      title: this.state.title,
      subtitle: this.state.subtitle,
      content: this.state.content,
      blocks: this.state.blocks
    }

    console.log(requestBody);

    event.preventDefault();
  }

  handleBlock(type) {
    let newBlock = {
      content: '',
      type: type
    }

    let newArray = this.state.blocks.slice();
    newArray.push(newBlock);

    this.setState({
      blocks: newArray
    })
  }

  handleTitle(event) {
    this.setState({
        title: event.target.value
    })
  }

  handleSubTitle(event) {
    this.setState({
        subtitle: event.target.value
    })
  }

  handleContent(event) {
    this.setState({
        content: event.target.value
    })
  }

  render() {

    const {
      blocks,
      title,
      subtitle,
      content
    } = this.state;

    return (
      <div className="App">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" onChange={(event) => this.handleTitle(event)} value={title} placeholder="Coolest title known to man" /><br/>
          <input type="text" onChange={(event) => this.handleSubTitle(event)} value={subtitle} placeholder="Coolest subtitle known to aliens" /><br/>
          <textarea onChange={(event) => this.handleContent(event)} value={content} placeholder="Write some badass text here"></textarea><br />
          {(() => {
                return (
                      blocks.map((card, index) => {
                          return (
                              <Blocks ref={"block" + index} key={index} order={index} block={card} />
                          );
                      })
                  );
          })()}
          <input type="submit"/>
        </form>
        <div className="Blocks">
          <button onClick={() => this.handleBlock('image')}>Image</button>
          <button onClick={() => this.handleBlock('text')}>Text</button>
          <button onClick={() => this.handleBlock('video')}>Video</button>
          <button onClick={() => this.handleBlock('stream')}>Stream</button>
        </div>
      </div>
    );
  }
}

export default App;
