import React from "react"
import face from "../images/my face.png"
import book from "../images/book.png"
import wireframes from "../images/wireframes.png"
import mug from "../images/mug.png"
import pen from "../images/pen.png"
import sitemap from "../images/sitemap.png"
import stickies from "../images/stickies.png"
import styles from "./hero.module.css"

export const Hero = ()=>{
 
   return (<div className={styles.hero}>
   <img height={"300px"} src={face}/>    
   <img height={"40px"} src={book}/> 
   <img height={"40px"} src={pen}/>    
   <img height={"40px"} src={wireframes}/>    
   <img height={"40px"} src={stickies}/>    
   <img height={"40px"} src={sitemap}/>    
   <div className={styles.mugWrapper}><div className={styles.mugInner}><img  src={mug} className={styles.mug}/>  </div></div>




</div>)
}