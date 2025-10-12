import React from 'react';

type LogoIconProps = {
    src?: string; 
    Svg?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>; 
    alt?: string;
    size?: number;
    circle?: boolean;
};

// 10.12.2025 svg for icons and small things webp/image files for actual images
// raster images - photos
// vectors - icons logos

export default function LogoIcon({ src, Svg, alt = 'logo', size = 24, circle = false }: LogoIconProps) {
    const imgStyle: React.CSSProperties = {
        width: size,
        height: size,
        objectFit: 'contain',
        display: 'block',
        borderRadius: circle ? '50%' : undefined,
    };

    if (Svg) {
        const SvgComponent = Svg;
        return <SvgComponent width={size} height={size} aria-label={alt} role="img" />;
    }

    if (src) {
        return <img src={src} alt={alt} style={imgStyle} />;
    }

    return null;
}