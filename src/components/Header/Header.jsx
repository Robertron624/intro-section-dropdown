import React, { useState } from "react";
import "./Header.css";
import HeaderDropdown from "./HeaderDropdown";

const headerLinks = [
    {
        title: "Features",
        hasMenu: true,
        menuItems: [
            {
                title: "Todo List",
                icon: "icon-todo.svg",
            },
            {
                title: "Calendar",
                icon: "icon-calendar.svg",
            },
            {
                title: "Reminders",
                icon: "icon-reminders.svg",
            },
            {
                title: "Planning",
                icon: "icon-planning.svg",
            },
        ],
    },
    {
        title: "Company",
        hasMenu: true,
        menuItems: [
            {
                title: "History",
                icon: ""
            },
            {
                title: "Our Team",
                icon: ""
            },
            {
                title: "Blog",
                icon: ""
            },
        ],
    },
    {
        title: "Careers",
        hasMenu: false,
        menuItems: []
    },
    {
        title: "About",
        hasMenu: false,
        menuItems: []
    },
];

const Header = () => {
    const [myHeaderLinks, setMyHeaderLinks] = useState(headerLinks);

    return (
        <header>
            <nav className="flex">
                <div className="logo-links flex">
                    <img src="logo.svg" alt="logo" className="logo" />
                    <ul className="header-links flex">
                        {myHeaderLinks.map((link, i) => (
                            <HeaderDropdown
                            key={i}
                                title={link.title}
                                hasMenu={link.hasMenu}
                                menuItems={link.menuItems}
                            />
                        ))}
                    </ul>
                </div>
                <div className="account-links flex">
                    <button className="login-btn">Login</button>
                    <button className="signup-btn">Register</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
