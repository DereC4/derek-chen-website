'use client';

import React, { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

type ThemeMode = 'light' | 'dark' | 'system';

type DarkModeTogglerProps = {
    defaultMode?: ThemeMode;
};

const STORAGE_KEY = 'theme-preference';

const resolveSystemTheme = (): 'light' | 'dark' => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const DarkModeToggler: React.FC<DarkModeTogglerProps> = ({ defaultMode = 'system' }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        const storedMode = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
        const initialMode = storedMode ?? defaultMode;
        const resolvedTheme = initialMode === 'system' ? resolveSystemTheme() : initialMode;

        const root = document.documentElement;
        root.dataset.theme = resolvedTheme;
        setTheme(resolvedTheme);
        setMounted(true);
    }, [defaultMode]);

    const toggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        const root = document.documentElement;

        root.dataset.theme = nextTheme;
        localStorage.setItem(STORAGE_KEY, nextTheme);
        setTheme(nextTheme);
    };

    const isDark = theme === 'dark';
    const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

    return (
        <button
            type='button'
            onClick={toggleTheme}
            aria-label={label}
            title={label}
            className='inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground hover:opacity-80 transition-opacity duration-300'
        >
            {mounted ? isDark ? <FiSun size={18} /> : <FiMoon size={18} /> : <FiMoon size={18} />}
        </button>
    );
};

export default DarkModeToggler;
