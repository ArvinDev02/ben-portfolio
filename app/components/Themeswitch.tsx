"use client"

import { useEffect } from 'react';
import { PiSunDimFill } from 'react-icons/pi';
import { BiSolidMoon } from 'react-icons/bi';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const ThemeSwitch: React.FC = () => {
    const { theme, setTheme } = useTheme();

    // Set the default theme to dark mode
    useEffect(() => {
        if (!theme) {
            setTheme('dark');
        }
    }, [theme, setTheme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const isActive = theme === 'light';

    const switchClasses = `${isActive ? 'active' : 'not-active'} transition-transform duration-500 ease-in-out`;

    return (
        <div className="themeswitch-wrapper" onClick={toggleTheme}>
            <button className={switchClasses}>
                <Image
                    className="sun-icon dark-mode-icon"
                    src="/images/sun-icon.png"
                    fill
                    sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                    priority={true}
                    alt=""
                />
                <Image
                    className="moon-icon dark-mode-icon"
                    src="/images/moon-icon.png"
                    fill
                    sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                    priority={true}
                    alt=""
                />
            </button>
        </div>
    );
};

export default ThemeSwitch;
