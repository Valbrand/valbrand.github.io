import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class ProjectListItem extends Component {
  constructor (...args) {
    super(...args)

    this.state = {
      image: null
    }
  }

  render () {
    const { name, description, link, reversed } = this.props
    const { image } = this.state

    return (
      <Root>
        <Content reversed={reversed}>
          <DescriptionContainer>
            <h3>
              <a href={link}>
                {name}
              </a>
            </h3>
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

const listItemHeight = 20

const Root = styled.li`
  position: relative;

  height: ${listItemHeight}rem;
`

const Content = styled.div`
  position: absolute;

  display: flex;
  flex-flow: row nowrap;
  flex-direction: ${({ reversed }) => reversed ? 'row-reverse' : 'row'};
  justify-content: space-between;
  height: 100%;
`

const DescriptionContainer = styled.div`
  flex: 1 0 0;
`

const AppIconContainer = styled.div`
  flex: 0 0 0;

  height: 100%;
`

const AppIcon = styled.img`
  height: 100%;
  width: auto;

  border-radius: ${listItemHeight * 0.175}rem;
`

export default ProjectListItem
