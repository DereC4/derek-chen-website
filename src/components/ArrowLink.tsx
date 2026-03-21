import Link from 'next/link';

type ArrowLinkProps = {
    label: string;
    href: string;
    className?: string;
    /**
     * Specifies whether to open the linked document in the current tab (_self), a new tab (_blank), the parent frame (_parent), or the full window (_top).
     */
    target?: '_self' | '_blank' | '_parent' | '_top';
    rel?: string;
};

export default function ArrowLink({ label, href, className = '', target = '_self', rel }: ArrowLinkProps) {
    const computedRel = target === '_blank' ? (rel ?? 'noopener noreferrer') : rel;

    return (
        <Link
            href={href}
            target={target}
            rel={computedRel}
            className={`inline-flex items-center gap-1.5 font-semibold text-lg md:text-xl text-foreground transition-colors duration-200 hover:text-primary ${className}`}
        >
            <span>{label}</span>
            <span className='text-sm md:text-base translate-y-[-1px]'>↗</span>
        </Link>
    );
}
