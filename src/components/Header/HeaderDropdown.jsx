import React, { useState } from "react";
import "./HeaderDropdown.css";

const HeaderDropdown = ({ title, hasMenu = false, menuItems }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuOpen() {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="menu-link" onClick={handleMenuOpen}>
            <div className="drowdown-text">
                {title}
                {hasMenu && (
                    <img
                        src={`${isMenuOpen ? 'icon-arrow-up.svg': 'icon-arrow-down.svg'}`}
                        alt="arrow icon down"
                        className="arrow-down"
                    />
                )}
                <div className={`menu-container ${isMenuOpen ? 'menu-visible': 'menu-hidden'}`}>
                    {menuItems.length > 0
                        ? menuItems.map((menuItem, i) => (
                              <div key={i} className='menu-item'>
                                  {menuItem.icon && (
                                      <img
                                          src={menuItem.icon}
                                          alt="menu item icon"
                                      />
                                  )}
                                  <span>{menuItem.title}</span>
                              </div>
                          ))
                        : ""}
                </div>
            </div>
        </div>
    );
};

export default HeaderDropdown;
