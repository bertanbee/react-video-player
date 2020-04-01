import React from 'react';
import ReactPlayer from 'react-player';
import { FaPlay, FaVolumeUp } from 'react-icons/fa';
import { FaExpand } from 'react-icons/fa'
import './styles.css';

export default function First() {   
    return (
        <>
        <div className="player-video">
        <ReactPlayer url='https://www.youtube.com/watch?v=PMUt0lShZfs' playing id="video-screen"/>
        <div className="progress-bar">
         </div>
        <div className="video-controllers">
             <div className="buttons-left">
                <button ><FaPlay id="play-button" className="hover-class"></FaPlay></button>
                <p className="hover-class" id="need-margin">--:--/--:--</p>

            </div>

            <div className="buttons-right">
                <button><FaVolumeUp className="hover-class" id="volume"></FaVolumeUp></button>
                <button><FaExpand className="hover-class"></FaExpand></button>
            </div>
        </div>
        </div>
        </>
    );
}