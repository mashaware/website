import React from "react"
import styles from "./contactLogos.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const query = graphql`
  fragment imageQuery on File {
    childImageSharp {
      fixed(width: 30, height: 30) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  query {
    linkedin: file(relativePath: { eq: "logos/linkedin.png" }) {
      ...imageQuery
    }
    gmail: file(relativePath: { eq: "logos/gmail.png" }) {
      ...imageQuery
    }
    medium: file(relativePath: { eq: "logos/medium.png" }) {
      ...imageQuery
    }
  }
`

export const ContactLogos = () => {
  const { linkedin, gmail, medium } = useStaticQuery(query)
  return (
    <div className={styles.logos}>
      <a href="mailto:&#109;&#097;&#115;&#104;&#097;&#119;&#097;&#114;&#101;&#046;&#117;&#120;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
        <Img
          fixed={gmail.childImageSharp.fixed}
          alt="send a message to my gmail account"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/mashaware/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fixed={linkedin.childImageSharp.fixed} alt="my linkedin profile" />
      </a>
      <a
        href="https://medium.com/@mashaware"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fixed={medium.childImageSharp.fixed} alt="my posts on medium" />
      </a>
    </div>
  )
}
