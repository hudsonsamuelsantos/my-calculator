import React from "react";
import "./Button.css"

export default props =>
    <button className={
        `button
        ${props.double ? "double" : ""}
        ${props.triple ? "triple" : ""}
        ${props.operation ? "operation" : ""}
    `}
        onClick={event => props.click && props.click(event.target.innerHTML)}
    >    
        {props.label}
    </button>
