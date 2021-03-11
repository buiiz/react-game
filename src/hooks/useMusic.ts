import { useState, useEffect, useMemo } from "react";

type useMusicType = {
  play: () => void;
  pause: () => void;
  toggle: (value: boolean | undefined) => void;
}

export const useMusic = (url: string): useMusicType => {
  const audio = useMemo(() => new Audio(url), [url]);
  const [playing, setPlaying] = useState(false);
  audio.loop = true

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

  const stopPlaying = () => setPlaying(false)

  useEffect(() => {
    audio.addEventListener('ended', stopPlaying);
    return () => {
      audio.removeEventListener('ended', stopPlaying);
    };
  }, []);

  return { play: audio.play, pause: audio.pause, toggle };
};
