import React from 'react'
import { useTheme } from '../context/themeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div>
            <div className="switch">
                <label>
                    <input
                        type="checkbox"
                        onChange={toggleTheme}
                        checked={theme === "dark"}
                    />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}

export default Navbar