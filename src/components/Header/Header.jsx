import React, { useState } from "react";
import "./Header.css";
import HeaderDropdown from "./HeaderDropdown";
import { Drawer, Box} from "@mui/material";
import MobileDrawer from "./MobileDrawer";

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
                icon: "",
            },
            {
                title: "Our Team",
                icon: "",
            },
            {
                title: "Blog",
                icon: "",
            },
        ],
    },
    {
        title: "Careers",
        hasMenu: false,
        menuItems: [],
    },
    {
        title: "About",
        hasMenu: false,
        menuItems: [],
    },
];

const Header = () => {
    const [myHeaderLinks, setMyHeaderLinks] = useState(headerLinks);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    function handleMobileMenu() {}

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        //changes the function state according to the value of open
        setIsDrawerOpen(open);
    };

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
                <div className="mobile-hamburger">
                    <img
                        src="icon-menu.svg"
                        alt="mobile menu"
                        onClick={toggleDrawer(true)}
                    />

                    <Drawer
                        //from which side the drawer slides in
                        anchor="right"
                        //if open is true --> drawer is shown
                        open={isDrawerOpen}
                        //function that is called when the drawer should close
                        onClose={toggleDrawer(false)}
                        //function that is called when the drawer should open
                        onOpen={toggleDrawer(true)}
                    >
                        {/* The inside of the drawer */}
                        <Box
                            sx={{
                                p: 2,
                                height: 1,
                                backgroundColor: "#fff",
                            }}
                        >
                            <div className="close-icon-container">
                                <img
                                    src="icon-close-menu.svg"
                                    alt="icon close menu"
                                    onClick={toggleDrawer(false)}
                                />
                            </div>
                            <MobileDrawer items={myHeaderLinks}/>
                        </Box>
                    </Drawer>
                </div>
            </nav>
        </header>
    );
};

export default Header;
