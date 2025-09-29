'use client';
import { VideoPlayer, VideoPlayerContent, VideoPlayerControlBar, VideoPlayerMuteButton, VideoPlayerPlayButton, VideoPlayerSeekBackwardButton, VideoPlayerSeekForwardButton, VideoPlayerTimeDisplay, VideoPlayerTimeRange, VideoPlayerVolumeRange, } from '@/components/ui/shadcn-io/video-player';
const VideoPlayerWrapper = (src, autoPlay, loop) => (<VideoPlayer className="contain-paint aspect-video rounded-3xl md:rounded-4xl border">
    <VideoPlayerContent crossOrigin="anonymous" muted preload="auto" slot="media" src={src} autoPlay={autoPlay} loop={loop}/>
    <VideoPlayerControlBar>
      <VideoPlayerPlayButton />
      <VideoPlayerSeekBackwardButton />
      <VideoPlayerSeekForwardButton />
      <VideoPlayerTimeRange />
      <VideoPlayerTimeDisplay showDuration/>
      <VideoPlayerMuteButton />
      <VideoPlayerVolumeRange />
    </VideoPlayerControlBar>
  </VideoPlayer>);
export default VideoPlayerWrapper;
