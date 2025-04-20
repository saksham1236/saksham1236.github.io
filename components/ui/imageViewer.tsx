import React from 'react';
import Image from 'next/image';
type ImageViewerProps = {
    src: string,
    alt: string
}

export function ImageViewer(props: ImageViewerProps) {
    const {src, alt} = props;
    return (
        <div id = "image-view">
            <Image src={src} alt = {alt}/>
        </div>
    )
}