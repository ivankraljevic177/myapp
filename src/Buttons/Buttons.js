import React from 'react';
import styles from '../Buttons/Button.module.css';

function Buttons()
{
    return(
        <div>
            <button className = {styles.fBtn}>FORWARD</button>
            <button className = {styles.bBtn}>BACK</button>
            <button className = {styles.lBtn}>LEFT</button>
            <button className = {styles.rBtn}>RIGHT</button>

        </div>



    );
}
export default Buttons;