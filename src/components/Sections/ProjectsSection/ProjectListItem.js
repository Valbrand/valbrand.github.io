import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spaces, colors } from '../../../styles'
import media from '../../../styles/helpers/media'
import sanitizedCTAs from '../../../data/sanitizedCTAs.json'

class ProjectListItem extends Component {
  constructor (...args) {
    super(...args)

    this.state = {
      image: null
    }
  }

  render () {
    const { name, description, links, reversed } = this.props
    const { image } = this.state

    return (
      <Root>
        <Content reversed={reversed}>
          <DescriptionContainer reversed={reversed}>
            <DescriptionHeaderContainer>
              <DescriptionHeader>
                {name}
              </DescriptionHeader>

              {Object.keys(links).map((linkType) => {
                return (
                  <CallToAction
                    href={links[linkType]}
                    target='_blank'
                    key={linkType}
                  >
                    {sanitizedCTAs[linkType]}
                  </CallToAction>
                )
              })}
            </DescriptionHeaderContainer>
            <p>{description}</p>
          </DescriptionContainer>

          <AppIconContainer>
            {image ? <AppIcon src={image} alt={`${name} icon`} /> : null}
          </AppIconContainer>
        </Content>
      </Root>
    )
  }

  componentDidMount () {
    import(`./app-icons/${this.props.icon}`)
      .then((iconPath) => {
        this.setState({
          image: iconPath
        })
      })
  }
}

ProjectListItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.string,
  reversed: PropTypes.bool
}

const listItemHeight = 10

const Root = styled.li`
  position: relative;

  height: ${listItemHeight}rem;

  ${media.portfolio`
    height: auto;
  `}
`

const Content = styled.div`
  position: absolute;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: ${({ reversed }) => reversed ? 'row-reverse' : 'row'};
  justify-content: space-between;
  align-items: center;

  height: 100%;

  ${media.portfolio`
    position: static;

    flex-direction: column-reverse;
  `}
`

const DescriptionContainer = styled.div`
  flex: 1 0 0;

  padding-left: ${({ reversed }) => reversed ? spaces.large : 0};
  padding-right: ${({ reversed }) => reversed ? 0 : spaces.large};

  ${media.portfolio`
    padding: ${spaces.regular} 0 0 0;
  `}
`

const DescriptionHeaderContainer = styled.div`
  display: flex;
  align-items: center;
`

const DescriptionHeader = styled.h3`
  margin-right: ${spaces.small};
`

const CallToAction = styled.a`
  color: white;
  background-color: ${colors.link};

  text-decoration: none;
  font-size: 0.6rem;

  padding: ${spaces.smallest} ${spaces.small};
  border-radius: ${spaces.small};

  &:visited {
    color: white;
    background-color: ${colors.visitedLink};
  }
`

const AppIconContainer = styled.div`
  flex: 0 0 0;

  height: 100%;

  ${media.portfolio`
    height: auto;
  `}
`

const AppIcon = styled.img`
  height: 100%;
  width: auto;

  border-radius: ${listItemHeight * 0.175}rem;

  ${media.portfolio`
    width: 100%;
    height: auto;
  `}
`

export default ProjectListItem
