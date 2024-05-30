import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme === 'dark') {
            setDarkMode(true)
            document.body.classList.add("dark-theme")
        }
    }, [])
    const handleChange = (e) => {
        setDarkMode(!darkMode)
        if (!darkMode) {
            document.body.classList.add("dark-theme")
            localStorage.setItem("theme", "dark")
        }
        else {
            document.body.classList.remove("dark-theme")
            localStorage.removeItem("theme")
        }
    }
    return (
        <>
            <nav className="bg-gray-800 py-2 px-6 flex flex-row w-full justify-between">
                <div className="flex flex-row items-center">
                    <NavLink className="text-xl text-white mr-6 hover:text-gray-500 active:scale-95" to="/">TextUtils</NavLink>
                    <ul className="flex flex-row items-center">
                            <NavLink className="text-base text-white hover:text-gray-500 active:scale-95 mr-3" to="/">Home</NavLink>
                            <NavLink className="text-base text-gray-300 hover:text-gray-500 active:scale-95" to="/about">About</NavLink>
                    </ul>
                </div>
                <div className="flex flex-row items-center">
                    <p className="text-white mr-6">Dark Theme</p>
                    <label className="switch mr-6">
                        <input
                            
                            type="checkbox"
                            onChange={(e) => handleChange(e)}
                            checked={darkMode}
                        />
                        <span className='slider'></span>
                    </label>
                </div>
            </nav>
        </>
    )
}

export default Navbar
