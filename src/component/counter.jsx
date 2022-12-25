import React from "react";
import { HealperContext } from "../context";

const Counter =(props)=>{
    const healperContext = React.useContext(HealperContext);
    return(
        <div>
            <h2>Counter</h2>
            <p>Name: {healperContext.name}</p>
            <p>Count: {healperContext.count}</p>
            <button onClick={(e)=> healperContext.setCount(healperContext.count+1)} >Increment</button>
        </div>
    );

}
export default Counter; 