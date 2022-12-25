import React from "react";
import {HealperContext} from "../context";
import {ThemeContext} from "../context";


const CompF =(props) =>{
    const healperContext = React.useContext(HealperContext);
    const themeContext = React.useContext(ThemeContext);
    return(
        <div>
            <h2>CompF</h2>
            <p>Count: {healperContext.count}</p>
            <p>Theme: {themeContext.theme}</p>
        </div>
    );
}
export default CompF;