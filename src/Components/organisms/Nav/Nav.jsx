import React from "react";
import Title from '../../atoms/Title/Title'

require("./Nav.css");

const Nav = (props) => {
    return (
        <div className="navBar">
            <div>
                <Title title={props.text}/>
            </div>
            <div className="navBar__link">
               <a href='https://www.thecocktaildb.com/api.php'><h5>API source</h5> </a>
            </div>
        </div>
    );
};

export default Nav;
