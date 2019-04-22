import React from "react"
import styles from "./contactForm.module.scss"
import { Columns, Column } from "./columns"
import face from "../images/my face.png"
import { ContactLogos } from "./contactLogos"

export const ContactForm = () => (
    <form
      name="contact"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <ContactLogos />
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="name">name</label>
      <input type="text" name="name" id="name" required />
      <label htmlFor="email">email</label>
      <input type="email" name="email" id="email" required />
      <label htmlFor="message">your message</label>
      <textarea name="message" id="message" required />
      <input type="submit" value="send" />
    </form>
)
