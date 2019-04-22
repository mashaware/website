import React from "react"
import PropTypes from "prop-types"
import styles from "./section.module.scss"
export const Section = ({ name, colour, bleed, children }) => (
  <div className={styles.wrapper}>
    <div
      className={styles.sidebar}
      style={{
        background: colour,
      }}
    >
      {name}
    </div>
    <div
      className={styles.container}
      style={{
        background: bleed && colour,
      }}
      id={name}
    >
      {children}
    </div>
  </div>
)

Section.propTypes = {
  name: PropTypes.string,
  colour: PropTypes.string,
  bleed: PropTypes.bool,
  children: PropTypes.node.isRequired,
}
