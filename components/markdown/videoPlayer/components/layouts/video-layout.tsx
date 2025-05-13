"use client"
import * as Tooltip from '@radix-ui/react-tooltip';
import { Controls, Gesture } from '@vidstack/react';
import * as Buttons from '../buttons';
import * as Sliders from '../sliders';
import { TimeGroup } from '../time-group';
// Offset tooltips/menus/slider previews in the lower controls group so they're clearly visible.
const popupOffset = 30;

export default function VideoLayout() {
    return (
        <>
            <Gestures />
            <Controls.Root className="media-controls-layer absolute inset-0 z-10 flex h-full w-full flex-col bg-gradient-to-t from-black/10 to-transparent transition-opacity">
                <Tooltip.Provider>
                    <div className="flex-1" />
                    <Controls.Group className="flex w-full items-center px-2">
                    </Controls.Group>
                    <Controls.Group className="-mt-0.5 flex w-full items-center px-2 pb-2 gap-1">
                        <div className='flex h-12 bg-sheet-primary backdrop-blur-lg rounded-full p-1 shadow-lg'>
                            <div className='play'>
                                <Buttons.Play tooltipAlign="start" tooltipOffset={popupOffset} />
                            </div>
                            <div className="flex items-center justify-center pr-3">
                                <TimeGroup />
                            </div>
                        </div>
                        <div className='volume flex p-1 bg-sheet-primary backdrop-blur-lg rounded-full shadow-md'>
                            <Buttons.Mute tooltipOffset={popupOffset} />
                            {/* <div className='w-24 vol-hover:w-56 transition-all'><Sliders.Volume /></div> */}
                        </div>
                        <div className='slider flex w-full px-5 py-1.5 bg-sheet-primary backdrop-blur-lg rounded-full shadow-md'>
                            <Sliders.Time />
                        </div>
                        <div className="flex-1" />
                        <div className='flex p-1 bg-sheet-primary backdrop-blur-lg rounded-full shadow-md'>
                            <Buttons.Fullscreen tooltipAlign="end" tooltipOffset={popupOffset} />
                        </div>
                    </Controls.Group>
                </Tooltip.Provider>
            </Controls.Root>
        </>
    );
}

function Gestures() {
    return (
        <>
            <Gesture
                className="absolute inset-0 z-0 block h-full w-full"
                event="pointerup"
                action="toggle:paused"
            />
            <Gesture
                className="absolute inset-0 z-0 block h-full w-full"
                event="dblpointerup"
                action="toggle:fullscreen"
            />
            <Gesture
                className="absolute left-0 top-0 z-10 block h-full w-1/5"
                event="dblpointerup"
                action="seek:-10"
            />
            <Gesture
                className="absolute right-0 top-0 z-10 block h-full w-1/5"
                event="dblpointerup"
                action="seek:10"
            />
        </>
    );
}