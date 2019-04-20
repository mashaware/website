import React from "react"
import { Column, Columns } from "../components/columns"
import styles from "./skills.module.scss"

export const Skills = ()=> ( <Columns className={styles.skills} >
        <Column>
          <h3> Hard UX skills:</h3>
          <ul>
            <li>user research</li>
            <li>information architecture</li>
            <li>competitor analysis</li>
            <li>affinity mapping</li>
            <li>design studio</li>
            <li>storyboarding</li>
            <li>illustration</li>
            <li>persona</li>
            <li>scenario</li>
            <li>wireframing</li>
            <li>prototyping</li>
            <li>usability testing</li>
          </ul>
        </Column>
        <Column>
          <h3>UX Tools:</h3>
          <ul>
            <li>Sketch</li>
            <li>Figma</li>
            <li>InVision</li>
            <li>Marvel</li>
            <li>Zeplin</li>
            <li>Principle</li>
            <li>Autodesk</li>
            <li>SketchBook</li>
            <li>Miro</li>
            <li>HTML5 (basic)</li>
            <li>CSS (basic)</li>
            <li>Basecamp</li>
            <li>Google Drive</li>
            <li>Trello</li>
            <li>Slack </li>
          </ul>
        </Column>{" "}
        <Column>
          <h3>Soft UX skills:</h3>
          <ul>
            <li>agile</li>
            <li>lean</li>
            <li>design thinking</li>
            <li>facilitation</li>
            <li>brainstorming</li>
            <li>active listening</li>
            <li>standup</li>
            <li>teamwork</li>
            <li>presentation</li>
            <li>public speaking</li>
          </ul>
        </Column>
        <Column>
          <h3>Languages:</h3>
          <ul>
            <li>Russian native</li>
            <li>English fluent</li>
            <li>French intermediate</li>
          </ul>
        </Column>
      </Columns>)