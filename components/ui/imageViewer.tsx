import Popup from 'reactjs-popup';
import React from 'react';

type ImageViewerProps = {
    src: string,
    alt: string
}

export function ImageViewer(props: ImageViewerProps) {
    const {src, alt} = props;
    return (
        <div id = "image-view">
            <img src={src} alt = {alt}>
            </img>
        </div>
    )
}