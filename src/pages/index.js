import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Section } from '../components/section';
import { Circle } from "../components/circle";
import { Timeline, Entry } from '../components/timeline';
import { Column, Columns } from "../components/columns";
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Section name="things" colour="#dd11ff"> 
<Columns borders>
<Column>
<h3>someething</h3>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</p>
</Column>
<Column>
<h3>someething</h3>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</p>
</Column>
<Column>
<h3>someething</h3>
<p>
hello</p>
</Column>

</Columns>
    </Section>
    <Section name="something" colour="green">
   <div> <h2>Hi people</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    </div></Section>
    <Section name="boop" colour="orange">
    <Circle colour="pink">
      hello
    </Circle> <Circle colour="yellow">
      lemon color
    </Circle>
    <Circle colour="orange">
      tabby cat
    </Circle>
    </Section>
    <Section bleed name="hello" colour="pink">

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    </Section>
    <Section name="hey" colour="#daba3e">
      <Timeline>
        <Entry place="tomsk">this is some text to explain </Entry>
        <Entry place="hello">what was going on at this point in time</Entry>
        <Entry place="hello">what was going on at this point in time</Entry>

        <Entry place="london">and provide some context on my experience</Entry>

      </Timeline>
    </Section>
  </Layout>
)

export default IndexPage
