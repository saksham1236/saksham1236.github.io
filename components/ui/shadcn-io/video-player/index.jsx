'use client';
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { MediaControlBar, MediaController, MediaMuteButton, MediaPlayButton, MediaSeekBackwardButton, MediaSeekForwardButton, MediaTimeDisplay, MediaTimeRange, MediaVolumeRange, } from 'media-chrome/react';
import { cn } from '@/lib/utils';
const variables = {
    '--media-primary-color': 'var(--primary)',
    '--media-secondary-color': 'var(--background)',
    '--media-text-color': 'var(--foreground)',
    '--media-background-color': 'var(--background)',
    '--media-control-hover-background': 'var(--accent)',
    '--media-font-family': 'var(--font-sans)',
    '--media-live-button-icon-color': 'var(--muted-foreground)',
    '--media-live-button-indicator-color': 'var(--destructive)',
    '--media-range-track-background': 'var(--border)',
};
export const VideoPlayer = (_a) => {
    var { style } = _a, props = __rest(_a, ["style"]);
    return (<MediaController style={Object.assign(Object.assign({}, variables), style)} {...props}/>);
};
export const VideoPlayerControlBar = (props) => (<MediaControlBar {...props}/>);
export const VideoPlayerTimeRange = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<MediaTimeRange className={cn('p-2.5', className)} {...props}/>);
};
export const VideoPlayerTimeDisplay = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<MediaTimeDisplay className={cn('p-2.5', className)} {...props}/>);
};
export const VideoPlayerVolumeRange = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<MediaVolumeRange className={cn('p-2.5', className)} {...props}/>);
};
export const VideoPlayerPlayButton = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<MediaPlayButton className={cn('p-2.5', className)} {...props}/>);
};
export const VideoPlayerSeekBackwardButton = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<MediaSeekBackwardButton className={cn('p-2.5', className)} {...props}/>);
};
export const VideoPlayerSeekForwardButton = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<MediaSeekForwardButton className={cn('p-2.5', className)} {...props}/>);
};
export const VideoPlayerMuteButton = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<MediaMuteButton className={cn('p-2.5', className)} {...props}/>);
};
export const VideoPlayerContent = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<video className={cn('mt-0 mb-0', className)} {...props}/>);
};
