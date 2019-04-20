import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section } from "../components/section"
import { Circle } from "../components/circle"
import { Timeline, Entry } from "../components/timeline"
import { Column, Columns } from "../components/columns"
import { ContactForm } from "../components/contactForm"
import { Hero } from "../components/hero"
import { ContactLogos } from "../components/contactLogos"
import { Projects } from "../components/projects"
import { Skills } from "../components/skills"
import { Info } from "../components/info";
import { FAQ } from "../components/faq";
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Section name="hello" colour="#FEF46B">
      <Hero />
    </Section>

    <Section name="projects" colour="rgb(251,208,239)">
      <Projects />
    </Section>
    <Section name="skills" colour="rgb(183,255,238)">
      <Skills />
    </Section>

    <Section name="Background" colour="#A27AFE">
      <Timeline>
        <Entry place="Tomsk">
          2009-2014 <p>Degree in Lingustics & Translation</p>
        </Entry>
        <Entry place="Tomsk">
          2014-2018 <p>Translator & English Tutor</p>
        </Entry>
        <Entry place="Tomsk & London">
          2016-2018 <p>Studied developmental psychology</p>
        </Entry>
        <Entry place="London">
          2018-2019 <p>General Assembly User Experience design immersive</p>
        </Entry>
      </Timeline>
    </Section>
    <Section name="Interests" colour="#99ECFC">
      <Info/>
    </Section>
    <Section colour="rgb(253,204,181)" name="FAQ">
      <FAQ/>
    </Section>
    <Section name="contact" colour="#CAF1D8" bleed>
      <ContactForm />
    </Section>
  </Layout>
)

export default IndexPage
