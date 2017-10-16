import React from 'react';
import axios from 'axios';

import SearchItem from './components/SearchItem';
import './App.css';
import YT_API from './constants';

export default class App extends React.Component {
  state = {
    videosToRender: [],
    timeout: undefined
  }

  render() {
    let input;

    return (
      <div>
        <header>
          <h1>Search videos on YouTube:</h1>
          <input 
            className="search-input"
            type="search"
            ref={
              node => input = node
            }
            onChange={() => {
              this.searchInputHandler(input.value)
            }}
            placeholder="Type something you search..."
          />
        </header>
        {
          this.state.videosToRender.map((item, index) => {
            return (
              <SearchItem properties={item} key={index} />
            )
          })
        }
      </div>
    );
  }

  searchInputHandler = (text) => {    
    if (text.length < 1) 
      return false;

    this.waitOnEndedTyping()
      .then(bool => {
        this.searchVideos(text);
      })
      .catch(err => {
        console.error(err);
      })
  }

  waitOnEndedTyping = () => {
    return new Promise((resolve, reject) => {
      clearTimeout(this.state.timeout);
      this.setState({timeout: setTimeout(function () {
        resolve(true);
      }, 750)});
    });
  }

  searchVideos = (text) => {
    axios({
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
        params: {
          q: text,
          part: "snippet",
          type: 'video',
          key: YT_API,
          maxResults: 10
        }      
    }).then(res => {
      this.setState({videosToRender: res.data.items});
    }).catch( err => {
      console.error(err);
    })
  }

  componentWillMount() {
  }
}