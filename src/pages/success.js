import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Section } from "../components/section";

const SecondPage = () => (
  <Layout>
    <Section name="success" colour="yellowgreen">
    <h1>Form sent succesfully</h1>
    <p>tktktkå</p>
    <Link to="/">Go back to the homepage</Link>
    </Section>
  </Layout>
)

export default SecondPage
