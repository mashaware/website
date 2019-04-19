import React from "react"
import styles from "./contactLogos.module.css"
import { useStaticQuery, graphql } from "gatsby"
import  Img  from 'gatsby-image';
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
    const {linkedin, gmail,medium} = useStaticQuery(
        query
           )   
    return (
      <div className={styles.logos}>

        <a href="#">
          <Img fixed={gmail.childImageSharp.fixed} alt="gmail" />
        </a>
        <a href="#">
     
          <Img fixed={linkedin.childImageSharp.fixed} alt="linkedin" />
        </a>
        <a href="#">
 
          <Img fixed={medium.childImageSharp.fixed} alt="" />
        </a> 
      </div>
    )
    }
    //<Img fluid={linkedin.childImageSharp.fluid} alt="" />