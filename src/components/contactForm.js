import React from "react"
import styles from "./contactForm.module.css"

export const ContactForm = () => (
  <form
    name="contact"
    method="post"
    action="/success"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
  <div class={styles.form}>
    <input type="hidden" name="bot-field" />
    <label htmlFor="name">name</label>
    <input type="text" name="name" id="name" required />
    <label htmlFor="email">email</label>
    <input type="text" name="email" id="email" required />
    <label htmlFor="message">your message</label>
    <textarea name="message" id="message" required />
    <input type="submit" value="send"/></div>
  </form>
)
 