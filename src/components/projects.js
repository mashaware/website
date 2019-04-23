import React from "react"
import { Circle } from "./circle"
import styles from "./projects.module.scss"
import bee from "../images/bxe.png"

export const Projects = () => (
  <div className={styles.container}>
    <Circle colour="#fda74c">
      <strong>Mastercard</strong> <br />
      live client
      <br />
      group
      <br />
      onboarding
    </Circle>
    <Circle colour="#97fdfc">
      <strong>Ski Deal Comparison</strong>
      <br />
      live client
      <br />
      group
      <br />
      e-commerce
    </Circle>
    <Circle colour="#bf97fd">
 
      <strong>BXe /ˈbɪzi/</strong>
      <br />
      concept project <br />
      solo <br />
      gardening organiser
    </Circle>
  </div>
)
