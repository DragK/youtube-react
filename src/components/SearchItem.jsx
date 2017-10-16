import React from 'react';
import './SearchItem.css';

export default class SearchItem extends React.Component {
  render() {
    let {snippet, id} = this.props.properties;

    return (
      <div className="video">
        <header>
          <iframe 
            title={snippet.title} 
            className="media" 
            width="100%"
            src={"https://www.youtube-nocookie.com/embed/" + id.videoId} 
            frameborder="0" 
            allowfullscreen
          ></iframe>
          <div className="videos-details">
            <h3>{snippet.title}</h3>
            <p>{snippet.description}</p>
          </div>          
        </header>
      </div>
    );
  }
}