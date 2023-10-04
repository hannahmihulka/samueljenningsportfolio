import React from 'react';
import "../styles/music.css";

const Music = () => {
    return (
        <div className="music-container">
            <ul className="music-links">
                <li><a href="https://othersuns.bandcamp.com/">Bandcamp</a></li>
                <li><a href="https://open.spotify.com/artist/1v3pVslaWVLSAWLazo1wGU?si=xJJpAlE-TqmhGCSAUh6TtQ">Spotify</a></li>
                <li><a href="https://music.apple.com/us/artist/other-suns/1445978805">Apple Music</a></li>
                <li><a href="https://www.youtube.com/channel/UCZSi6k3UOMDdBBoqeoblJyA">YouTube</a></li>
            </ul>
        </div>
    );
};

export default Music;
