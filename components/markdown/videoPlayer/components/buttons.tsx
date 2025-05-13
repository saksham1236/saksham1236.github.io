"use client";
import * as Tooltip from '@radix-ui/react-tooltip';
import {
  FullscreenButton,
  MuteButton,
  PlayButton,
  useMediaState,
} from '@vidstack/react';

import {
    MdPlayArrow as PlayIcon,
    MdZoomInMap as FullscreenExitIcon,
    MdVolumeOff as MuteIcon,
    MdFullscreen as FullscreenIcon,
    MdPause as PauseIcon,
    MdVolumeUp as VolumeHighIcon,
    MdVolumeDown as VolumeLowIcon,
} from "react-icons/md";

export interface MediaButtonProps {
  tooltipSide?: Tooltip.TooltipContentProps['side'];
  tooltipAlign?: Tooltip.TooltipContentProps['align'];
  tooltipOffset?: number;
}

export const buttonClass =
  'group ring-media-focus relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full outline-none ring-inset hover:bg-white/20 focus-visible:ring-4 aria-disabled:hidden';

export const tooltipClass =
  'animate-out fade-out slide-out-to-bottom-2 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in data-[state=delayed-open]:slide-in-from-bottom-4 z-10 rounded-sm bg-black/90 px-2 py-1 text-sm font-medium text-white parent-data-[open]:hidden';

export function Play({
  tooltipOffset = 0,
  tooltipSide = 'top',
  tooltipAlign = 'center',
}: MediaButtonProps) {
  const isPaused = useMediaState('paused');
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <PlayButton className={buttonClass}>
          {isPaused ? (
            <PlayIcon className="w-7 h-7 translate-x-px" />
          ) : (
            <PauseIcon className="w-7 h-7" />
          )}
        </PlayButton>
      </Tooltip.Trigger>
      <Tooltip.Content
        className={tooltipClass}
        side={tooltipSide}
        align={tooltipAlign}
        sideOffset={tooltipOffset}
      >
        {isPaused ? 'Play' : 'Pause'}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export function Mute({
  tooltipOffset = 0,
  tooltipSide = 'top',
  tooltipAlign = 'center',
}: MediaButtonProps) {
  const volume = useMediaState('volume'),
    isMuted = useMediaState('muted');
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <MuteButton className={buttonClass}>
          {isMuted || volume == 0 ? (
            <MuteIcon className="w-7 h-7" />
          ) : volume < 0.5 ? (
            <VolumeLowIcon className="w-7 h-7" />
          ) : (
            <VolumeHighIcon className="w-7 h-7" />
          )}
        </MuteButton>
      </Tooltip.Trigger>
      <Tooltip.Content
        className={tooltipClass}
        side={tooltipSide}
        align={tooltipAlign}
        sideOffset={tooltipOffset}
      >
        {isMuted ? 'Unmute' : 'Mute'}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export function Fullscreen({
  tooltipOffset = 0,
  tooltipSide = 'top',
  tooltipAlign = 'center',
}: MediaButtonProps) {
  const isActive = useMediaState('fullscreen');
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <FullscreenButton className={buttonClass}>
          {isActive ? (
            <FullscreenExitIcon className="w-7 h-7" />
          ) : (
            <FullscreenIcon className="w-7 h-7" />
          )}
        </FullscreenButton>
      </Tooltip.Trigger>
      <Tooltip.Content
        className={tooltipClass}
        side={tooltipSide}
        align={tooltipAlign}
        sideOffset={tooltipOffset}
      >
        {isActive ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}
