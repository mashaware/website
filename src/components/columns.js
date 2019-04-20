// import PropTypes from "prop-types"
import React from "react"
import styles from "./columns.module.scss"

export const Columns = ({borders, children, className}) => (
<div className={`${styles.columns} ${borders && styles.borders} ${className}`}>
    {children}
    </div>
)

export const Column = ({className, children}) => (<div className={`${styles.column} ${className}`}>
    {children}
</div>)