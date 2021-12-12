import React, { useRef, useState } from "react";
import sound from "../../music/sound.mp3";

export const PlaySound = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioPlayer = useRef();

  const clickHandler = () => {
    const prevValue = isPlaying;

    setIsPlaying(!isPlaying);

    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  return (
    <div onClick={clickHandler} className="theme-audio-icons">
      <audio ref={audioPlayer} src={sound} loop></audio>

      <i
        className={
          isPlaying
            ? "icon-appear fas fa-volume-mute"
            : "disappear fas fa-volume-mute"
        }
      />

      <i
        className={
          isPlaying
            ? "disappear fas fa-volume-up"
            : "icon-appear fas fa-volume-up"
        }
      />
    </div>
  );
};
