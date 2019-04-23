import React from "react"
import { Circle } from "./circle"
import styles from "./projects.module.scss"

export const Projects = () => (
  <div className={styles.container}>
    <a
      className={styles.link}
      href="https://medium.com/@mashaware/mastercard-cashpassport-a-ux-case-study-6f0cb03216cf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Circle colour="#fda74c">
        <strong>Mastercard</strong> <br />
        live client
        <br />
        group
        <br />
        onboarding
      </Circle>
    </a>
    <a
      className={styles.link}
      href="https://medium.com/@mashaware/ski-deal-comparison-a-ux-case-study-831d141fd1f5"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Circle colour="#97fdfc">
        <strong>Ski Deal Comparison</strong>
        <br />
        live client
        <br />
        group
        <br />
        e-commerce
      </Circle>
    </a>
    <a
      className={styles.link}
      href="https://medium.com/@mashaware/bxe-%CB%88b%C9%AAzi-a-ux-case-study-8a77f5ed8de1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Circle colour="#bf97fd">
        <strong>BXe /ˈbɪzi/</strong>
        <br />
        concept project <br />
        solo <br />
        gardening organiser
      </Circle>
    </a>
  </div>
)
