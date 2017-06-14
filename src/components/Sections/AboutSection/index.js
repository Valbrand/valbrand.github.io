import React from 'react'

import myPhoto from './me.jpg'
import Section from '../Section'
import FullWidthImage from '../../FullWidthImage'
import Paragraph from '../../Paragraph'

const AboutSection = ({ anchor }) => (
  <Section title="Hello, I'm Daniel" id={anchor}>
    <div>
      <Paragraph>
        I'm a web/mobile developer with a passion for Javascript.
        I also happen to love functional programming, cooking and brewing coffee.
      </Paragraph>
      <Paragraph>
        Every now and then, I take part in the creation of some cool stuff. Scroll down to check it out.
      </Paragraph>
    </div>

    <FullWidthImage src={myPhoto} alt="Daniel's photograph" />
  </Section>
)

export default AboutSection
