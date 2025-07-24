import { useState, useRef, useCallback } from 'react';

export const useBackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const initializeAudio = useCallback(() => {
    if (!audioRef.current) {
      // Try multiple possible audio file formats
      const audioSources = [
        '/littleroot-town.mp3',
        '/background-music.mp3',
        '/pokemon-music.mp3'
      ];
      
      audioRef.current = new Audio();
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4; // Set to 40% volume by default
      
      // Try to load the first available audio source
      let currentSourceIndex = 0;
      const tryNextSource = () => {
        if (currentSourceIndex < audioSources.length) {
          audioRef.current!.src = audioSources[currentSourceIndex];
          audioRef.current!.load();
          currentSourceIndex++;
        }
      };
      
      audioRef.current.addEventListener('canplaythrough', () => {
        setIsLoaded(true);
      });
      
      audioRef.current.addEventListener('error', () => {
        tryNextSource();
      });
      
      // Start with the first source
      tryNextSource();
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