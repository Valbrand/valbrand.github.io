import React from 'react'
import styled from 'styled-components'

import Section from '../Section'
import links from './links.json'
import Icon from './Icon'
import { spaces } from '../../../styles'

const ContactSection = ({ anchor }) => (
  <Section title='Contact' id={anchor}>
    <Content>
      <LinkList>
        {links.map((link) => (
          <LinkListItem key={link.name}>
            <Icon link={link} />
          </LinkListItem>
        ))}
      </LinkList>
    </Content>
  </Section>
)

const Content = styled.div`
  padding-left: ${spaces.large};
  padding-right: ${spaces.large};
`

const LinkList = styled.ul`
  list-style-type: none;

  display: flex;
`

const LinkListItem = styled.li`
  padding-right: ${spaces.regular};
`

export default ContactSection
