import React from "react";
import { HealperContext } from "../context";
import CompA from "./CompA";

const Form =(props)=>{
    const healperContext= React.useContext(HealperContext);
    return(
        <div>
            <h1>Form</h1>
            <p>My Count: {healperContext.count}</p>
            <input type={"text"} placeholder={"Name"} value={healperContext.name} onChange={(e)=>healperContext.setName(e.target.value)} />
            <p>My Name: {healperContext.name}</p>
            <CompA />
        </div>
    );
}
export default Form;