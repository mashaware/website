import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section } from "../components/section"
import { Timeline, Entry } from "../components/timeline"
import { ContactForm } from "../components/contactForm"
import { Hero } from "../components/hero"
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

    <Section name="projects" colour="#fbd0ef">
      <Projects />
    </Section>
    <Section name="skills" colour="#b7ffee">
      <Skills />
    </Section>

    <Section name="background" colour="#A27AFE">
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
