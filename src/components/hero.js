import React from "react"
import styles from "./hero.module.scss"
import { ContactLogos } from "./contactLogos"
import { useStaticQuery, graphql } from "gatsby"

const Anim = () => {
  const {face, book, wireframes, mug, pen, sitemap, stickies, } = useStaticQuery(
     graphql`
   fragment imageQuery on File {
     childImageSharp {
       fixed(width: 200px) {
         ...GatsbyImageSharpFixed
       }
     }
   }
   query {
face: file(relativePath:  { eq: "../images/my face.png" }) {...imageQuery}
book: file(relativePath:  { eq: "../images/book.png" }) {...imageQuery}
wireframes: file(relativePath:  { eq: "../images/wireframes.png" }) {...imageQuery}
mug: file(relativePath:  { eq: "../images/mug.png" }) {...imageQuery}
pen: file(relativePath:  { eq: "../images/pen.png" }) {...imageQuery}
sitemap: file(relativePath:  { eq: "../images/sitemap.png" }) {...imageQuery}
stickies: file(relativePath:  { eq: "../images/stickies.png" }) {...imageQuery}

   }
 `)
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <img
          src={face}
          className={styles.face}
          alt="Illustration of my face."
        />
        <img src={book} className={styles.book} alt="Illustration of a book" />
        <img src={pen} className={styles.pen} alt="Illustration of a pen" />
        <img
          src={wireframes}
          className={styles.wireframes}
          alt="Illustration of some wireframes"
        />
        <img
          src={stickies}
          className={styles.stickies}
          alt="Illustration of some sticky notes."
        />
        <img
          src={sitemap}
          className={styles.sitemap}
          alt="Illustration of a sitemap."
        />
        <img
          src={mug}
          className={styles.mug}
          alt="Illustration of a mug of tea."
        />{" "}
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
