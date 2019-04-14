import PropTypes from "prop-types"
import React from "react"
import styles from "./timeline.module.css"
export const Timeline = ({ children }) => <div className={styles.timeline}>{children}</div>

export const Entry = ({ place, children }) => (
  <div className={styles.entry}>
    <div className={styles.place}>{place}</div>
    <div className={`${styles.circle} ${place === 'london'&&styles.london} ${place === 'tomsk'&&styles.tomsk}`} />
    <div className={styles.legend}>{children}</div>
  </div>
)
