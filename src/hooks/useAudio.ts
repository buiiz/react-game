import { useState, useEffect, useMemo } from "react";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { play: audio.play, pause: audio.pause, toggle };
};
