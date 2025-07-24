import { useState, useRef, useCallback } from 'react';

export const useBackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const initializeAudio = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/background-music.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3; // Set to 30% volume by default
      
      audioRef.current.addEventListener('canplaythrough', () => {
        setIsLoaded(true);
      });
      
      audioRef.current.addEventListener('error', () => {
        console.warn('Background music file not found. Please add your audio file as /public/background-music.mp3');
      });
    }
  }, []);

  const toggleMusic = useCallback(() => {
    initializeAudio();
    
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        console.warn('Could not play background music. User interaction may be required.');
      });
      setIsPlaying(true);
    }
  }, [isPlaying, initializeAudio]);

  const setVolume = useCallback((volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, volume));
    }
  }, []);

  return {
    isPlaying,
    isLoaded,
    toggleMusic,
    setVolume
  };
};