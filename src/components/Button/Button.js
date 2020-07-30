import React from 'react'
import styles from "./Button.module.css"

function Button(props) {
    return (
        <div className = {styles.container}>
            <div onClick={props.click} className={styles.button}>
                {props.value}
            </div>
        </div>
        
    )
}

export default Button
