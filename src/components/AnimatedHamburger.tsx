import React from 'react';

interface AnimatedHamburgerProps {
    isOpen: boolean;
    onClick: () => void;
}

const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = ({ isOpen, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='md:hidden z-[300] cursor-pointer flex flex-col gap-1 w-6 h-6 justify-center'
            aria-label='Toggle menu'
        >
            <span
                className={`block w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 origin-center ${
                    isOpen ? 'rotate-45 translate-y-2' : 'rotate-0'
                }`}
            />
            <span
                className={`block w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <span
                className={`block w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 origin-center ${
                    isOpen ? '-rotate-45 -translate-y-2' : 'rotate-0'
                }`}
            />
        </button>
    );
};

export default AnimatedHamburger;
