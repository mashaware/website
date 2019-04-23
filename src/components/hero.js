import React from "react"
import styles from "./hero.module.scss"
import { ContactLogos } from "./contactLogos"
import { useStaticQuery, graphql } from "gatsby"

const getSrc = _ => _.childImageSharp.fixed.src
const Anim = () => {
  const {face, book, wireframes, mug, pen, sitemap, stickies, } = useStaticQuery(
     graphql`
fragment imageQ on File {
  childImageSharp {
    fixed(width: 200) {
      ...GatsbyImageSharpFixed
    }
  }
}

{
  face: file(relativePath: {eq: "my face.png"}) {
    ...imageQ
  }
  book: file(relativePath: {eq: "book.png"}) {
    ...imageQ
  }
  wireframes: file(relativePath: {eq: "wireframes.png"}) {
    ...imageQ
  }
  mug: file(relativePath: {eq: "mug.png"}) {
    ...imageQ
  }
  pen: file(relativePath: {eq: "pen.png"}) {
    ...imageQ
  }
  sitemap: file(relativePath: {eq: "sitemap.png"}) {
    ...imageQ
  }
  stickies: file(relativePath: {eq: "stickies.png"}) {
    ...imageQ
  }
}
 `)
 console.log(face)
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <img  src={getSrc(face)}
          className={styles.face}
          alt="Illustration of my face."
        />
        <img  src={getSrc(book)} className={styles.book} alt="Illustration of a book" />
        <img  src={getSrc(pen)} className={styles.pen} alt="Illustration of a pen" />
        <img 
           src={getSrc(wireframes)}
          className={styles.wireframes}
          alt="Illustration of some wireframes"
        />
        <img
           src={getSrc(stickies)}
          className={styles.stickies}
          alt="Illustration of some sticky notes."
        />
        <img
           src={getSrc(sitemap)}
          className={styles.sitemap}
          alt="Illustration of a sitemap."
        />
        <img
           src={getSrc(mug)}
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
