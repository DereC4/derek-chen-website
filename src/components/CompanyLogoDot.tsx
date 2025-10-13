import Image, { StaticImageData } from 'next/image';
import React from 'react';

type LogoIconProps = {
    src?: string | StaticImageData;
    Svg?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    alt?: string;
    size?: number;
    circle?: boolean;
};

// 10.12.2025 svg for icons and small things webp/image files for actual images
// raster images - photos
// vectors - icons logos

export default function LogoIcon({
    src,
    Svg,
    alt = 'icon photo for a company',
    size = 40,
    circle = true,
}: LogoIconProps) {
    const imgStyle: React.CSSProperties = {
        position: 'relative',
        width: size,
        height: size,
        // 10.12.2025 - block is on a new line and occupies the full width of parent container, inline-block flow horizontally
        display: 'inline-block',
        overflow: 'hidden',
        lineHeight: 0,
        borderRadius: circle ? '50%' : undefined,
    };

    if (Svg) {
        const SvgComponent = Svg;
        return (
            <div style={imgStyle}>
                <SvgComponent width={size} height={size} aria-label={alt} role='img' />
            </div>
        );
    }

    if (!src) {
        return null;
    }

    if (typeof src === 'object' && 'src' in src) {
        return (
            <div style={imgStyle}>
                <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} />
            </div>
        );
    }

    return (
        <div style={imgStyle}>
            <img src={String(src)} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
        </div>
    );
}
