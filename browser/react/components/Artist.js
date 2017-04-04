import React from 'react';

import Albums from './Albums';
import Songs from './Songs';


class Artist extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.selectArtist(this.props.routeParams.artistId);
	}



	render(){
		const artist = this.props.selectedArtist; 
		return (
			<div>
			  <h3>{artist.name}</h3>
			 <Albums albums={artist.albums} selectAlbum={this.props.selectAlbum}/>
			 <Songs 
			 songs={artist.songs}
			  currentSong={this.props.currentSong}
		      isPlaying={this.props.isPlaying}
			  toggleOne={this.props.toggleOne}
			 />
			</div>
		)	
	}


	
}

export default Artist;