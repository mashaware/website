import React from "react"
import { Circle } from "./circle"
import styles from "./projects.module.scss"

export const Projects = () => (
  <div className={styles.container}>
    <Circle colour="pink">
      <strong>Mastercard</strong> <br />
      live client
      <br />
      group
      <br />
      onboarding
    </Circle>
    <Circle colour="yellow">
      <strong>Ski Deal Comparison</strong>
      <br />
      live client
      <br />
      group
      <br />
      e-commerce
    </Circle>
    <Circle colour="orange">
      {" "}
      <strong>BXe /ˈbɪzi/</strong>
      <br />
      concept project <br />
      solo <br />
      gardening organiser
    </Circle>
  </div>
)
