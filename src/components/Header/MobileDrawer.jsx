import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import "./MobileDrawer.css";

const MobileDrawer = ({ items }) => {
    return (
        <div className="menu-links">
            {items.map((link, i) =>
                link.menuItems == false ? (
                    <a href="#" key={i}>
                        {link.title}
                    </a>
                ) : (
                    <Accordion key={i}>
                        <AccordionSummary
                            expandIcon={
                                <img
                                    src="icon-arrow-down.svg"
                                    alt="expand menu"
                                />
                            }
                        >
                            <span>{link.title}</span>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="menu-items-container">
                                {link.menuItems.map((menuItem, i) => (
                                    <div
                                        className="menu-item-container"
                                        key={i}
                                    >
                                        {menuItem.icon && (
                                            <img
                                                src={menuItem.icon}
                                                alt="menu icon"
                                            />
                                        )}
                                        <span>{menuItem.title}</span>
                                    </div>
                                ))}
                            </div>
                        </AccordionDetails>
                    </Accordion>
                )
            )}
        </div>
    );
};

export default MobileDrawer;
