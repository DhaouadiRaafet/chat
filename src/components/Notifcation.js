import React, { Component } from 'react';
import soundfile from '../assets/alarm.mp3'
import Sound from 'react-sound'

 class Notification extends Component {
render() {
 return (
   <Sound
   url={soundfile}
   playStatus={Sound.status.PLAYING}
   onLoading={this.handleSongLoading}
   onPlaying={this.handleSongPlaying}
   onFinishedPlaying={this.handleSongFinishedPlaying}
   />
  );
 }
}

export default Notification;