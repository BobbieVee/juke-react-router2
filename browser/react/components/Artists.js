import React from 'react';
import {Link} from 'react-router';

class Artists extends React.Component{
  constructor(props){
    super();
  }

  render(){
    return (
      <div>
      <h3>Artists</h3>
        <div className="list-group">
        {
          this.props.artists.map(artist => {
            return (
              <div className="list-group-item" key={artist.id}>
                <Link  to={`/artists/${artist.id}`}>{artist.name} </Link>
                {
                  this.props.children ? 
                  React.cloneElement(this.props.children, {
                    selectedAlbum: this.props.selectedAlbum,
                    currentSong: this.props.currentSong,
                    isPlaying: this.props.isPlaying,
                    toggleOne: this.props.toggleOne,
                    albums: this.props.albums,
                    selectAlbum: this.props.selectAlbum, 
                    artists: this.props.artists,
                    selectedArtist: this.props.selectedArtist,
                    selectArtist: this.props.selectArtist
                  })
                 : null
                }     
              </div>
            )    
          })
        }
      </div>
    </div>
   )
    
  }

}




export default Artists;
