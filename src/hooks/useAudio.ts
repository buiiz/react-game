import React, { useState, useEffect, useMemo } from "react";

export const useAudio = (url: string, autorepaly: boolean) => {
  const audio = useMemo(() => new Audio(url), [url]);
  const [playing, setPlaying] = useState(false);

  if (autorepaly === true) audio.loop = true

  const toggle = (value: boolean | undefined) => {
    if (typeof value === 'boolean') {
      setPlaying(value);
    } else {
      setPlaying(!playing);
    }
  }

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return { play: audio.play, pause: audio.pause, toggle };
};
