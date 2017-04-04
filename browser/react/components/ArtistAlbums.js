import React from 'react';
import Albums from './Albums';

const ArtistAlbums = (props)=> {
	return(
		<div>
			<h2> ArtistAlbums </h2>
		 	<Albums albums={props.selectedArtist.albums} selectAlbum={props.selectAlbum}/>
		</div>
	)
}

export default ArtistAlbums;