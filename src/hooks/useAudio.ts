import { useState, useEffect, useMemo } from "react";

type useAudioType = {
  play: () => void;
  pause: () => void;
  toggle: (value: boolean | undefined) => void;
}

export const useAudio = (url: string): useAudioType => {
  const audio = useMemo(() => new Audio(url), [url]);
  const [playing, setPlaying] = useState(false);

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
