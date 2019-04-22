import React from "react"
import face from "../images/my face.png"
import book from "../images/book.png"
import wireframes from "../images/wireframes.png"
import mug from "../images/mug.png"
import pen from "../images/pen.png"
import sitemap from "../images/sitemap.png"
import stickies from "../images/stickies.png"
import styles from "./hero.module.scss"
import { ContactLogos } from "./contactLogos"
import { Columns, Column } from "./columns"

const Anim = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <img src={face} className={styles.face} />
        <img src={book} className={styles.book}/> 
        <img src={pen} className={styles.pen} />
        <img src={wireframes} className={styles.wireframes} />
        <img src={stickies} className={styles.stickies} />
        <img src={sitemap} className={styles.sitemap} />
        <img src={mug} className={styles.mug} />{" "}
      </div>
    </div>
  )
}
export const Hero = () => (
  <div className={styles.outer}>
    <div className={styles.col}>
      Hi! I’m Masha, a UX designer & doodler with a background in language
      teaching and psychology ready to disrupt learning.
      <ContactLogos />
    </div>
      <Anim />
  </div>
)
