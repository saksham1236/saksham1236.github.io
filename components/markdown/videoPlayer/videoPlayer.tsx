"use client"

import "@vidstack/react/player/styles/default/theme.css"

import { useRef } from "react"

import {
  isYouTubeProvider,
  type MediaProviderAdapter,
  MediaPlayer,
  MediaProvider,
  type MediaPlayerInstance,
} from "@vidstack/react"

import { cn } from "@/lib/utils"
import VideoLayout from "./components/layouts/video-layout"

export default function VideoPlayer({
  src,
  title,
  className,
  autoplay,
  loop,
  muted = true,
}: {
  src: string
  title: string
  className?: string
  poster?: string
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
}) {
  const player = useRef<MediaPlayerInstance>(null)
  function onProviderChange(provider: MediaProviderAdapter | null) {
    if(isYouTubeProvider(provider)){
      provider.cookies = true;
    }
  }
  return (
    <MediaPlayer
      className={cn(
        "video-player ring-media-focus aspect-video w-full overflow-hidden rounded-lg bg-slate-900 font-sans text-white data-[focus]:ring-4",
        className
      )}
      onProviderChange={onProviderChange}
      // controls
      title={title}
      src={src}
      playsInline
      ref={player}
      autoPlay={autoplay}
      loop={loop}
      muted={muted}
      load="visible"
    >
      <MediaProvider />
      <VideoLayout />
    </MediaPlayer>
  )
}
