import React from 'react';
import './SearchItem.css';

export default class SearchItem extends React.Component {
  state = {
    isImages: true
  }

  render() {
    let {snippet, id} = this.props.properties;
    let {state} = this;

    return (
      <div className="video">
        { state.isImages ? (
          <img 
            src={snippet.thumbnails.medium.url} 
            title="Click to watch"
            alt={snippet.title}
            onClick={ () => {
              this.setState({isImages: !state.isImages});
            }} />
        ) : (
          <iframe width="560" height="315" src={"https://www.youtube-nocookie.com/embed/" + id.videoId} frameborder="0" allowfullscreen></iframe>
        )}
        
        <div className="videos-details">
          <h3>{snippet.title}</h3>
          <p>{snippet.description}</p>
        </div>
      </div>
    );
  }
}