import * as React from "react";

import { RowContainer, ColContainer, ProgressBar, ThemeParagraph } from "../components/spotifyPlayer.styled";
import DefaultAlbumPic from "../images/default_album.png";

import fetch from 'node-fetch';
import { useInterval } from "../hooks/useIntervals";

// Spotify player component updates to most recent song played
const SpotifyPlayer = () => {
    const delay = 1000;
    const [song_details, setSongDetails] = React.useState({
        name: '',
        link: '',
        artists: [],
        artist_links: [],
        played_at: 0,
        image_url: '',
    });
    const [player_details, setPlayerDetails] = React.useState({
        progress_ms: 0,
        duration_ms: 0,
    });
    async function setStates(song_data){
        // Only if song_data is not empty do we update the state
        if (song_data && 'name' in song_data) {
            // Updates the state with the new song data otherwise
            setSongDetails(() => {
                return {
                    name: song_data.name,
                    link: song_data.uri,
                    artists: song_data.artists,
                    artist_links: song_data.artist_links,
                    
                    played_at: song_data.played_at,

                    image_url: song_data.image_url,
                };
            });
            setPlayerDetails(()=>{
                return {
                    progress_ms: song_data.progress_ms,
                    duration_ms: song_data.duration_ms,
                };
            });
        } else {
            // Resets state to default values if 10 minutes have passed since the song was played
            if (song_details.played_at + 600000 <  new Date().getTime()) {
                setSongDetails(() => {
                    return {
                        name: '',
                        link: '',
                        artists: [],
                        artist_links: [],

                        played_at: 0,

                        image_url: '',
                    };
                });
                setPlayerDetails(()=>{
                    return {
                        progress_ms: 0,
                        duration_ms: 0,
                    };
                });
            }
        }
    }
    async function retrieveSetSongs(){
        try {
            const result = await fetch('https://dhuynh.ca/api/retrieve_played_songs', {
                method: 'GET',
            });
            const song_data = await result.json();
            
            setStates(song_data);
        } catch (error) {
            console.log(error);
        }
    }
    // Updates the state every second
    useInterval(retrieveSetSongs, delay);
    return(
        <RowContainer>
            <a href={song_details.link} target='_blank' rel='noreferrer' style={{display: "block"}}>
                <div style={{position: "relative"}}>
                    <span className="material-icons" style={{fontSize:"2em", position:"absolute", color:'white', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,.5)', top:"50%", left:"50%",  transform: 'translate(-50%, -50%)'}}>
                    {song_details.name === '' ? 'play_arrow' : 'pause'}
                    </span>
                    <img src={song_details.image_url === '' ? DefaultAlbumPic : song_details.image_url} alt='Song Album' style={{width: '64px', height: '64px'}}/>
                </div>
            </a>
            <ColContainer>
                <ThemeParagraph> 
                    { song_details.name === '' ? 'Filler' : song_details.name }
                </ThemeParagraph>
                <ThemeParagraph>
                    { song_details.artists.join(', ') === '' ? 'Me' : song_details.artists.join(', ') }
                </ThemeParagraph>
                <RowContainer style={{padding: 0}}>
                    <ProgressBar value={player_details.progress_ms} max={player_details.duration_ms}/>
                    <ThemeParagraph>
                        {Math.floor((player_details.duration_ms - player_details.progress_ms) / 60000)}:{((((player_details.duration_ms - player_details.progress_ms)  % 60000) / 1000).toFixed(0) < 10 ? '0' : '') + (((player_details.duration_ms - player_details.progress_ms)  % 60000) / 1000).toFixed(0)}
                    </ThemeParagraph>
                </RowContainer>
            </ColContainer>
        </RowContainer>
    );
};
export default SpotifyPlayer;
