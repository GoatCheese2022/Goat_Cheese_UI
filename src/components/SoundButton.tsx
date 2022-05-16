import React from 'react';
import Icon from "components/Icon";
import {Button} from "styled-minimal";

interface props {
  audioFile?: string
}


const playSound = (url: string | undefined) => {
  if (url) {
    alert("urlllllllllll" + url);
    url = "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3";
    let audio = new Audio(url);
    audio.play();
  }
  else {
    alert("No audio file found. Please record your preferred pronunciation!");
  }
}

export default function SoundButton(props: props) {
  return (
    <Button
      onClick={() => playSound(props.audioFile)}
    >
      <Icon name="bell"/>
    </Button>
  )
}
