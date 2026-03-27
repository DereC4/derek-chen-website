import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi2';

export default function WebringRouter() {
    return (
        <section
            aria-label='UT Webring navigation'
            className='mx-auto mt-8 w-full max-w-xl bg-background/60 p-6 text-center backdrop-blur-sm'
        >
            <h2 className='text-lg font-semibold text-foreground'>UT Webring</h2>

            <div className='mt-5 flex items-center justify-center gap-4'>
                <a
                    href='https://api.jolteon.me/webring/prevlink'
                    className='inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary hover:text-primary'
                >
                    <HiOutlineArrowLeft aria-hidden='true' size={16} />
                    <span>Prev</span>
                </a>

                <a
                    href='https://api.jolteon.me/webring/randomlink'
                    className='text-muted-foreground underline-offset-4 transition-colors duration-200 hover:text-primary hover:underline'
                >
                    Random Site
                </a>
                <a
                    href='https://webring.jolteon.me'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-muted-foreground underline-offset-4 transition-colors duration-200 hover:text-primary hover:underline'
                >
                    View Ring
                </a>
                <a
                    href='https://api.jolteon.me/webring/nextlink'
                    className='inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary hover:text-primary'
                >
                    <span>Next</span>
                    <HiOutlineArrowRight aria-hidden='true' size={16} />
                </a>
            </div>
        </section>
    );
}
