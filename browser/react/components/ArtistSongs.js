import React from 'react';
import Songs from './Songs';

class ArtistSongs extends React.Component{
	constructor(props){
		super();
	}
	render(){
		
	return(
		<div>
			<h2> ArtistSongs </h2>
		 	<Songs 
		 		songs={this.props.selectedArtist.songs} 
		 		selectAlbum={this.props.selectAlbum}
				songs={this.props.songs}
			    currentSong={this.props.currentSong}
			    isPlaying={this.props.isPlaying}
			    toggleOne={this.props.toggleOne}

		 	/>
		</div>
	)
	}
}


export default ArtistSongs;