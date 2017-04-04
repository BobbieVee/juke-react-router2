import React from 'react';
import {Link} from 'react-router'

import Albums from './Albums';
import Songs from './Songs';


class Artist extends React.Component{
	constructor(props){
		super();
	}

	componentDidMount(){
		this.props.selectArtist(this.props.routeParams.artistId);
	}

	render(){
		const selectedArtistId = this.props.routeParams.artistId;
	    const children = this.props.children;
	    const propsToPassToChildren = {
			currentSong: this.props.currentSong,
		    isPlaying: this.props.isPlaying,
		    toggleOne: this.props.toggleOne,
		    selectedArtist: this.props.selectedArtist,
		    songs: this.props.selectedArtist.songs,
		    albums: this.props.selectedArtist.albums,
		    selectAlbum: this.props.selectAlbum
		}		
		const artist = this.props.selectedArtist; 
		return (
			<div>
			  <h3>{ artist.name }</h3>
			  <ul className="nav nav-tabs">
			    <li><Link to={`/artists/${selectedArtistId}/albums`}>ALBUMS</Link></li>
			    <li><Link to={`/artists/${selectedArtistId}/songs`}>SONGS</Link></li>
			  </ul>
			  { children && React.cloneElement(children, propsToPassToChildren) }
			</div>			
		)	
	}
}

export default Artist;