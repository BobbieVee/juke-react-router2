import React from 'react';
import {Link} from 'react-router';



class Artist extends React.Component{
	constructor(props){
		super();
		 

	}

	componentDidMount(){
		this.props.selectArtist(this.props.routeParams.artistId);
	}

	render(){
		console.log('props = ', this.props)
		const selectedArtistId = this.props.routeParams.artistId;
	    const children = this.props.children;
	    const propsToPassToChildren = {
			currentSong: this.props.currentSong,
		    isPlaying: this.props.isPlaying,
		    toggleOne: this.props.toggleOne,
		    selectedArtist: this.props.selectedArtist
		}

		return (
			<div>
			  <h3>{ selectedArtist.name }</h3>
			  <ul className="nav nav-tabs">
			    <li><Link to={`/artists/${selectedArtistId}/albums}`}>ALBUMS</Link></li>
			    <li><Link to={`/`}>SONGS</Link></li>
			  </ul>
			  { children && React.cloneElement(children, propsToPassToChildren) }
			</div>
		)

	}
}
export default Artist;