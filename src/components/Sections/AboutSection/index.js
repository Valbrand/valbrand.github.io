import React from 'react'

import myPhoto from './me.jpg'
import Section from '../Section'
import FullWidthImage from '../../FullWidthImage'
import Paragraph from '../../Paragraph'

const AboutSection = () => (
  <Section title='About me'>
    <div>
      <Paragraph>
        I'm a web/mobile developer with a passion for Javascript.
        I also happen to love functional programming, cooking and brewing coffee.
      </Paragraph>
      <Paragraph>
        Want to see the little things I'm proud of? Scroll down and check it out.
      </Paragraph>
    </div>

    <FullWidthImage src={myPhoto} alt="Daniel's photograph" />
  </Section>
)

export default AboutSection
