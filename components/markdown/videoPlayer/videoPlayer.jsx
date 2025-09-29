"use client";
import "@vidstack/react/player/styles/default/theme.css";
import { useRef } from "react";
import { isYouTubeProvider, MediaPlayer, MediaProvider, } from "@vidstack/react";
import { cn } from "@/lib/utils";
import VideoLayout from "./components/layouts/video-layout";
export default function VideoPlayer({ src, title, className, autoplay, loop, muted = true, }) {
    const player = useRef(null);
    function onProviderChange(provider) {
        if (isYouTubeProvider(provider)) {
            provider.cookies = true;
        }
    }
    return (<MediaPlayer className={cn("video-player ring-media-focus aspect-video w-full overflow-hidden rounded-3xl md:rounded-4xl bg-slate-900 font-sans text-primary data-[focus]:ring-4", className)} onProviderChange={onProviderChange} 
    // controls
    title={title} src={src} playsInline ref={player} autoPlay={autoplay} loop={loop} muted={muted} load="visible">
      <MediaProvider />
      <VideoLayout />
    </MediaPlayer>);
}
