import React from 'react';
import Songs from './Songs';
import axios from 'axios';


 export default class Album extends React.Component{
  constructor(props){
    super();
    this.state = {album: {}};
  }

  componentDidMount(){
    this.props.selectAlbum(this.props.routeParams.albumId)
  }

  render(){
        
    const album = this.props.selectedAlbum;
  	const currentSong = this.props.currentSong;
  	const isPlaying = this.props.isPlaying;
  	const toggleOne = this.props.toggleOne;
	  return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
      <Songs
        songs={album.songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne} />
    </div>
  ); 
  }

}

