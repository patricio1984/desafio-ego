import React from "react";

const BurgerIcon = React.forwardRef(({open, ref, ...props}) => (
  <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
    <div className="bar1" key="b1" />
    <div className="bar2" key="b2" />
    <div className="bar3" key="b3" />
  </div>
));

export default BurgerIcon;

