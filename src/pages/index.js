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
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Section name="hello" colour="#FEF46B">
      <Columns>
        <Column>
          Hi! I’m Masha, a UX designer & doodler with a background in language
          teaching and psychology ready to disrupt learning.
          <ContactLogos />
        </Column>
        <Column>
          <Hero />
        </Column>
      </Columns>
    </Section>

    <Section name="projects" colour="rgb(251,208,239)">
      <Circle colour="pink">
        <strong>
          Mastercard <br />
          live client
          <br />
        </strong>
        group
        <br />
        onboarding
      </Circle>
      <Circle colour="yellow">
        <strong>
          Ski Deal Comparison
          <br />
          live client
          <br />
        </strong>
        group
        <br />
        e-commerce
      </Circle>
      <Circle colour="orange">tabby cat</Circle>
    </Section>
    <Section name="skills" colour="rgb(183,255,238)">
      <Columns borders>
        <Column>
          <h3> Hard UX skills:</h3>
          <ul>
            <li>user research</li>
            <li>information architecture</li>
            <li>competitor analysis</li>
            <li>affinity mapping</li>
            <li>design studio</li>
            <li>storyboarding</li>
            <li>illustration</li>
            <li>persona</li>
            <li>scenario</li>
            <li>wireframing</li>
            <li>prototyping</li>
            <li>usability testing</li>
          </ul>
        </Column>
        <Column>
          <h3>UX Tools:</h3>
          <ul>
            <li>Sketch</li>
            <li>Figma</li>
            <li>InVision</li>
            <li>Marvel</li>
            <li>Zeplin</li>
            <li>Principle</li>
            <li>Autodesk</li>
            <li>SketchBook</li>
            <li>Miro</li>
            <li>HTML5 (basic)</li>
            <li>CSS (basic)</li>
            <li>Basecamp</li>
            <li>Google Drive</li>
            <li>Trello</li>
            <li>Slack </li>
          </ul>
        </Column>{" "}
        <Column>
          <h3>Soft UX skills:</h3>
          <ul>
            <li>agile</li>
            <li>lean</li>
            <li>design thinking</li>
            <li>facilitation</li>
            <li>brainstorming</li>
            <li>active listening</li>
            <li>standup</li>
            <li>teamwork</li>
            <li>presentation</li>
            <li>public speaking</li>
          </ul>
        </Column>
        <Column>
          <h3>Languages:</h3>
          <ul>
            <li>Russian native</li>
            <li>English fluent</li>
            <li>French intermediate</li>
          </ul>
        </Column>
      </Columns>
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
      <Columns>
        <Column>
          <h3>Illustration</h3>
          <p>
            I’m fascinated by how illustration can convey a story without words
            in any form. I love using sketching and storytelling techniques in
            my work process as well as daily life. I always look out for new
            talent and inspiration, and support independent illustrators.
          </p>
        </Column>
        <Column>
          <h3>Language</h3>
          <p>
            Through learning and teaching, foreign languages have always been a
            part of my life. Exploring the psychological aspects of language and
            observing my students using online platforms and apps for learning
            English was one of the key factors that inspired me to requalify in
            UX.
          </p>
        </Column>
        <Column>
          <h3>Nature</h3>
          <p>
            I love observing all kinds of animals in their natural habitat. Just
            to clarify: before I moved to London, I kept two giant snails as
            pets (now my parents take care of them). Urban wildlife in London is
            incredible: the abundance and variety of birds and plants is a
            genuine bliss!
          </p>
        </Column>
        <Column>
          <h3>Science</h3>
          <p>
            Studying behavioural genetics and neuroscience made me more
            sceptical about popular psychology news; I’m always eager to know
            what’s out there - but also, how reliable it is. It also helped me
            to realise how limited the access to scientific findings is - and
            would be happy to work on a project making knowledge more
            accessible.
          </p>
        </Column>
      </Columns>
    </Section>
    <Section colour="rgb(253,204,181)" name="FAQ">
      <div>
        <h4>What’s the best advice you’ve heard recently?</h4>

        <p>
          “Reject the state of distracted hyperconnectedness” - I’ve recently
          listened to Cal Newport on Dr Rangan Chatterjee’s podcast Feel Better
          Live More discussing How Social Media Can Make You Ill (ep 50). As
          somebody who’s been struggling with how addictive and distracting
          social media is myself, I find the public acknowledgment of how it
          affects our mental health empowering - as well as a reminder to keep
          it in mind when designing new digital products.
        </p>

        <h4>What is a product that you wish existed?</h4>

        <p>
          A tool allowing publicly shared artwork without watermarking or
          otherwise distorting - yet preventing any attempt to download,
          screenshot or copy it. Independent self-published artists suffer from
          various forms of copyright violation: from using their art for
          promoting products without credit online, to analog distribution
          without their consent or reimbursement. I wish the internet was a
          safer place for creators to showcase their work.
        </p>

        <h4>What’s your guilty pleasure?</h4>
        <p>
          I was obsessed with indie as a teenager, growing up in a tiny Siberian
          town without access to MTV or record shops - I’d learn everything from
          the local radio. When I first arrived in London, I booked all the gigs
          I could attend within my visa duration - including Arcade Fire in
          Belfast. I hate the crowds but hearing the artists I loved live is
          something I keep doing to indulge the 13 year old me who wouldn't have
          believed I'd ever be able to.
        </p>
      </div>
    </Section>
    <Section name="contact" colour="#CAF1D8" bleed>
      <ContactForm />
    </Section>
  </Layout>
)

export default IndexPage
