// import PropTypes from "prop-types"
import React from "react"
import styles from "./columns.module.css"

export const Columns = ({borders, children}) => {
    <div className={`${styles.columns} ${borders && styles.borders}`}>
    {children}
    </div>
}

export const Column = ({children}) => (<div className="column">
    {children}
</div>)