"use client"

import '@vidstack/react/player/styles/default/theme.css';
import { Poster, MediaPlayer, MediaProvider, type MediaPlayerInstance, type MediaCanPlayEvent, type MediaCanPlayDetail } from '@vidstack/react';
import VideoLayout from './components/layouts/video-layout';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

export default function VideoPlayer({
  src,
  title,
  className,
  poster,
  autoplay,
  loop,
}: {
  src: string;
  title: string;
  className?: string;
  poster?: string;
  autoplay?: boolean
  loop?: boolean
}) {
  let player = useRef<MediaPlayerInstance>(null);

  function onCanPlay(detail: MediaCanPlayDetail, nativeEvent: MediaCanPlayEvent) {
    // Custom logic for when the media can play
  }

  return (
    <MediaPlayer
      className={cn("video-player w-full aspect-video bg-slate-900 text-white font-sans overflow-hidden rounded-lg ring-media-focus data-[focus]:ring-4", className)}
      title={title}
      src={src}
      playsInline
      onCanPlay={onCanPlay}
      ref={player}
      autoPlay={autoplay}
      loop={loop}
    >
      <MediaProvider />
      <VideoLayout />
    </MediaPlayer>
  );
}