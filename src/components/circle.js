import React from "react"
import styles from "./circle.module.scss"

export const Circle = ({ children, colour }) => (
  <div
    className={styles.circle}
    style={{
      background: colour,
    }}
  >
    <div className={styles.contents}>{children}</div>
  </div>
)
