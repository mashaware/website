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

const Anim = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <img src={face} className={styles.face} alt="Illustration of my face."/>
        <img src={book} className={styles.book} alt="Illustration of a book"/> 
        <img src={pen} className={styles.pen} alt="Illustration of a pen" />
        <img src={wireframes} className={styles.wireframes} alt="Illustration of some wireframes"/>
        <img src={stickies} className={styles.stickies} alt="Illustration of some sticky notes." />
        <img src={sitemap} className={styles.sitemap} alt="Illustration of a sitemap." />
        <img src={mug} className={styles.mug} alt="Illustration of a mug of tea." />{" "}
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
