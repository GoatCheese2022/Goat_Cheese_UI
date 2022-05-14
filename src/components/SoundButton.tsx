import React from 'react';
import Icon from "components/Icon";
import {Button, Text} from "styled-minimal";

interface props {
  url?: string
}

const playSound = (url: string | undefined) => {
  if (url) {
    let audio = new Audio(url);
    audio.play();
  }
  else {
    console.log("No audio file found. Please record your preferred pronunciation!")
  }
}

export default function SoundButton(props: props) {
  return (
    <Button
      onClick={() => playSound(props.url)}
    >
      <Icon name="bell"/>
      <Text ml={2}>Click here!</Text>
    </Button>
  )
}
