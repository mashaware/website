import React from "react"
import { Circle } from "./circle"
import styles from "./projects.module.scss"

export const Projects = ()=>(
    <div className={styles.container}>
     <Circle colour="pink">
      <strong>
        Mastercard <br />
        live client
        <br />
      </strong>
      group
      <br />
      onboarding
    </Circle> 
    <Circle colour="yellow">
      <strong>
        Ski Deal Comparison
        <br />
        live client
        <br />
      </strong>
      group
      <br />
      e-commerce
    </Circle>
    <Circle colour="orange">tabby cat</Circle></div>)