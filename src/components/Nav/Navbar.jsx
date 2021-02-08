import React from 'react';
import Sidebar from "./Sidebar";
import BurgerIcon from "./BurgerIcon";
import Popup from "reactjs-popup";

const contentStyle = {
    background: "rgba(255,255,255,0)",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    border: "none",
  };

const Navbar = () => {
    return (
        <>
            <div>
                <Popup
                modal
                overlayStyle={{ background: "rgba(255,255,255,0.7" }}
                contentStyle={contentStyle}
                closeOnDocumentClick={false}
                trigger={open => <BurgerIcon open={open} />}
                >
                {close => <Sidebar close={close} />}
                </Popup>
                <p className="menu-btn">Menú</p>
            </div>
        </>
    );
}
 
export default Navbar;