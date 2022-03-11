import React from "react";

require("./Nav.css");

const Nav = (props) => {
    return (
        <div className="navBar">
            <div>
                <h1>{props.text}</h1>
            </div>
            <div className="navBar__link">
               <a href={'https://www.thecocktaildb.com/api.php'}><h5>API library</h5> </a>
            </div>
        </div>
    );
};

export default Nav;
