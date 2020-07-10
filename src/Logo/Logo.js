import React from 'react';
import LogoImg from '../Images/mb.png';
import classes from './Logo.css';
const Logo =(props)=>(
    <div className={classes.Logo}>
<img src={LogoImg} alt="backgroung pic"/>
    </div>
    
);
export default Logo;