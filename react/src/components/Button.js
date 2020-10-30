import React from 'react';
import './Button.css';

const Button  = props =>
<div className = "button-wrapper">
     <div onClick={()=> props.handleClick(props.children)}
        >{props.children}</div>
    

</div>

export default Button;