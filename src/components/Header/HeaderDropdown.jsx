import React from "react";
import "./HeaderDropdown.css";

const HeaderDropdown = ({ title, hasMenu = false, menuItems }) => {

  console.log(menuItems)

    return (
        <div className="menu-link">
            <div className="drowdown-text">
                {title}
                {hasMenu && (
                    <img
                        src="icon-arrow-down.svg"
                        alt="arrow icon down"
                        className="arrow-down"
                    />
                )}
                <div className="menu-container">
                    {/* {menuItems.map((menuItem) => (
                        <div>
                          {menuItem && <img src={menuItem.icon} alt="menu item icon" /> }<span>{menuItem.title}</span>
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    );
};

export default HeaderDropdown;
